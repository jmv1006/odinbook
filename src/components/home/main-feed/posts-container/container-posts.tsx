import Post from "./post/post";

const PostsContainer = ({posts}: any) => {

    const mappedPosts = posts.map((post: any) => 
        <Post key={post.Id} post={post}/>
    );
    
    return(
        <>
            {mappedPosts}
        </>
    )
}

export default PostsContainer;