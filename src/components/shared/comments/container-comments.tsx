import { useContext } from "react"
import { UserContext } from "../../../context/userContext"
import { CommentsContainerStyle } from "./style"
import CommentInput from './input/comment-input'
import Comment from './individual-comment/comment';
interface PropsComments {
    comments: any,
    postId: string,
    reFetchComments: () => void
};

const CommentsContainer = ({ comments, postId, reFetchComments } : PropsComments) => {
    const user = useContext<any>(UserContext);

    const mappedComments = comments.comments.map((comment: any) =>
        <Comment key={comment.Id} comment={comment} user={comment.Users}/>
    )

    return(
        <CommentsContainerStyle>
            {mappedComments.length === 0 && "Post Has No Comments!"}
            {mappedComments}
            <CommentInput user={user} postId={postId} reFetchComments={reFetchComments}/>
        </CommentsContainerStyle>
    )
}

export default CommentsContainer;