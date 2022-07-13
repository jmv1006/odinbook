import { useState } from "react";
import SignIn from "../../components/auth/sign-in";
import SignUp from "../../components/auth/sign-up/sign-up";

const AuthPageLayout = ({setUser}: any) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        if(isOpen) return setIsOpen(isOpen => false)
        setIsOpen(isOpen => true)
    };

    return(
        <div>
            <h3>Auth Page Here</h3>
            <SignIn setUser={setUser}/>
            <div onClick={toggleOpen}>Sign Up Button</div>
            {isOpen && <SignUp toggle={toggleOpen} setUser={setUser}/>}
        </div>
    )
}

export default AuthPageLayout;