'use client';

import useFetch from './use-fetch';
import BlogList from '../components/blog-list';

function HomePage() {
	const { data: blogs, isPending, error } = useFetch('https://dogsterest-data.onrender.com/blogs');
	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isPending && <div>Загрузка...</div>}
			{blogs && <BlogList blogs={blogs} />}
		</main>
	);
}

export default HomePage;
