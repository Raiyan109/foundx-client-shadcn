import { getRecentPosts } from "@/services/RecentPosts"

const RecentPosts = async () => {
    const { data: posts } = await getRecentPosts()
    return (
        <div>
            <h1>RecentPosts</h1>
            <div>
                {posts.map((post) => (
                    <div key={post?._id}>
                        <h1>{post?.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentPosts