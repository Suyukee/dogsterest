'use client';

import { Provider } from 'react-redux';
import Header from '../components/header';
import HomePage from '../components/home-page';
import { store } from '@/store/store';

export default function Home() {
	return (
		<Provider store={store}>
			<div className="wrapper">
				<Header all={true} likes={false} />
				<HomePage />
			</div>
		</Provider>
	);
}
