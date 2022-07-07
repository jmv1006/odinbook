import Comment from "./individual-comments/comment"

const CommentList = ({comments} : any) => {
    
    const mappedComments = comments.map((comment: any) =>
        <div>Comment</div>
    )
    
    return(
        <>
            {mappedComments}
        </>
    )
}

export default CommentList
// <Comment comment={comment} key={comment.Id} />