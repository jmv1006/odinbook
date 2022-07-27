import { useContext, useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import PostComments from "../comments/container-comments";
import { UserContext } from "../../../context/userContext";
import { Link } from "react-router-dom";
import { PostStyles, PostTopContainer, PostTextContainer, PostBottomContainer, ProfilePhotoContainer, UserImage, PostInfoBar, LikeAndCommentContainer, LikeContainer, LikeBtn, PostUserName, CommentContainer, PostTopLeft, PostTopRight } from "./style";
import IComment from '../../../interfaces/comment';
import { SocketContext } from "../../../context/SocketContext";
import PostDropDown from "./dropdown/post-dropdown";

const Post = ({ post, reload }: any) => {
    const { user } = useContext<any>(UserContext);
    const socket = useContext(SocketContext);
    
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState<Array <IComment>>([]);
    const [commentsAmount, setCommentsAmount] = useState(0);
    const [userHasLiked, setUserHasLiked] = useState(false);
    const [commentsAreToggled, setCommentsAreToggled] = useState(false);

    const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

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
            setLikes(likesResponse.amount);
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

    const toggleDropDown = () => {
        if(dropDownIsOpen) {
            setDropDownIsOpen(dropDownIsOpen => false)
            return
        }
        setDropDownIsOpen(dropDownIsOpen => true)
    };
    
    return(
        <PostStyles>
            {likesResponse && commentsResponse ?
                <>
                <PostTopContainer>
                    <PostTopLeft>
                        <ProfilePhotoContainer>{post.Users.ProfileImg ? <UserImage src={post.Users.ProfileImg}/> : <UserImage src="https://i.stack.imgur.com/l60Hf.png" />}</ProfilePhotoContainer>
                        <Link to={`/user/${post.Users.Id}`}><PostUserName>{post.Users.DisplayName}</PostUserName></Link>
                        {handlePostDate()}
                    </PostTopLeft>
                    <PostTopRight>
                        {isCurrentUser() && <button onClick={toggleDropDown}>...</button>}
                        {dropDownIsOpen && <PostDropDown toggle={toggleDropDown} post={post} reload={reload}/>}
                    </PostTopRight>
                </PostTopContainer>
                <PostTextContainer>
                    {post.Text}
                </PostTextContainer>
                <PostBottomContainer>
                    <PostInfoBar>
                        <div>
                            {likes} {likes > 1 || likes === 0 ? "Likes" : "Like"}
                        </div>
                        <CommentContainer onClick={toggleComments}>
                            {commentsAmount} {commentsAmount > 1 || commentsAmount === 0 ? "Comments" : "Comment"}
                        </CommentContainer>
                    </PostInfoBar>
                    <LikeAndCommentContainer>
                        <LikeContainer>
                            <LikeBtn onClick={handlePostLike}>{userHasLiked ? "Unlike" : "Like"}</LikeBtn>
                        </LikeContainer>
                        <CommentContainer onClick={toggleComments}>
                            Comment
                        </CommentContainer>
                    </LikeAndCommentContainer>  
                </PostBottomContainer>
                
                </>
            :
            "Loading Post..."
            }
            {commentsAreToggled && <PostComments comments={comments} amount={commentsAmount} postId={post.Id} reFetchComments={commentsReFetch}/>}
        </PostStyles>
    )
}

export default Post;