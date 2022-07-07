import { useState } from "react"
import { CommentInputContainer, UserImageContainer, CommentInputForm, UserImage, TextInputBox, PostCommentBtn } from "./style"

const CommentInput = ({ user, postId, reFetchComments } : any) => {

    const [text, setText] = useState("");

    const handleChange = (e: any) => {
        setText(text => e.target.value)
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch(`/comments/${postId}/${user.Id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Text: text})
        });

        if(!res.ok) return console.log('Error posting comment')

        setText(text => "");
        reFetchComments();       
    }

    return(
        <CommentInputContainer>
            <UserImageContainer>
                {user && <UserImage src={user.ProfileImg ? user.ProfileImg : "https://i.stack.imgur.com/l60Hf.png"} />}
            </UserImageContainer>
            <CommentInputForm onSubmit={handleSubmit}>
                <TextInputBox type="text" placeholder="Your Comment" value={text} onChange={handleChange}/>
                <PostCommentBtn type="submit">Post</PostCommentBtn>
            </CommentInputForm>
        </CommentInputContainer>
    )
}

export default CommentInput