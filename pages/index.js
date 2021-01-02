import Link from 'next/link';
import Nav from '../components/Nav/Nav';

function index() {
	return (
		<div>
            <Nav />
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
