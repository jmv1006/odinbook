import Comment from "./individual-comments/comment"

const CommentList = ({comments, user} : any) => {
    
    const mappedComments = comments.map((comment: any) =>
        <Comment key={comment.Id} comment={comment} user={user}/>
    )
    
    return(
        <>
            {mappedComments}
        </>
    )
}

export default CommentList
// <Comment comment={comment} key={comment.Id} />