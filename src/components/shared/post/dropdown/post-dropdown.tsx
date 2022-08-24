import { PostDropDownContainer, PostDropDownMenu, PostDropDownMenuItem } from "./styles"
import DeletePostModal from "../delete/delete-post-modal";
import EditPost from "../edit/edit-post";
import { useState } from "react";

const PostDropDown = ({ post, update, deletePost, toggle } : any) => {
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
                <PostDropDownMenuItem onClick={toggleEditModal}>Edit Post</PostDropDownMenuItem>
                <PostDropDownMenuItem onClick={toggleDeleteModal}>Delete Post</PostDropDownMenuItem>
                {deleteToggled && <DeletePostModal toggle = {toggleDeleteModal} post={post} deleteCB = {deletePost}/>}
                {editToggled && <EditPost toggle={toggleEditModal} post={post} updateCB={update} dropDownToggle={toggle} />}
            </PostDropDownMenu>
        </PostDropDownContainer>
    )
}

export default PostDropDown