import { useState } from "react";
import IPost from "../../../../interfaces/post";
import { DeletePostModalContainer, DeletePostModalContentContainer } from "./styles"

type DeletePostModalProps = {
    toggle: () => void,
    post: IPost,
    deleteCB: (post: IPost) => void
}

const DeletePostModal = ({toggle, post, deleteCB } : DeletePostModalProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccessful, setIsSuccessful] = useState(false)

    const deletePost = async () => {
        setIsLoading(isLoading => true)

        const res = await fetch(`/posts/${post.Id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if(!res.ok) {
            setIsLoading(isLoading => false)
            //Error deleting post
            return
        }

        setIsLoading(isLoading => false)
        setIsSuccessful(isSuccessful => true)
        const responseJSON = await res.json()
        deleteCB(responseJSON.deletedPost);
        toggle();
    }

    return(
        <DeletePostModalContainer>
            <DeletePostModalContentContainer>
                {isLoading ? 
                <>
                    Deleting.....
                </>
                :
                <>
                    Are You Sure You Want To Delete This Post?
                    <button onClick={deletePost}>Yes</button>
                    <button onClick={toggle}>No</button>
                </>
                }
                {isSuccessful && "Successfully Deleted Post"}
            </DeletePostModalContentContainer>
        </DeletePostModalContainer>
    )
}

export default DeletePostModal