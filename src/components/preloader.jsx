export default function Preloader() {
	return (
		<main className="preloader">
			<h2 className="preloader__title">Загрузка</h2>
			<svg className="preloader__icon" viewBox="0 0 200 200">
				<circle fill="#e60023" stroke="#e60023" strokeWidth="15" r="15" cx="40" cy="65">
					<animate
						attributeName="cy"
						calcMode="spline"
						dur="2"
						values="65;135;65;"
						keySplines=".5 0 .5 1;.5 0 .5 1"
						repeatCount="indefinite"
						begin="-.4"
					></animate>
				</circle>
				<circle fill="#e60023" stroke="#e60023" strokeWidth="15" r="15" cx="100" cy="65">
					<animate
						attributeName="cy"
						calcMode="spline"
						dur="2"
						values="65;135;65;"
						keySplines=".5 0 .5 1;.5 0 .5 1"
						repeatCount="indefinite"
						begin="-.2"
					></animate>
				</circle>
				<circle fill="#e60023" stroke="#e60023" strokeWidth="15" r="15" cx="160" cy="65">
					<animate
						attributeName="cy"
						calcMode="spline"
						dur="2"
						values="65;135;65;"
						keySplines=".5 0 .5 1;.5 0 .5 1"
						repeatCount="indefinite"
						begin="0"
					></animate>
				</circle>
			</svg>
		</main>
	);
}
