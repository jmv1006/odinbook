import { MainFeedContainerStyles } from "./styles";
import CreatePost from "./create-post/create-post";
import { HomePageContext } from "../../../context/homePageContext";
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import Post from "./posts/post/post";

const MainFeedContainer = () => {
    //fetch posts and user socket stuff here
    const { posts, reFetchPosts } = useContext(HomePageContext);
    const user = useContext(UserContext);

    const mappedPosts = posts.map((post: any) => 
        <Post key={post.Id} post={post} />
    );

    return(
        <MainFeedContainerStyles>
            <CreatePost user={user} reFetchPosts={reFetchPosts}/>
            {posts.length > 0 ? mappedPosts : "No Posts!"}
        </MainFeedContainerStyles>
    )
}

export default MainFeedContainer;