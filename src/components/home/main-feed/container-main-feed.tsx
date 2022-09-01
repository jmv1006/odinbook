import { useContext, useEffect, useRef, useState } from "react";
import { HomePageContext } from "../../../context/homePageContext";
import { UserContext } from "../../../context/userContext";
import CreatePost from "../../shared/create-post/create-post";
import Post from "../../shared/post/post";
import IPost from "../../../interfaces/post";
import { LoadMorePostsBtn, MainFeedContainerStyles } from "./styles";
import SuggestedForYou from "./suggested";
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

const MainFeedContainer = ({ setPaginationPage, postActions }: MainFeedContainerProps) => {
    const { posts, postsLoading, suggested } = useContext(HomePageContext);
    const { user } = useContext<any>(UserContext);

    const dummy = useRef<any>(null);
    const [suggestedToggled, setSuggestedToggled] = useState(false);

    useEffect(() => {
        if (suggested && suggested.length > 0) {
            setSuggestedToggled(suggestedToggled => true)
        }
    }, [suggested])

    const mappedPosts = posts.map((post: any) =>
        <Post key={post.Id} post={post} update={postActions.updatePostInTimeline} deletePost={postActions.deletePostInTimeline} />
    );

    const toggleSuggestedBar = () => {
        if (suggestedToggled) return setSuggestedToggled(suggestedToggled => false);
        else setSuggestedToggled(suggestedToggled => true)
    };

    return (
        <MainFeedContainerStyles>
            <div ref={dummy} />
            <CreatePost user={user} addPost={postActions.addPostToTimeline} />
            {/*timelineUpdate && <NewPostInFeedNotification onClick={updateTimeline}>New Update</NewPostInFeedNotification>*/}
            {suggestedToggled && <SuggestedForYou toggle={toggleSuggestedBar} />}
            {postsLoading && "Loading..."}
            {posts.length > 0 && mappedPosts}
            {posts.length === 0 && !postsLoading ? "No Posts To Show!" : null}
            {!postsLoading && <LoadMorePostsBtn onClick={() => setPaginationPage((paginationPage: any) => paginationPage + 1)}>Load More</LoadMorePostsBtn>}
        </MainFeedContainerStyles>
    )
}

export default MainFeedContainer;