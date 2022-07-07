import Post from "./post/post";

const PostsContainer = ({posts, user}: any) => {
    const mappedPosts = posts.map((post: any) => 
        <Post key={post.Id} post={post} user={user}/>
    );
    
    return(
        <>
            {mappedPosts}
        </>
    )
}

export default PostsContainer;