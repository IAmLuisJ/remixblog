import { Link, useLoaderData } from "remix";
import { getPosts } from "~/post";
import type { Post } from "~/post";

export default function Posts() {
    let posts: Post[] = getPosts();
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