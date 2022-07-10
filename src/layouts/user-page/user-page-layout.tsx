import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { UserPageContainer } from "./styles";
import useFetch from "../../hooks/useFetch";
import UserPagePosts from "../../components/user-page/posts/user-posts";
import UserInfo from "../../components/user-page/user-info/user-info";
import { UserPageContext } from "../../context/userPageContext";

const UserPageLayout = () => {
    const params = useParams();
    const userId = params.UserId;

    const {response: userPostsResponse, isLoading: userPostsAreLoading, reFetch: userPostsReFetch} = useFetch(`/posts/${userId}`);
    const {response: userInfoResponse, isLoading: userInfoIsLoading, reFetch: userInfoReFetch} = useFetch(`/users/${userId}`);
    const {response: friendsResponse, isLoading: friendsLoading, reFetch: friendsReFetch} = useFetch(`/friendships/${userId}`);
    
    const [userPosts, setUserPosts] = useState([]);
    const [user, setUser] = useState(null);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        if(userPostsResponse) {
            setUserPosts(userPosts => userPostsResponse.posts)
        }
    }, [userPostsResponse]);

    useEffect(() => {
        if(userInfoResponse) {
            setUser(user => userInfoResponse.user)
        }
    }, [userInfoResponse]);

    useEffect(() => {
        if(friendsResponse) {
            setFriends(user => friendsResponse.friends)
        }
    }, [friendsResponse]);

    return(
        <UserPageContext.Provider value={{user: user, userPosts: userPosts, friends: friends}}>
            <UserPageContainer>
                {user && <UserInfo user={user}/>}
                <Outlet />
            </UserPageContainer>
        </UserPageContext.Provider>
    )
};

export default UserPageLayout;