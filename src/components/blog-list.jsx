function BlogList({ blogs }) {
	function handleClick(blog) {
		// useLikeDogMutation(blog);
	}

	return (
		<article className="article">
			{blogs.map((blog) => (
				<button className="blog-preview" key={blog.id} onClick={handleClick(blog)}>
					<svg className="svg" viewBox="0 0 24 24">
						<path
							d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
							fill={blog.isLike ? '#f1356d' : '#aaa'}
						></path>
					</svg>

					{blog.imageUrl.substr(-3) === 'mp4' ? (
						<video className="img" width={250} height={250} muted autoPlay loop>
							<source src={blog.imageUrl} type="video/mp4" />
						</video>
					) : (
						<img className="img" src={blog.imageUrl} width={250} height={250} />
					)}
				</button>
			))}
		</article>
	);
}

export default BlogList;
