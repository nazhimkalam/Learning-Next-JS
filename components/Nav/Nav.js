import Link from 'next/link';

function Nav() {
	return (
		<div className="nav">
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
