import Router from 'next/router';
import { useState } from 'react';
import Layout from '../components/Layout';

function News({ news }) {
	const [searchQuery, setSearchQuery] = useState('react');

	const handleSubmit = (e) => {
		e.preventDefault();
		Router.push(`/news/?searchTerm=${searchQuery}`);
	};

	const searchForm = () => (
		<form onSubmit={handleSubmit} className="form">
			<input
				type="text"
				placeholder="Search News"
				value={searchQuery}
				onChange={(e) => {
					setSearchQuery(e.target.value);
				}}
			/>
			<button className="btn btn-sm btn-primary" onClick={handleSubmit}>Search</button>
		</form>
	);

	return (
		<Layout className="news" title="News">
			<div>
				<h3>List of News</h3>

				<hr />
                <h4>Search Result for: {searchQuery}</h4>
				<hr />
				{searchForm()}
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

// in react we use useEffect() but here in next js we use getInitialProps
News.getInitialProps = async ({ query }) => {
	let news;

	try {
		const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query.searchTerm}`);
		news = await res.json();
		console.log('fetching data');
	} catch (err) {
		console.log(err.message);
		news = [];
	}

	return { news: news.hits };
};

export default News;
