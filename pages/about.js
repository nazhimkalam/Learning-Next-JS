import Link from 'next/link';
import Nav from '../components/Nav/Nav';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

function about() {
	return (
		<Layout>
            {/* The following entire content is passed as props to the Layout component*/}
			<head>
				<title>About Page</title>
				<meta name="description" content="Learning Next Js" />
			</head>
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
		</Layout>
	);
}

export default about;
