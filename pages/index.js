import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

function index() {
	return (
		<Layout header="This is a header" footer="This is a footer">
			{/* The following entire content is passed as props to the Layout component*/}
			<head>
				<title>Home Page</title>
				<meta name="description" content="Learning Next Js" />
			</head>
			<h2>Hello World!</h2>
			<Link href="/about">
				<a style={myStyle}>About Page</a>
			</Link>
		</Layout>
	);
}

const myStyle = {
	textDecoration: 'none',
	color: 'green',
};
export default index;
