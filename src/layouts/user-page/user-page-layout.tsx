import { useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { UserPageContainer } from "./styles";
import useFetch from "../../hooks/useFetch";
import UserInfo from "../../components/user-page/user-info/user-info";
import { UserPageContext } from "../../context/userPageContext";
import { UserContext } from "../../context/userContext";

const UserPageLayout = () => {
    const params = useParams();
    const userId = params.UserId;

    const { user: currentUser } = useContext<any>(UserContext);

    const {response: userPostsResponse, isLoading: userPostsAreLoading, reFetch: userPostsReFetch} = useFetch(`/posts/${userId}`);
    const {response: userInfoResponse, isLoading: userInfoIsLoading, reFetch: userInfoReFetch} = useFetch(`/users/${userId}`);
    const {response: friendsResponse, isLoading: friendsLoading, reFetch: friendsReFetch} = useFetch(`/friendships/${userId}`);
    
    const [userPosts, setUserPosts] = useState([]);
    const [user, setUser] = useState(null);
    const [friends, setFriends] = useState([]);
    const [isCurrentUser, setIsCurrentUser] = useState(false);

    useEffect(() => {
        if(userPostsResponse) {
            setUserPosts(userPosts => userPostsResponse.posts)
        }
    }, [userPostsResponse]);

    useEffect(() => {
        if(userInfoResponse) {
            setIsCurrentUser(currentUser => false)
            if(userInfoResponse.user.Id === currentUser.Id) setIsCurrentUser(isCurrentUser => true)
            setUser(user => userInfoResponse.user)
        }
    }, [userInfoResponse]);

    useEffect(() => {
        if(friendsResponse) {
            setFriends(user => friendsResponse.friends)
        }
    }, [friendsResponse]);

    return(
        <UserPageContext.Provider value={{user: user, userPosts: userPosts, friends: friends, isCurrentUser: isCurrentUser}}>
            {user ? 
                <UserPageContainer>
                    {user && <UserInfo />}
                    <Outlet />
                </UserPageContainer>
            : null}
        </UserPageContext.Provider>
    )
};

export default UserPageLayout;