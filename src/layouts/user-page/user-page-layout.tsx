import { useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { UserPageContainer } from "./styles";
import useFetch from "../../hooks/useFetch";
import UserInfo from "../../components/user-page/user-info/user-info";
import { UserPageContext } from "../../context/userPageContext";
import { UserContext } from "../../context/userContext";

const UserPageLayout = () => {
    const params = useParams();

    const { user: currentUser } = useContext<any>(UserContext);

    //User's Posts
    const {response: userPostsResponse } = useFetch(`/posts/${params.UserId}`);

    //User's basic info such as name and ID
    const {response: userInfoResponse, reFetch: userInfoReFetch } = useFetch(`/users/${params.UserId}`);

    //User's friends
    const {response: friendsResponse, reFetch: friendsReFetch } = useFetch(`/friendships/${params.UserId}`);

    //User's profile info such as bio, birthday, interests, etc...
    const { response: profileInfoResponse, reFetch: profileInfoReload } = useFetch(`/users/${params.UserId}/profile`);

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

    const triggerReload = () => {
        profileInfoReload()
        friendsReFetch()
        userInfoReFetch()
    };

    return(
        //TO-DO: Break context up into smaller parts OR refactor
        <UserPageContext.Provider value={{user: user, userPosts: userPosts, friends: friends, isCurrentUser: isCurrentUser, profileInfo: profileInfo, triggerReload: triggerReload}}>
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