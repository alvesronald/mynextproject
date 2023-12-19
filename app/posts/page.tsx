import PostCard from "@/components/PostCard";

interface Post {
    userId: number;
    id: number;
    title:  string;
    body: string;
}



async function loadPosts(): Promise<Post[]>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data: Post[] = await response.json()

    await  new Promise((resolve) => setTimeout(resolve, 3000) )
    return data
}

// server component
async function PostPage(){
    const posts = await loadPosts()

    return (
        <>
            <h1>PostPage</h1>
            {posts.map((post) => (
                <PostCard 
                    post={post} 
                    key={post.id}
                />
            ))}
        </>
    )
}

export default PostPage;