import { IndividualComment, UserImgContainer, UserImg, CommentText, NameAndTextContainer, Name } from "./style"

const Comment = ({comment, user} : any) => {
    return(
        <IndividualComment>
            <UserImgContainer>
                {user.ProfileImg ? <UserImg src={user.ProfileImg}/> : <UserImg src="https://i.stack.imgur.com/l60Hf.png" />}
            </UserImgContainer>
            <NameAndTextContainer>
                <Name>{user.DisplayName}</Name>
                <CommentText>
                    {comment.Text}
                </CommentText>
            </NameAndTextContainer>
        </IndividualComment>
    )
}

export default Comment