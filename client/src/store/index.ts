import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@src/store/saga';
import { loginSlice } from '@src/store/login/reducer';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: {
		login: loginSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
