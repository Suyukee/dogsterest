import { useGetDogsQuery } from '@/store/dogs-api';
import BlogList from './blog-list';

function LikesPage() {
	const { data = [], isLoading, error } = useGetDogsQuery();

	const likesData = data.filter((blog) => {
		if (blog.isLike) {
			return blog;
		}
	});

	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isLoading && <div>Загрузка...</div>}
			{data && <BlogList blogs={likesData} />}
		</main>
	);
}

export default LikesPage;
