import { MainFeedContainerStyles } from "./styles";
import PostsContainer from "./posts-container/container-posts";
import CreatePost from "./create-post/create-post";
import { HomePageContext } from "../../../context/homePageContext";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";

const MainFeedContainer = () => {
    //fetch posts and user socket stuff here
    const { posts, reFetchPosts } = useContext(HomePageContext);
    const user = useContext(UserContext);

    return(
        <MainFeedContainerStyles>
            <CreatePost user={user} reFetchPosts={reFetchPosts}/>
            <PostsContainer posts={posts} user={user}/>
        </MainFeedContainerStyles>
    )
}

export default MainFeedContainer;