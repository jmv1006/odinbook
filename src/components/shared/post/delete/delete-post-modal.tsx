import { DeletePostModalContainer } from "./styles"

const DeletePostModal = ({toggle} : any) => {

    const deletePost = () => {
        
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