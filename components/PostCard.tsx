"use client"

interface Post {
    userId: number;
    id: number;
    title:  string;
    body: string;
}


export default function PostCard({ post } : { post: Post }){
    return (
        <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <button onClick={() => alert(JSON.stringify(post))}>
                View Post
            </button>
        </div>
    )
}