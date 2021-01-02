import Link from 'next/link';

function index() {
	return (
		<div>
			<h2>Hello World!</h2>
			<Link href="/about">
				About Page
			</Link>
		</div>
	);
}

export default index;
