import { useContext } from "react"
import { UserContext } from "../../../context/userContext"
import { CommentsContainerStyle } from "./style"
import CommentList from "./list/comment-list";
import CommentInput from './input/comment-input'

interface PropsComments {
    comments: any
};

const CommentsContainer = ({ comments } : PropsComments) => {
    const user = useContext<any>(UserContext);
    
    return(
        <CommentsContainerStyle>
            <CommentList comments={comments.comments} amount={comments.amount} user={user}/>
            <CommentInput user={user}/>
        </CommentsContainerStyle>
    )
}

export default CommentsContainer;