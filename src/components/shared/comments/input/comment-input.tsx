import { useContext, useState } from "react"
import { SocketContext } from "../../../../context/SocketContext";
import IUser from "../../../../interfaces/user";
import IPost from "../../../../interfaces/post";
import { CommentInputContainer, UserImageContainer, CommentInputForm, UserImage, TextInputBox, PostCommentBtn } from "./style"

type CommentInputProps = {
    user: IUser,
    post: IPost, 
    reFetchComments: () => void
}
const CommentInput = ({ user, reFetchComments, post } : CommentInputProps) => {
    const socket = useContext(SocketContext);

    const [text, setText] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: any) => {
        setText(text => e.target.value)
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(isLoading => true)

        const res = await fetch(`/comments/${post.Id}/${user.Id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Text: text})
        });

        if(!res.ok) return setIsLoading(isLoading => false)

        socket.emit('notification', post.Users.Id, user.Id)
        setText(text => "");
        setIsLoading(isLoading => false)
        reFetchComments();       
    }

    return(
        <CommentInputContainer>
            <UserImageContainer>
                {user && <UserImage src={user.ProfileImg ? user.ProfileImg : "https://i.stack.imgur.com/l60Hf.png"} />}
            </UserImageContainer>
            <CommentInputForm onSubmit={handleSubmit}>
                <TextInputBox type="text" placeholder="Your Comment" value={text} onChange={handleChange} maxLength={1000} required/>
                <PostCommentBtn type="submit">{isLoading ? "Posting..." : "Post"}</PostCommentBtn>
            </CommentInputForm>
        </CommentInputContainer>
    )
}

export default CommentInput;