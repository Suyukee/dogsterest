'use client';

import { useGetDogsQuery } from '@/store/dogs-api';
import LikesList from '../components/likes-list';

function LikesPage() {
	const { data = [], isLoading, error } = useGetDogsQuery();
	return (
		<main className="content">
			{error && <div>{error}</div>}
			{isLoading && <div>Загрузка...</div>}
			{data && <LikesList blogs={data} />}
		</main>
	);
}

export default LikesPage;
