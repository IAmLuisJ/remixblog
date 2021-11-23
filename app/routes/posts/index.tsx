import { Link, useLoaderData } from "remix";

type Post = {
    slug: string;
    title: string;
}

export let loader = () => {
    let posts: Post[] = [
        {
            slug: 'my-first-post',
            title: 'first'
        },
        {
            slug: 'second-post',
            title: 'second',
        }
    ]
    return posts;
}

export default function Posts() {
    let posts = useLoaderData<Post[]>();
    return (
        <div>
            <h1>
                <ul>
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link to={post.slug}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            </h1>
        </div>)
}