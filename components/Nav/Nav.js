import Link from 'next/link';

function Nav() {
	return (
		<div className="nav">
			<img src="/static/messi.jpg" alt="Messi" height="100" />

			<Link href="/">
				<a> Home </a>
			</Link>
            <Link href="/about">
				<a> About </a>
			</Link>
		</div>
	);
}

export default Nav;
