import { useContext, useEffect, useState } from "react"
import { UserPageContext } from "../../../context/userPageContext"
import { UserAboutContainer } from "./styles"
import useFetch from "../../../hooks/useFetch"

const UserAbout = () => {

    const { user, isCurrentUser } = useContext<any>(UserPageContext);
    const { response } = useFetch(`/users/${user.Id}/profile`);
    const [bio, setBio] = useState("");

    useEffect(() => {
        if(response) {
            setBio(bio => response.info.Bio)
        }
    }, [response])


    return(
        <UserAboutContainer>
            {isCurrentUser && <button>Edit</button>}
            fetch profile info, {bio}
        </UserAboutContainer>
    )
}

export default UserAbout