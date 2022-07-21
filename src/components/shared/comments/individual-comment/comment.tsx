import { useNavigate } from "react-router-dom"
import { IndividualComment, UserImgContainer, UserImg, CommentText, NameAndTextContainer, CommentName } from "./style"

const Comment = ({comment, user} : any) => {
    const navigate = useNavigate();

    const navigateToUserPage = () => {
        navigate(`/user/${user.Id}`)
    };

    return(
        <IndividualComment>
            <UserImgContainer>
                {user.ProfileImg && <UserImg src={user.ProfileImg} onClick={() => navigateToUserPage()}/>}
            </UserImgContainer>
            <NameAndTextContainer>
                <CommentName onClick={() => navigateToUserPage()}>{user.DisplayName}</CommentName>
                <CommentText>
                    {comment.Text}
                </CommentText>
            </NameAndTextContainer>
        </IndividualComment>
    )
}

export default Comment