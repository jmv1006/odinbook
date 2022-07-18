import { useContext } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext"
import { HeaderDropDownContainer, HeaderDropDownItem } from "./styles"

const HeaderDropDown = ({toggle} : any) => {

    const { user } = useContext<any>(UserContext);

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
                Friend Requests
            </HeaderDropDownItem>
        </HeaderDropDownContainer>
    )
}

export default HeaderDropDown