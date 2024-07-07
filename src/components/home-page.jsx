import BlogList from '../components/blog-list';
import { useGetDogsQuery } from '@/store/dogs-api';
import Preloader from '../components/preloader';
import { useEffect } from 'react';

function HomePage() {
	const { data = [], isLoading, error } = useGetDogsQuery();

	const likesData = data.filter((blog) => {
		if (blog.isLike) {
			return blog;
		}
	});

	useEffect(() => {
		if (likesData && likesData.length !== 0) {
			const json = JSON.stringify(likesData);
			window.localStorage.setItem('LIKE_DOG', json);
		}
	}, [likesData]);

	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isLoading && <Preloader />}
			{data && <BlogList blogs={data} />}
		</main>
	);
}

export default HomePage;
