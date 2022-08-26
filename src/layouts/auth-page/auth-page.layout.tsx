import { useState } from "react";
import SignIn from "../../components/auth/sign-in/sign-in";
import SignUp from "../../components/auth/sign-up/sign-up";
import { AuthPageContainer, GuestSignInButton, SignUpButton } from "./styles";
import useFetch from "../../hooks/useFetch";
import IUser from "../../interfaces/user";

type AuthPageLayoutProps = {
    setUser: (user: any) => void
}

const AuthPageLayout = ({setUser}: AuthPageLayoutProps) => {

    const [isOpen, setIsOpen] = useState(false);
    const {response: guestCredentials} = useFetch(`/auth/log-in/guest`);

    const toggleOpen = () => {
        if(isOpen) return setIsOpen(isOpen => false)
        setIsOpen(isOpen => true)
    };

    const signInGuest = () => {
        setUser((user: any) => guestCredentials.user)
    };

    return(
        <AuthPageContainer>
            {!isOpen ?
                <>
                    <h2>Odinbook</h2>
                    <SignIn setUser={setUser}/>
                    <SignUpButton onClick={toggleOpen}>Sign Up</SignUpButton>
                    {guestCredentials && <GuestSignInButton onClick={signInGuest}>Sign in As Guest</GuestSignInButton>}
                </>
                :
                <SignUp toggle={toggleOpen} setUser={setUser}/>
            }
        </AuthPageContainer>
    )
}

export default AuthPageLayout;