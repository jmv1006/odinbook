import { CommentInputContainer, UserImageContainer, CommentInputForm, UserImage } from "./style"

const CommentInput = ({user} : any) => {

    return(
        <CommentInputContainer>
            <UserImageContainer>
                {user && <UserImage src={user.ProfileImg ? user.ProfileImg : "https://i.stack.imgur.com/l60Hf.png"} />}
            </UserImageContainer>
            <CommentInputForm>
                <input type="text" placeholder="Your Comment" />
                <button type="submit">Post</button>
            </CommentInputForm>
        </CommentInputContainer>
    )
}

export default CommentInput