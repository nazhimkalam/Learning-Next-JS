import Nav from '../Nav/Nav';

function Layout({children}) {
	return (
		<div className="layout">
			<Nav />
			{children}
		</div>
	);
}

export default Layout;
