import { SagaIterator } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { userNeighborhoodsRequest } from '@src/store/neighborhoods/actions';
import { errorManager } from '@src/api/errorManager';
import { ERRORS } from '@constants/errors';
import { setUserNeighborhoods, userNeighborhoodsRequestEnd, userNeighborhoodsRequestStart } from '@src/store/neighborhoods/reducer';
import { tokenExpired } from '@src/store/user/saga';
import { selectUser } from '@src/store/user/selectors';
import { generateAxiosWithToken } from '@src/api/axiosPrivate';
import { getRequest } from '@src/api/request';
import { ROUTES } from '@constants/routes';

function* userNeighborhoodsSaga() {
	try {
		yield put(userNeighborhoodsRequestStart());
		const user = yield select(selectUser);
		const axiosPrivate = generateAxiosWithToken(user);
		const response = yield call(getRequest, ROUTES.neighborhoods.userNeighborhoods, axiosPrivate);
		yield put(setUserNeighborhoods(response.data));
		yield put(userNeighborhoodsRequestEnd());
	} catch (e) {
		if (e?.response?.data?.message === ERRORS.NOT_AUTHORIZED) {
			yield call(tokenExpired, () => userNeighborhoodsRequest());
		} else {
			errorManager(e);
			yield put(userNeighborhoodsRequestEnd());
		}
	}
}

export function* watchNeighborhoods(): SagaIterator {
	yield takeLatest(userNeighborhoodsRequest, userNeighborhoodsSaga);
}
