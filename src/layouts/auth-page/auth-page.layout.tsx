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
            {!isOpen ?
                <>
                    <h3>Odinbook</h3>
                    <SignIn setUser={setUser}/>
                    <button onClick={toggleOpen}>Sign Up</button>
                </>
                :
                <SignUp toggle={toggleOpen} setUser={setUser}/>
            }
        </div>
    )
}

export default AuthPageLayout;