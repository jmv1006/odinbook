import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { UserContext } from "./userContext";
import { useParams } from "react-router-dom";
import IPost from "../interfaces/post";
export const UserPageContextRewrite = createContext<any>([]);


const UserPageProvider = ({ children }: any) => {

    const params = useParams();

    const { user: currentUser } = useContext<any>(UserContext);

    //User's Posts
    const { response: userPostsResponse, isLoading: postsLoading } = useFetch(`/posts/user/${params.UserId}`);

    //User's basic info such as name and ID
    const { response: userInfoResponse, reFetch: userInfoReFetch, isLoading: infoLoading } = useFetch(`/users/${params.UserId}`);

    //User's friends
    const { response: friendsResponse, reFetch: friendsReFetch, isLoading: friendsLoading } = useFetch(`/friendships/${params.UserId}`);

    //User's profile info such as bio, birthday, interests, etc...
    const { response: profileInfoResponse, reFetch: profileInfoReload, isLoading: profileLoading} = useFetch(`/users/${params.UserId}/profile`);


    const [userPosts, setUserPosts] = useState<any>([]);

    const [user, setUser] = useState(null);

    const [friends, setFriends] = useState([]);

    const [isCurrentUser, setIsCurrentUser] = useState(false);

    const [profileInfo, setProfileInfo] = useState(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userPostsResponse) {
            setUserPosts((userPosts: any) => userPostsResponse.posts)
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

    useEffect(() => {
        if(infoLoading || friendsLoading || postsLoading || profileLoading) return setLoading(loading => true)
        return setLoading(loading => false)
    }, [infoLoading, friendsLoading, postsLoading, profileLoading])

    const triggerReload = () => {
        profileInfoReload()
        friendsReFetch()
        userInfoReFetch()
    };

    const addPost = (post: IPost) => {
        setUserPosts((userPosts: any) => [post, ...userPosts])
    }

    const updatePost = (post: IPost) => {
        const postsArr = userPosts;
        const index = postsArr.findIndex((postInArray: IPost) => postInArray.Id === post.Id)
        const postToBeUpdated: IPost = postsArr[index];
        postToBeUpdated.Text = post.Text;
        setUserPosts([...postsArr])
    };

    const deletePost = (post: IPost) => {
        const postsArr = userPosts;
        const index = postsArr.findIndex((postInArray: IPost) => postInArray.Id === post.Id)
        postsArr.splice(index, 1);
        setUserPosts([...postsArr]);
    }

    return (
        <UserPageContextRewrite.Provider value={{ user: user, userPosts: userPosts, friends: friends, isCurrentUser: isCurrentUser, profileInfo: profileInfo, triggerReload: triggerReload, loading: loading, updatePostsActions: {updatePost: updatePost, deletePost: deletePost, addPost: addPost} }}>
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