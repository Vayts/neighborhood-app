import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '@src/store/sagas';
import { loginSlice } from '@src/store/login/reducer';
import { userSlice } from '@src/store/user/reducer';
import { registerSlice } from '@src/store/register/reducer';
import { baseSlice } from '@src/store/base/reducer';
import { neighborhoodsSlice } from '@src/store/neighborhoods/reducer';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
	reducer: {
		base: baseSlice.reducer,
		user: userSlice.reducer,
		login: loginSlice.reducer,
		register: registerSlice.reducer,
		neighborhoods: neighborhoodsSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
