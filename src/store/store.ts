import { configureStore } from '@reduxjs/toolkit';
import { dogsApi } from './dogs-api';

export const store = configureStore({
	reducer: {
		[dogsApi.reducerPath]: dogsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dogsApi.middleware),
});
