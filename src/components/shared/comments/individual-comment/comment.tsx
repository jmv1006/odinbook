import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { IndividualComment, UserImgContainer, UserImg, CommentText, NameAndTextContainer, CommentName, DeleteCommentBtn } from "./style"
import DeleteComment from "../delete/delete-comment";
import IUser from "../../../../interfaces/user";

type CommentProps = {
    comment: any,
    user: IUser,
    currentUser: IUser,
    reload: () => void
}

const Comment = ({comment, user, currentUser, reload} : CommentProps) => {
    const navigate = useNavigate();

    const [deleteToggled, setDeleteToggled] = useState(false);

    const navigateToUserPage = () => {
        navigate(`/user/${user.Id}`)
    };

    const isCurrentUser = () => {
        if(user.Id === currentUser.Id) return true
        return false
    };

    const toggleDeleteModal = () => {
        if(deleteToggled) return setDeleteToggled(deleteToggled => false)
        setDeleteToggled(deleteToggled => true)
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
            {isCurrentUser() && <DeleteCommentBtn onClick={toggleDeleteModal}>X</DeleteCommentBtn>}
            {deleteToggled && <DeleteComment comment={comment} user={currentUser} toggle={toggleDeleteModal} reload={reload}/>}
        </IndividualComment>
    )
}

export default Comment