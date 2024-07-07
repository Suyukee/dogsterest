import BlogList from '../components/blog-list';
import { useGetDogsQuery } from '@/store/dogs-api';
import Preloader from '../components/preloader';

function HomePage() {
	const { data = [], isLoading, error } = useGetDogsQuery();

	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isLoading && <Preloader />}
			{data && <BlogList blogs={data} />}
		</main>
	);
}

export default HomePage;
