import { Link } from "react-router-dom"
import { useUserPageContext } from "../../../context/userPageContext"
import { UserPageNavBarContainer } from "./styles"

const UserPageNavBar = () => {
    const { user } = useUserPageContext()

    return(
        <UserPageNavBarContainer>
            <Link to={`/user/${user.Id}`}>Posts</Link>
            <Link to={`/user/${user.Id}/friends`}>Friends</Link>
        </UserPageNavBarContainer>
    )
}

export default UserPageNavBar