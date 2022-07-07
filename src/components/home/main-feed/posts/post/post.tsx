import { useContext, useEffect, useState } from "react";
import { PostStyles, PostTopContainer, PostTextContainer, PostBottomContainer, ProfilePhotoContainer, UserImage, PostInfoBar, LikeAndCommentContainer } from "./style";
import useFetch from "../../../../../hooks/useFetch";
import PostComments from "../../../../shared/comments/container-comments";
import { UserContext } from "../../../../../context/userContext";
import { Link } from "react-router-dom";

interface IComments {
    comments: Array<any>,
    amount: number
};

const Post = ({post}: any) => {

    const user = useContext<any>(UserContext);

    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState<IComments | null>(null);
    const [userHasLiked, setUserHasLiked] = useState(false);
    const [commentsAreToggled, setCommentsAreToggled] = useState(false);

    const {response: likesResponse, isLoading: likesAreLoading, reFetch: likesReFetch} = useFetch(`/likes/post/${post.Id}`);
    const {response: commentsResponse, isLoading: commentsAreLoading, reFetch: commentsReFetch} = useFetch(`/comments/${post.Id}`);

    useEffect(() => {
        if(commentsResponse) setComments(commentsResponse)
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
            likesReFetch()
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

    return(
        <PostStyles>
            <PostTopContainer>
                <ProfilePhotoContainer>{post.Users.ProfileImg && <UserImage src={post.Users.ProfileImg} />}</ProfilePhotoContainer>
                <div><Link to={`/user/${post.Users.Id}`}>{post.Users.DisplayName}</Link></div>
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
                        {comments?.amount} Comments
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
            {commentsAreToggled && <PostComments comments={comments} postId={post.Id} reFetchComments={commentsReFetch}/>}
        </PostStyles>
    )
}

export default Post;