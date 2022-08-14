import { Outlet } from "react-router-dom";
import { NonFriendInfo, UserPageContainer } from "./styles";
import UserInfo from "../../components/user-page/user-info/user-info";
import { UserPageProvider, useUserPageContext } from "../../context/userPageContextRewrite";
import { useFriends } from "../../context/userFriendsContext ";
import IUser from "../../interfaces/user";

const UserPageLayoutContainer = () => {
    return(
        <>
            <UserPageProvider>
                <UserPageLayout />
            </UserPageProvider>
        </>
    )
};

const UserPageLayout = () => {
    const {user, isCurrentUser, loading} = useUserPageContext();
    const {friends} = useFriends();

    const isUserFriend = () => {
        const getId = (friend: IUser) => friend.Id === user.Id;
        const isUserFriend = friends.some(getId)
        if(isUserFriend) return true
        return false
    };

    return(
        <UserPageContainer>
            {user && !loading ?
                <>
                   <UserInfo />
                   {!isCurrentUser && !isUserFriend() ? <NonFriendInfo>Only Friends Of This User Can See Their Posts & Friends.</NonFriendInfo> : <Outlet />}
               </>
            :
            "Loading..."
            }
        </UserPageContainer>
    )
};

export default UserPageLayoutContainer;