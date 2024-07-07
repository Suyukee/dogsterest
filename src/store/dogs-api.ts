import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dogsApi = createApi({
	reducerPath: 'dogsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dogsterest-data.onrender.com/' }),
	endpoints: (build) => ({
		getDogs: build.query({
			query: (limit = '') => `dogs?${limit && `_limit=${limit}`}`,
		}),
		likeDog: build.mutation({
			query(data) {
				const { id, ...body } = data;
				return {
					url: `dogs/${id}`,
					method: 'PUT',
					body,
				};
			},
		}),
	}),
});

export const { useGetDogsQuery, useLikeDogMutation } = dogsApi;
