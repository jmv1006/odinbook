import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { UserContext } from "./userContext";
import { useParams } from "react-router-dom";
export const UserPageContextRewrite = createContext<any>([]);


const UserPageProvider = ({ children }: any) => {

    const params = useParams();

    const { user: currentUser } = useContext<any>(UserContext);

    //User's Posts
    const { response: userPostsResponse, reFetch: userPostsReFetch } = useFetch(`/posts/${params.UserId}`);

    //User's basic info such as name and ID
    const { response: userInfoResponse, reFetch: userInfoReFetch } = useFetch(`/users/${params.UserId}`);

    //User's friends
    const { response: friendsResponse, reFetch: friendsReFetch } = useFetch(`/friendships/${params.UserId}`);

    //User's profile info such as bio, birthday, interests, etc...
    const { response: profileInfoResponse, reFetch: profileInfoReload } = useFetch(`/users/${params.UserId}/profile`);


    
    const [userPosts, setUserPosts] = useState([]);

    const [user, setUser] = useState(null);

    const [friends, setFriends] = useState([]);

    const [isCurrentUser, setIsCurrentUser] = useState(false);

    const [profileInfo, setProfileInfo] = useState(null);

    useEffect(() => {
        if (userPostsResponse) {
            setUserPosts(userPosts => userPostsResponse.posts)
        };
    }, [userPostsResponse]);

    useEffect(() => {
        if (userInfoResponse && profileInfoResponse) {
            setIsCurrentUser(currentUser => false)
            if (userInfoResponse.user.Id === currentUser.Id) setIsCurrentUser(isCurrentUser => true)
            setUser(user => userInfoResponse.user)
            setProfileInfo(profileInfo => profileInfoResponse.info)
        };
    }, [userInfoResponse, profileInfoResponse]);

    useEffect(() => {
        if (friendsResponse) {
            setFriends(user => friendsResponse.friends)
        };
    }, [friendsResponse]);

    const triggerReload = () => {
        profileInfoReload()
        friendsReFetch()
        userInfoReFetch()
        userPostsReFetch()
    };

    return (
        <UserPageContextRewrite.Provider value={{ user: user, userPosts: userPosts, friends: friends, isCurrentUser: isCurrentUser, profileInfo: profileInfo, triggerReload: triggerReload }}>
            {children}
        </UserPageContextRewrite.Provider>
    )
};

const useUserPageContext = () => {
    const context = useContext(UserPageContextRewrite)
    return context
}


export { UserPageProvider, useUserPageContext }
export default useUserPageContext