import { MainFeedContainerStyles } from "./styles";
import PostsContainer from "./posts-container/container-posts";
import CreatePost from "./create-post/create-post";

const MainFeedContainer = ({posts, user}: any) => {

    return(
        <MainFeedContainerStyles>
            <CreatePost user={user}/>
            <PostsContainer posts={posts}/>
        </MainFeedContainerStyles>
    )
}

export default MainFeedContainer;