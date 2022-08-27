import { useState } from "react";
import DeletePostModal from "../delete/delete-post-modal";
import EditPost from "../edit/edit-post";
import IPost from "../../../../interfaces/post";
import { PostDropDownContainer, PostDropDownMenu, PostDropDownMenuItem } from "./styles"

type PostDropDownProps = {
    post: IPost,
    update: (post: IPost) => void,
    deletePost: (post: IPost) => void,
    toggle: () => void
}

const PostDropDown = ({ post, update, deletePost, toggle } : PostDropDownProps) => {
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