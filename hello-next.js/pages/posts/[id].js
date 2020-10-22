import { useRouter } from 'next/router'
import posts from './../../post.json'

function Posts() {
    const router = useRouter();
    const post = posts[Number(router.query.id)];

    console.log(posts)

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    )
}

export default Posts