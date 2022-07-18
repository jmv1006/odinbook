import { MainFeedContainerStyles, NewPostInFeedNotification } from "./styles";
import CreatePost from "../../shared/create-post/create-post";
import { HomePageContext } from "../../../context/homePageContext";
import { UserContext } from "../../../context/userContext";
import { useContext, useEffect, useRef } from "react";
import Post from "../../shared/post/post";

type MainFeedContainerProps = {
    timelineUpdate: boolean,
    updateTimeline: () => void
};

const MainFeedContainer = ({ timelineUpdate, updateTimeline } : MainFeedContainerProps) => {
    const { posts, reFetchPosts, postsLoading } = useContext(HomePageContext);
    const { user } = useContext<any>(UserContext);

    const dummy = useRef<any>(null);

    useEffect(() => {
        dummy.current.scrollIntoView({behavior: 'smooth'})
    }, [posts])

    const mappedPosts = posts.map((post: any) => 
        <Post key={post.Id} post={post} />
    );

    return(
        <MainFeedContainerStyles>
            <div ref={dummy} />
            <CreatePost user={user} reFetchPosts={reFetchPosts}/>
            {timelineUpdate && <NewPostInFeedNotification onClick={updateTimeline}>New Update</NewPostInFeedNotification>}
            {posts.length > 0 && mappedPosts}
            {posts.length === 0 && !postsLoading ? "No Posts To Show!" : null}
            {postsLoading && "Loading..."}
        </MainFeedContainerStyles>
    )
}

export default MainFeedContainer;