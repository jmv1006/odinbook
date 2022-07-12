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
    const { response: profileInfoResponse } = useFetch(`/users/${params.UserId}/profile`);

    const [userPosts, setUserPosts] = useState([]);
    const [user, setUser] = useState(null);
    const [friends, setFriends] = useState([]);
    const [isCurrentUser, setIsCurrentUser] = useState(false);
    const [profileInfo, setProfileInfo] = useState(null);

    useEffect(() => {
        if(userPostsResponse) {
            setUserPosts(userPosts => userPostsResponse.posts)
        }
    }, [userPostsResponse]);

    useEffect(() => {
        if(userInfoResponse && profileInfoResponse) {
            setIsCurrentUser(currentUser => false)
            if(userInfoResponse.user.Id === currentUser.Id) setIsCurrentUser(isCurrentUser => true)
            setUser(user => userInfoResponse.user)
            setProfileInfo(profileInfo => profileInfoResponse.info)
        }
    }, [userInfoResponse, profileInfoResponse]);

    useEffect(() => {
        if(friendsResponse) {
            setFriends(user => friendsResponse.friends)
        }
    }, [friendsResponse]);

    return(
        <UserPageContext.Provider value={{user: user, userPosts: userPosts, friends: friends, userPageFriendsReload: friendsReFetch, isCurrentUser: isCurrentUser, profileInfo: profileInfo}}>
                <UserPageContainer>
                    {user ?
                        <>
                            <UserInfo />
                            <Outlet />
                        </>
                        :
                        "Loading..."
                    }
                </UserPageContainer>
        </UserPageContext.Provider>
    )
};

export default UserPageLayout;