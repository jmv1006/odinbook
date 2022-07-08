import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserPageContainer } from "./styles";
import useFetch from "../../hooks/useFetch";
import UserPagePosts from "../../components/user-page/posts/user-posts";
import UserInfo from "../../components/user-page/user-info/user-info";

const UserPageLayout = () => {
    const params = useParams();

    const userId = params.UserId;

    const {response: userPostsResponse, isLoading: userPostsAreLoading, reFetch: userPostsReFetch} = useFetch(`/posts/${userId}`);
    const {response: userInfoResponse, isLoading: userInfoIsLoading, reFetch: userInfoReFetch} = useFetch(`/users/${userId}`);
    
    const [userPosts, setUserPosts] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(userPostsResponse) {
            setUserPosts(userPosts => userPostsResponse.posts)
        }
    }, [userPostsResponse])

    useEffect(() => {
        if(userInfoResponse) {
            setUser(user => userInfoResponse.user)
        }
    }, [userInfoResponse])


    return(
        <UserPageContainer>
            {user && <UserInfo user={user}/>}
            <UserPagePosts posts={userPosts} />
        </UserPageContainer>
    )
};

export default UserPageLayout;