import { PostsWrapper, UserPagePostsWrapper } from "./styles";
import Post from "../../shared/post/post";
import { useUserPageContext } from "../../../context/userPageContextRewrite";
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import CreatePost from "../../shared/create-post/create-post";

const UserPagePosts = () => {

    const { userPosts, isCurrentUser } = useUserPageContext()

    const {user: currentUser} = useContext<any>(UserContext);

    const {triggerReload} = useUserPageContext();

    /*
    const mappedPosts = userPosts.map((post : any) =>
        <Post key={post.Id} post={post} />
    );
    */

    return(
        <UserPagePostsWrapper>
            <PostsWrapper>
                {isCurrentUser && <CreatePost user={currentUser} reFetchPosts={triggerReload} />}
                {/*mappedPosts}
                {mappedPosts.length === 0 && "User Has No Posts!" */}
            </PostsWrapper>
        </UserPagePostsWrapper>
    )
}

export default UserPagePosts;