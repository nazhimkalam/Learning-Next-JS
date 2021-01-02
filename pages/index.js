import Link from 'next/link';

function index() {
	return (
		<div>
			<h2>Hello World!</h2>
			<Link href="/about">
				<a style={myStyle}>About Page</a>
			</Link>
		</div>
	);
}

const myStyle = {
	textDecoration: 'none',
	color: 'green',
};
export default index;
