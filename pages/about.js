import Link from 'next/link';

function about() {
    return (
        <div>
            <h3>This is the about page</h3>
            <Link href="/">
				Index Page
			</Link>
        </div>
    )
}

export default about