import IPost from "../../interfaces/post"
import Post from "../../components/shared/post/post";
import useFetch from "../../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostPageContainer } from "./styles";

const PostPage = () => {
    const navigate = useNavigate()
    const params = useParams();
   
    const {response, reFetch} = useFetch(`/posts/${params.PostId}`)
    const [post, setPost] = useState(null);

    useEffect(() => {
        if(response) setPost(response.post)
    }, [response])

    const updatePost = (Post: IPost) => {
        reFetch()
    };
    
    const handleDelete = (Post: IPost) => {
        navigate('/')
    }

    return(
        <PostPageContainer>
            {post && <Post post={post} update={updatePost} deletePost={handleDelete} />}
        </PostPageContainer>
    )
}

export default PostPage;