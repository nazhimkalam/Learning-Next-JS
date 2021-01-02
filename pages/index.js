import Link from 'next/link';
import Nav from '../components/Nav/Nav';
import Head from 'next/head';

function index() {
	return (
		<div>
			<head>
				<title>Home Page</title>
				<meta name="description" content="Learning Next Js" />
			</head>
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
