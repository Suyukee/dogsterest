'use client';

import { Provider } from 'react-redux';
import Header from '../../components/header';
import LikesPage from '../../components/likes-page';
import { store } from '@/store/store';

function Likes() {
	return (
		<Provider store={store}>
			<div className="wrapper">
				<Header />
				<LikesPage />
			</div>
		</Provider>
	);
}

export default Likes;
