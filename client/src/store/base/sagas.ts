import { call, put, takeLatest } from 'redux-saga/effects';
import { loadApp, loadAppEnd } from '@src/store/base/reducer';
import { SagaIterator } from 'redux-saga';
import { getRequest } from '@src/api/request';
import { ROUTES } from '@constants/routes';
import { setUser } from '@src/store/user/reducer';

function* appSaga(): SagaIterator {
	try {
		const response = yield call(getRequest, ROUTES.auth.refresh);
		if (response.data) {
			yield put(setUser(response.data));
			yield put(loadAppEnd());
		}
	} catch (e) {
		yield put(loadAppEnd());
	}
}
export function* watchApp(): SagaIterator {
	yield takeLatest(loadApp, appSaga);
}
