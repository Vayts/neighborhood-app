import { SagaIterator } from 'redux-saga';
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { searchNeighborhoodsRequest, sendMemberRequest, userNeighborhoodsRequest } from '@src/store/neighborhoods/actions';
import { errorManager } from '@src/api/errorManager';
import { ERRORS } from '@constants/errors';
import {
	currentNeighborhoodsRequestEnd,
	currentNeighborhoodsRequestStart, searchNeighborhoodsRequestEnd, searchNeighborhoodsRequestStart, setCurrentNeighborhoods,
	setSearchLoadingIds,
	setSearchNeighborhoods,
} from '@src/store/neighborhoods/reducer';
import { tokenExpired } from '@src/store/user/saga';
import { selectUser } from '@src/store/user/selectors';
import { generateAxiosWithToken } from '@src/api/axiosPrivate';
import { getRequest } from '@src/api/request';
import { ROUTES } from '@constants/routes';
import { selectSearchNeighborhoods, selectSearchNeighborhoodsLoadingIds } from '@src/store/neighborhoods/selectors';
import { getNotification } from '@src/notification/notifications';
import i18next from 'i18next';

const { t } = i18next;

function* userNeighborhoodsSaga() {
	try {
		yield put(currentNeighborhoodsRequestStart());
		const user = yield select(selectUser);
		const axiosPrivate = generateAxiosWithToken(user);
		const response = yield call(getRequest, ROUTES.neighborhoods.userNeighborhoods, axiosPrivate);
		yield put(setCurrentNeighborhoods(response.data));
	} catch (e) {
		if (e?.response?.data?.message === ERRORS.NOT_AUTHORIZED) {
			yield call(tokenExpired, () => userNeighborhoodsRequest());
		} else {
			errorManager(e);
		}
	} finally {
		yield put(currentNeighborhoodsRequestEnd());
	}
}

function* neighborhoodsSearchSaga(action) {
	if (action.payload.title.trim().length < 1) {
		yield put(setSearchNeighborhoods([]));
		return false;
	}
	
	try {
		yield put(setSearchNeighborhoods([]));
		yield put(searchNeighborhoodsRequestStart());
		const user = yield select(selectUser);
		const axiosPrivate = generateAxiosWithToken(user);
		const response = yield call(getRequest, `${ROUTES.neighborhoods.searchNeighborhoods}/${action.payload.title}`, axiosPrivate);
		yield put(setSearchNeighborhoods(response.data));
	} catch (e) {
		if (e?.response?.data?.message === ERRORS.NOT_AUTHORIZED) {
			yield call(tokenExpired, () => searchNeighborhoodsRequest(action.payload.title));
		} else {
			errorManager(e);
		}
	} finally {
		yield put(searchNeighborhoodsRequestEnd());
	}
}

function* memberRequestSaga(action): SagaIterator {
	const neighborhoodId = action.payload.neighborhoodId;
	try {
		const searchLoadingIds = yield select(selectSearchNeighborhoodsLoadingIds);
		const newLoadingIdsState = [...searchLoadingIds, neighborhoodId];
		yield put(setSearchLoadingIds(newLoadingIdsState));
		const user = yield select(selectUser);
		const axiosPrivate = generateAxiosWithToken(user);
		yield call(getRequest, `${ROUTES.neighborhoods.memberRequest}/${neighborhoodId}`, axiosPrivate);
		const searchItems = yield select(selectSearchNeighborhoods);
		const newSearchState = searchItems.map((item) => {
			if (item._id === neighborhoodId) {
				return {
					...item,
					status: 1,
				};
			}
			return item;
		});
		yield put(setSearchNeighborhoods(newSearchState));
		getNotification(t('memberRequestSent'));
	} catch (e) {
		if (e?.response?.data?.message === ERRORS.NOT_AUTHORIZED) {
			yield call(tokenExpired, () => sendMemberRequest(neighborhoodId));
		} else {
			errorManager(e);
		}
	} finally {
		const searchLoadingIds = yield select(selectSearchNeighborhoodsLoadingIds);
		const filteredIds = searchLoadingIds.filter((item) => {
			if (item !== neighborhoodId) {
				return item;
			}
			return null;
		});
		yield put(setSearchLoadingIds(filteredIds));
	}
}

export function* watchNeighborhoods(): SagaIterator {
	yield takeLatest(userNeighborhoodsRequest, userNeighborhoodsSaga);
	yield takeLatest(searchNeighborhoodsRequest, neighborhoodsSearchSaga);
	yield takeEvery(sendMemberRequest, memberRequestSaga);
}
