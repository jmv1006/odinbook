import { PostDropDownContainer, PostDropDownMenu } from "./styles"
import DeletePostModal from "../delete/delete-post-modal";
import EditPost from "../edit/edit-post";
import { useState } from "react";

const PostDropDown = ({ post, update, deletePost } : any) => {

    const [deleteToggled, setDeleteToggled] = useState(false)
    const [editToggled, setEditToggled] = useState(false);

    const toggleDeleteModal = () => {
        if(deleteToggled) return setDeleteToggled(deleteToggled => false)
        setDeleteToggled(deleteToggled => true)
    };

    const toggleEditModal = () => {
        if(editToggled) return setEditToggled(editToggled => false)
        setEditToggled(editToggled => true)
    };

    return(
        <PostDropDownContainer id="PostDropDown">
            <PostDropDownMenu>
                <div onClick={toggleEditModal}>Edit Post</div>
                <div onClick={toggleDeleteModal}>Delete Post</div>
                {deleteToggled && <DeletePostModal toggle = {toggleDeleteModal} post={post} deleteCB = {deletePost}/>}
                {editToggled && <EditPost toggle={toggleEditModal} post={post} updateCB={update} />}
            </PostDropDownMenu>
        </PostDropDownContainer>
    )
}

export default PostDropDown