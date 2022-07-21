import { useContext } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext"
import { HeaderDropDownContainer, HeaderDropDownItem } from "./styles"

const HeaderDropDown = ({toggle} : any) => {

    const { user, updateUser } = useContext<any>(UserContext);

    const SignOut = () => {
        updateUser((user : any) => null)
    };

    return(
        <HeaderDropDownContainer>
            <HeaderDropDownItem>
                <Link to={`/user/${user.Id}`} onClick={toggle}>
                    My Profile
                </Link>
            </HeaderDropDownItem>
            <HeaderDropDownItem>
                Notifications
            </HeaderDropDownItem>
            <HeaderDropDownItem>
                <Link to={`/user/${user.Id}/friends/requests`} onClick={toggle}>
                    Friend Requests
                </Link>
            </HeaderDropDownItem>
            <HeaderDropDownItem onClick={SignOut}>
                Sign Out
            </HeaderDropDownItem>
        </HeaderDropDownContainer>
    )
}

export default HeaderDropDown