import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { watchLogin } from '@src/store/login/sagas';
import { watchRegister } from '@src/store/register/sagas';

const sagas = [
	watchLogin,
	watchRegister,
];

export default function* rootSaga(): SagaIterator {
	yield all(sagas.map(fork));
}
