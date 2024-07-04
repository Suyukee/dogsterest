'use client';

import useFetch from './use-fetch';
import LikesList from '../components/likes-list';

function LikesPage() {
	const { data: blogs, isPending, error } = useFetch('https://dogsterest-data.onrender.com/blogs');
	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isPending && <div>Загрузка...</div>}
			{blogs && <LikesList blogs={blogs} />}
		</main>
	);
}

export default LikesPage;
