import Link from 'next/link';

function index() {
	return (
		<div className="index container mt-4">
			<Link href="/news">
				<a>
					<h3>Click to view news</h3>
				</a>
			</Link>
		</div>
	);
}

export default index;
