import React from 'react';

function Layout({ children, title }) {
	return (
		<div className="container mt-4">
			<h1>{title}</h1>
			<hr />
			{children}
		</div>
	);
}

export default Layout;
