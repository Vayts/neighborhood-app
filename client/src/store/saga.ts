import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { watchLogin } from '@src/store/login/sagas';

const sagas = [
	watchLogin,
];

export default function* rootSaga(): SagaIterator {
	yield all(sagas.map(fork));
}
