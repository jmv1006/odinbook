import { MainFeedContainerStyles, NewPostInFeedNotification, SuggestedUsersBar, SuggestedUsersContainer} from "./styles";
import CreatePost from "../../shared/create-post/create-post";
import { HomePageContext } from "../../../context/homePageContext";
import { UserContext } from "../../../context/userContext";
import { useContext, useEffect, useRef } from "react";
import Post from "../../shared/post/post";
import UserCard from "../../shared/user-card/user-card";

type MainFeedContainerProps = {
    timelineUpdate: boolean,
    updateTimeline: () => void,
};

const MainFeedContainer = ({ timelineUpdate, updateTimeline } : MainFeedContainerProps) => {
    const { posts, reFetchPosts, postsLoading, suggested } = useContext(HomePageContext);
    const { user } = useContext<any>(UserContext);

    const dummy = useRef<any>(null);

    useEffect(() => {
        dummy.current.scrollIntoView({behavior: 'smooth'})
    }, [posts])

    const mappedPosts = posts.map((post: any) => 
        <Post key={post.Id} post={post} reload={reFetchPosts}/>
    );

    const mappedSuggested = suggested.map((user: any) => 
        <UserCard key={user.Id} user={user} isCurrentUser={false} />
    );

    return(
        <MainFeedContainerStyles>
            <div ref={dummy} />
            <CreatePost user={user} reFetchPosts={reFetchPosts}/>
            {timelineUpdate && <NewPostInFeedNotification onClick={updateTimeline}>New Update</NewPostInFeedNotification>}
            {suggested.length > 0
            &&
                <SuggestedUsersContainer>
                    Suggested For You:
                    <SuggestedUsersBar>{mappedSuggested}</SuggestedUsersBar>
                </SuggestedUsersContainer>
            }
            {posts.length > 0 && mappedPosts}
            {posts.length === 0 && !postsLoading ? "No Posts To Show!" : null}
            {postsLoading && "Loading..."}
        </MainFeedContainerStyles>
    )
}

export default MainFeedContainer;