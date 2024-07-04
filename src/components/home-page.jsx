'use client';

import useFetch from './use-fetch';
import BlogList from '../components/blog-list';

function HomePage() {
	const { data: blogs, isPending, error } = useFetch('http://localhost:3001/blogs');
	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isPending && <div>Загрузка...</div>}
			{blogs && <BlogList blogs={blogs} />}
		</main>
	);
}

export default HomePage;
