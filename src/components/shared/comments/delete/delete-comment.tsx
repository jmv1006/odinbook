import { useState } from 'react';
import IComment from '../../../../interfaces/comment';
import IUser from '../../../../interfaces/user';
import {DeleteCommentModalContainer, DeleteCommentModalContentContainer} from './styles'

type DeleteCommentProps = {
    user: IUser, 
    comment: IComment,
    toggle: () => void,
    reload: () => void
};

const DeleteComment = ({user, comment, toggle, reload} : DeleteCommentProps) => {

    const [isDeleting, setIsDeleting] = useState(false);

    const deleteCommentFromDb = async () => {
        setIsDeleting(isDeleting => true);
        const res = await fetch(`/comments/${comment.Id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if(!res.ok) {
            setIsDeleting(isDeleting => false)
            console.log("error deleting comment")
            return
        }

        toggle()
        reload()
    };

    return(
        <DeleteCommentModalContainer>
            <DeleteCommentModalContentContainer>
                {!isDeleting ? 
                <>
                    Are you Sure You Want To Delete This Comment?
                    <button onClick={deleteCommentFromDb}>Yes</button>
                    <button onClick={toggle}>No</button>
                    <button onClick={toggle}>X</button>
                </>
                :
                "Deleting Comment..."
                }
            </DeleteCommentModalContentContainer>
        </DeleteCommentModalContainer>
    )
}

export default DeleteComment