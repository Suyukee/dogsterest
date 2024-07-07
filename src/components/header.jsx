'use client';

import Link from 'next/link';

function Header({ all, likes }) {
	return (
		<header className="header">
			<h1 className="header__logo">Dogsterest</h1>
			<nav className="header__navbar">
				<div className="navbar__menu">
					<Link className={all ? 'active' : ''} href="/">
						Все собачки
					</Link>
					<Link className={likes ? 'active' : ''} href="/likes">
						Любимые собачки
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;
