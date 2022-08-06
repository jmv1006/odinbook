import { useContext } from "react"
import { UserContext } from "../../../context/userContext"
import { CommentsContainerStyle } from "./style"
import CommentInput from './input/comment-input'
import Comment from './individual-comment/comment';

interface PropsComments {
    comments: Array<any>,
    amount: number
    postId: string,
    reFetchComments: () => void
};

const CommentsContainer = ({ comments, postId, reFetchComments } : PropsComments) => {
    const { user } = useContext<any>(UserContext);

    const mappedComments = comments.map((comment: any) =>
        <Comment key={comment.Id} comment={comment} user={comment.Users} currentUser={user} reload={reFetchComments}/>
    )

    return(
        <CommentsContainerStyle>
            {mappedComments}
            <CommentInput user={user} postId={postId} reFetchComments={reFetchComments}/>
        </CommentsContainerStyle>
    )
}

export default CommentsContainer;