import Nav from '../Nav/Nav';

function Layout({ header, footer, children }) {
	return (
		<div className="layout">
			<h1>{header}</h1>
			<hr />
			<Nav />
			{children}
            <hr/>
            <h3>{footer}</h3>
		</div>
	);
}

export default Layout;
