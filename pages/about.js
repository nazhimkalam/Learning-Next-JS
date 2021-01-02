import Link from 'next/link';

function about() {
	return (
		<div>
			<h3>This is the about page</h3>
			<Link href="/">
				<a style={{ textDecoration: 'none' }}>Index Page</a>
			</Link>

			<p>This is a sample paragraph, to test new styling way (scope styling) in next js</p>
			<style jsx>{`
				p {
					color: red;
				}
			`}</style>
		</div>
	);
}

export default about;
