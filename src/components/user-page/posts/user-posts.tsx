import { PostsWrapper, UserPagePostsWrapper } from "./styles";
import Post from "../../shared/post/post";

const UserPagePosts = ({posts} : any) => {

    const mappedPosts = posts.map((post : any) =>
        <Post key={post.Id} post={post} />
    );

    return(
        <UserPagePostsWrapper>
            <PostsWrapper>
                {mappedPosts}
            </PostsWrapper>
        </UserPagePostsWrapper>
    )
}

export default UserPagePosts;