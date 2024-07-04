'use client';

import useFetch from './use-fetch';
import LikesList from '../components/likes-list';

function LikesPage() {
	const { data: blogs, isPending, error } = useFetch('http://localhost:3001/blogs');
	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isPending && <div>Загрузка...</div>}
			{blogs && <LikesList blogs={blogs} />}
		</main>
	);
}

export default LikesPage;
