import { MainFeedContainerStyles } from "./styles";
import PostsContainer from "./posts-container/container-posts";
import CreatePost from "./create-post/create-post";
import { useEffect, useState } from "react";

const MainFeedContainer = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/posts/all')
        .then(res => res.json())
        .then(res => setPosts(posts => res))
    }, [])

    return(
        <MainFeedContainerStyles>
            Main Feed:
            <CreatePost />
            <PostsContainer posts={posts}/>
        </MainFeedContainerStyles>
    )
}

export default MainFeedContainer;