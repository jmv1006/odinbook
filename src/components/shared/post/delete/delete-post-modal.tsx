import { DeletePostModalContainer } from "./styles"

const DeletePostModal = ({toggle, post, onDelete} : any) => {


    const deletePost = async () => {
        const res = await fetch(`/posts/${post.Id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if(!res.ok) {
            //Error deleting post
            return
        }

        toggle();
        onDelete();
    }

    return(
        <DeletePostModalContainer>
            Are You Sure You Want To Delete This Post?
            <button onClick={deletePost}>Yes</button>
            <button>No</button>
            <button onClick={toggle}>X</button>
        </DeletePostModalContainer>
    )
}

export default DeletePostModal