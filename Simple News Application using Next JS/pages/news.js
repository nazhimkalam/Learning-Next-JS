import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
// import Error from "./_error"
// import fetch from 'isomorphic-fetch';

function News({ news }) {
	return (
		<Layout className="news" title="News">
			<div>
				<h3>List of News</h3>

				<hr />
				{news.map((news_, index) => (
					<p key={index}>
						<a href={news_.url} target="_blank">
							{news_.title}
						</a>
					</p>
				))}
			</div>
		</Layout>
	);
}

News.getInitialProps = async () => {
	let news;

	try {
		const res = await fetch('https://hn.algolia.com/api/v1/search?query=react');
		news = await res.json();
		console.log('fetching data');
	} catch (err) {
		console.log(err.message);
		news = [];
	}

	return { news: news.hits };
};

export default News;
