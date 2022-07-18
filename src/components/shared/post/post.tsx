import { useContext, useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import PostComments from "../comments/container-comments";
import { UserContext } from "../../../context/userContext";
import { Link } from "react-router-dom";
import { PostStyles, PostTopContainer, PostTextContainer, PostBottomContainer, ProfilePhotoContainer, UserImage, PostInfoBar, LikeAndCommentContainer } from "./style";
import IComment from '../../../interfaces/comment';
import { SocketContext } from "../../../context/SocketContext";
import DeletePostModal from "./delete/delete-post-modal";

const Post = ({ post }: any) => {

    const { user } = useContext<any>(UserContext);
    const socket = useContext(SocketContext);

    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState<Array <IComment>>([]);
    const [commentsAmount, setCommentsAmount] = useState(0);
    const [userHasLiked, setUserHasLiked] = useState(false);
    const [commentsAreToggled, setCommentsAreToggled] = useState(false);

    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

    const {response: likesResponse, reFetch: likesReFetch} = useFetch(`/likes/post/${post.Id}`);
    const {response: commentsResponse, reFetch: commentsReFetch} = useFetch(`/comments/${post.Id}`);

    useEffect(() => {
        if(commentsResponse){
            setComments(commentsResponse.comments)
            setCommentsAmount(commentsResponse.amount)
        } 
    }, [commentsResponse]);

    useEffect(() => {
        if(likesResponse){
            setLikes(likesResponse.amount)
            const likesArr = likesResponse.likes;
            const userInLikes = likesArr.find((like:any) => like.User === user.Id);
            if(userInLikes) return setUserHasLiked(true)
            setUserHasLiked(false)
        } 
    }, [likesResponse]);

    const handlePostLike = async () => {
        if(userHasLiked) {
            setUserHasLiked(userHasLiked => false);
            setLikes(likes - 1);
        };
        if(!userHasLiked) {
            setUserHasLiked(userHasLiked => true);
            setLikes(likes + 1);
        };

        const res = await fetch(`/likes/post/${post.Id}/${user.Id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(res.ok) {
            likesReFetch();
            socket.emit('notification', post.Users.Id, 'like', post.Id);
        };
    };

    const toggleComments = () => {
        if(commentsAreToggled) return setCommentsAreToggled(false)
        setCommentsAreToggled(true)
    };

    const handlePostDate = () => {
        const newDate = new Date(post.Date);
        return newDate.toDateString();
    };

    const isCurrentUser = () => {
        if(post.Users.Id === user.Id) return true
        return false
    };

    const toggleDeleteModal = () => {
        if(deleteModalIsOpen) return setDeleteModalIsOpen(deleteModalIsOpen => false)
        setDeleteModalIsOpen(deleteModalIsOpen => true)
    }
    
    return(
        <PostStyles>
            {likesResponse && commentsResponse ?
                <>
                <PostTopContainer>
                    <ProfilePhotoContainer>{post.Users.ProfileImg ? <UserImage src={post.Users.ProfileImg}/> : <UserImage src="https://i.stack.imgur.com/l60Hf.png" />}</ProfilePhotoContainer>
                    <div><Link to={`/user/${post.Users.Id}`}>{post.Users.DisplayName}</Link></div>
                    {handlePostDate()}
                    {isCurrentUser() && <button onClick={toggleDeleteModal}>X</button>}
                    {deleteModalIsOpen && <DeletePostModal toggle={toggleDeleteModal}/>}
                </PostTopContainer>
                <PostTextContainer>
                    {post.Text}
                </PostTextContainer>
                <PostBottomContainer>
                    <PostInfoBar>
                        <div>
                            {likes} Likes
                        </div>
                        <div onClick={toggleComments}>
                            {commentsAmount} Comments
                        </div>
                    </PostInfoBar>
                    <LikeAndCommentContainer>
                        <div>
                            <button onClick={handlePostLike}>{userHasLiked ? "Unlike" : "Like"}</button>
                        </div>
                        <div onClick={toggleComments}>
                            Comment
                        </div>
                    </LikeAndCommentContainer>  
                </PostBottomContainer>
                </>
            :
            "Loading..."
            }
            {commentsAreToggled && <PostComments comments={comments} amount={commentsAmount} postId={post.Id} reFetchComments={commentsReFetch}/>}
        </PostStyles>
    )
}

export default Post;