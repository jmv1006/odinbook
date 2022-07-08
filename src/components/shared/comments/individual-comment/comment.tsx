import { IndividualComment, UserImgContainer, UserImg, CommentText } from "./style"

const Comment = ({comment, user} : any) => {
    return(
        <IndividualComment>
            <UserImgContainer>
                {user.ProfileImg ? <UserImg src={user.ProfileImg}/> : <UserImg src="https://i.stack.imgur.com/l60Hf.png" />}
            </UserImgContainer>
            <CommentText>
                {comment.Text}
            </CommentText>
        </IndividualComment>
    )
}

export default Comment