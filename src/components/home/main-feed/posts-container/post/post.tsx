import { PostStyles } from "./style";

const Post = ({post}: any) => {
    return(
        <PostStyles>{post.Text}</PostStyles>
    )
}

export default Post;