import { PostsWrapper, UserPagePostsWrapper } from "./styles";
import Post from "../../shared/post/post";
import { UserPageContext } from "../../../context/userPageContext";
import { useContext } from "react";

const UserPagePosts = () => {

    const { userPosts } = useContext<any>(UserPageContext);

    const mappedPosts = userPosts.map((post : any) =>
        <Post key={post.Id} post={post} />
    );

    return(
        <UserPagePostsWrapper>
            <PostsWrapper>
                {mappedPosts}
                {mappedPosts.length === 0 && "User Has No Posts!"}
            </PostsWrapper>
        </UserPagePostsWrapper>
    )
}

export default UserPagePosts;