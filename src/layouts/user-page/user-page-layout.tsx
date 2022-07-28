import { Outlet } from "react-router-dom";
import { UserPageContainer } from "./styles";
import UserInfo from "../../components/user-page/user-info/user-info";
import { UserPageProvider, useUserPageContext } from "../../context/userPageContextRewrite";

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
    const {user} = useUserPageContext();

    return(
        <UserPageContainer>
            {user ?
                <>
                   <UserInfo />
                   <Outlet />
               </>
            :
            null
            }
        </UserPageContainer>
    )
};

export default UserPageLayoutContainer;