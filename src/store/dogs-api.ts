import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
	id: number;
	name: string;
}
type PostsResponse = Post[];

export const dogsApi = createApi({
	reducerPath: 'dogsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dogsterest-data.onrender.com/' }),
	tagTypes: ['Dogs'],
	endpoints: (build) => ({
		getDogs: build.query<PostsResponse, void>({
			query: () => 'dogs',
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({ type: 'Dogs' as const, id })),
							{ type: 'Dogs', id: 'LIST' },
					  ]
					: [{ type: 'Dogs', id: 'LIST' }],
		}),

		// getPost: build.query<Post, number>({
		// 	query: (id) => `post/${id}`,
		// 	providesTags: (result, error, id) => [{ type: 'Dogs', id }],
		// }),

		likeDog: build.mutation({
			query(data) {
				const { id, ...body } = data;
				return {
					url: `dogs/${id}`,
					method: 'PUT',
					body,
				};
			},
			invalidatesTags: [{ type: 'Dogs', id: 'LIST' }],
		}),
	}),
});

export const { useGetDogsQuery, useLikeDogMutation } = dogsApi;
