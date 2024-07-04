import BlogList from '../components/blog-list';
import { useGetDogsQuery } from '@/store/dogs-api';

function HomePage() {
	const { data = [], isLoading, error } = useGetDogsQuery();
	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isLoading && <div>Загрузка...</div>}
			{data && <BlogList blogs={data} />}
		</main>
	);
}

export default HomePage;
