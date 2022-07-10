import IUser from "../../../interfaces/user";
import { UserBarContainer, UserImgContainer, UserImg } from './styles'
import {useFriends} from '../../../context/userFriendsContext ';
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";
import AddFriend from './add-friend/add-friend';

type UserBarProps = {
    user: IUser
}

const UserBar = ({user} : UserBarProps) => {
    const { user: currentUser } = useContext<any>(UserContext);

    const friends = useFriends();

    const isUserFriend = () => {
        const isFriend = friends.some((friend : any) => friend.Id === user.Id)
        if(isFriend) return true
        return false
    };

    const isCurrentUser = () => {
        if(user.Id === currentUser.Id) return true
        return false
    }


    return(
        <UserBarContainer>
            {user.ProfileImg && <UserImgContainer><UserImg src={user.ProfileImg}/></UserImgContainer>}
            {!user.ProfileImg && <UserImgContainer><UserImg src="https://i.stack.imgur.com/l60Hf.png"/></UserImgContainer>}
            {user.DisplayName}
            {isUserFriend() &&  <h4>Friend</h4>}
            {isCurrentUser() && <h4>(Me)</h4>}
            {!isCurrentUser() && !isUserFriend() ? <AddFriend user={user}/> : null}
        </UserBarContainer>
    )
}

export default UserBar;