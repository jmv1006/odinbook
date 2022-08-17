import { PostsWrapper, UserPagePostsWrapper } from "./styles";
import Post from "../../shared/post/post";
import { useUserPageContext } from "../../../context/userPageContext";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import CreatePost from "../../shared/create-post/create-post";

const UserPagePosts = () => {
    const { userPosts, isCurrentUser, updatePostsActions } = useUserPageContext();

    const {user: currentUser} = useContext<any>(UserContext);

    
    const mappedPosts = userPosts.map((post : any) =>
        <Post key={post.Id} post={post} update={updatePostsActions.updatePost} deletePost={updatePostsActions.deletePost}/>
    );
    

    return(
        <UserPagePostsWrapper>
            <PostsWrapper>
                {isCurrentUser && <CreatePost user={currentUser} addPost={updatePostsActions.addPost}/>}
                {mappedPosts}
                {mappedPosts.length === 0 && "User Has No Posts!"}
            </PostsWrapper>
        </UserPagePostsWrapper>
    )
}

export default UserPagePosts;