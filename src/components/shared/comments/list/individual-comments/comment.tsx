import { IndividualComment, UserImgContainer, UserImg, CommentText } from "./style"

const Comment = ({comment, user} : any) => {

    return(
        <IndividualComment>
            <UserImgContainer>
                <UserImg src={user.ProfileImg}/>
            </UserImgContainer>
            <CommentText>
                {comment.Text}
            </CommentText>
        </IndividualComment>
    )
}

export default Comment