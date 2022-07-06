import { PostStyles, PostTopContainer, PostTextContainer, PostBottomContainer } from "./style";

const Post = ({post}: any) => {
    return(
        <PostStyles>
            <PostTopContainer>
                Top Container
            </PostTopContainer>
            <PostTextContainer>
                {post.Text}
            </PostTextContainer>
            <PostBottomContainer>
                Post Bottom
            </PostBottomContainer>
        </PostStyles>
    )
}

export default Post;