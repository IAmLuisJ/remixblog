export type Post = {
    slug: string;
    title: string;
}

export function getPosts() {
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