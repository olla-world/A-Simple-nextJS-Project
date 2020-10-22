import Link from 'next/link';

import posts from './../../post.json';


function Posts() {
    return (
        <div>
            {posts.map((post, index) =>

                <Link href='/posts/[id]' as={'/posts/' + index}>
                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                </Link>

            )}
        </div>
    )
}

export default Posts