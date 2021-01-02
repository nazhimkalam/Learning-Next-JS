import Link from 'next/link';
import Nav from '../components/Nav/Nav';

function about() {
	return (
		<div>
			<Nav />
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
