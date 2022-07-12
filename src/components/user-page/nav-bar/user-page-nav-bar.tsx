import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserPageContext } from "../../../context/userPageContext"
import { UserPageNavBarContainer } from "./styles"

const UserPageNavBar = () => {
    const { user } = useContext<any>(UserPageContext);

    return(
        <UserPageNavBarContainer>
            <Link to={`/user/${user.Id}`}>Posts</Link>
            <Link to={`/user/${user.Id}/friends`}>Friends</Link>
        </UserPageNavBarContainer>
    )
}

export default UserPageNavBar