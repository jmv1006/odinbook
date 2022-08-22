import { MainFeedContainerStyles, NewPostInFeedNotification, SuggestedUsersBar, SuggestedUsersContainer, SuggestedUsersTop} from "./styles";
import CreatePost from "../../shared/create-post/create-post";
import { HomePageContext } from "../../../context/homePageContext";
import { UserContext } from "../../../context/userContext";
import { useContext, useEffect, useRef, useState } from "react";
import Post from "../../shared/post/post";
import UserCard from "../../shared/user-card/user-card";
import IPost from "../../../interfaces/post";

interface IPostActions {
    addPostToTimeline: (post: IPost) => void,
    updatePostInTimeline: (post: IPost) => void,
    deletePostInTimeline: (post: IPost) => void
}

type MainFeedContainerProps = {
    timelineUpdate: boolean,
    setPaginationPage: any,
    postActions: IPostActions
};

const MainFeedContainer = ({ setPaginationPage, postActions } : MainFeedContainerProps) => {
    const { posts, postsLoading, suggested } = useContext(HomePageContext);
    const { user } = useContext<any>(UserContext);

    const dummy = useRef<any>(null);
    const [suggestedToggled, setSuggestedToggled] = useState(false);
    
    useEffect(() => {
        if(suggested && suggested.length > 0) {
            setSuggestedToggled(suggestedToggled => true)
        }
    }, [suggested])

    const mappedPosts = posts.map((post: any) => 
        <Post key={post.Id} post={post} update={postActions.updatePostInTimeline} deletePost={postActions.deletePostInTimeline}/>
    );

    const mappedSuggested = suggested.map((user: any) => 
        <UserCard key={user.Id} user={user} isCurrentUser={false} />
    );

    const toggleSuggestedBar = () => {
        if(suggestedToggled) return setSuggestedToggled(suggestedToggled => false);
    };

    return(
        <MainFeedContainerStyles>
            <div ref={dummy} />
            <CreatePost user={user} addPost={postActions.addPostToTimeline}/>
            {/*timelineUpdate && <NewPostInFeedNotification onClick={updateTimeline}>New Update</NewPostInFeedNotification>*/}
            {suggestedToggled && 
                <SuggestedUsersContainer>
                    <SuggestedUsersTop>
                        <div>Suggested For You:</div>
                        <button onClick={toggleSuggestedBar}>X</button>
                    </SuggestedUsersTop>
                    <SuggestedUsersBar>{mappedSuggested}</SuggestedUsersBar>
                </SuggestedUsersContainer>
            }
            {posts.length > 0 && mappedPosts}
            {posts.length === 0 && !postsLoading ? "No Posts To Show!" : null}
            {postsLoading && "Loading..."}
            {!postsLoading && <button onClick={() => setPaginationPage((paginationPage : any) => paginationPage + 1)}>Load More</button>}
        </MainFeedContainerStyles>
    )
}

export default MainFeedContainer;