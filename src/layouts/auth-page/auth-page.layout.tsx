import { useState } from "react";
import SignIn from "../../components/auth/sign-in/sign-in";
import SignUp from "../../components/auth/sign-up/sign-up";
import { SignUpButton } from "./styles";
import useFetch from "../../hooks/useFetch";

const AuthPageLayout = ({setUser}: any) => {

    const [isOpen, setIsOpen] = useState(false);
    //const {response: guestCredentials} = useFetch(`/auth/log-in/guest`);

    const toggleOpen = () => {
        if(isOpen) return setIsOpen(isOpen => false)
        setIsOpen(isOpen => true)
    };

    return(
        <div>
            {!isOpen ?
                <>
                    <h2>Odinbook</h2>
                    <SignIn setUser={setUser}/>
                    <SignUpButton onClick={toggleOpen}>Sign Up</SignUpButton>
                </>
                :
                <SignUp toggle={toggleOpen} setUser={setUser}/>
            }
        </div>
    )
}

export default AuthPageLayout;