import { PostDropDownContainer, PostDropDownMenu } from "./styles"
import DeletePostModal from "../delete/delete-post-modal";
import { useState } from "react";

const PostDropDown = ({post, reload} : any) => {

    const [deleteToggled, setDeleteToggled] = useState(false)

    const toggleDeleteModal = () => {
        if(deleteToggled) return setDeleteToggled(deleteToggled => false)
        setDeleteToggled(deleteToggled => true)
    }
    return(
        <PostDropDownContainer id="PostDropDown">
            <PostDropDownMenu>
                <div>Edit Post</div>
                <div onClick={toggleDeleteModal}>Delete Post</div>
                {deleteToggled && <DeletePostModal toggle = {toggleDeleteModal} post={post} onDelete={reload}/>}
            </PostDropDownMenu>
        </PostDropDownContainer>
    )
}

export default PostDropDown