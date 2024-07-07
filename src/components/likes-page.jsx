import BlogList from './blog-list';

function LikesPage() {
	const json = window.localStorage.getItem('LIKE_DOG');
	const likesData = JSON.parse(json);

	return (
		<main className="content">
			{likesData && <BlogList blogs={likesData} />}
			{!likesData && <div>Здесь пока ничего нет</div>}
		</main>
	);
}

export default LikesPage;
