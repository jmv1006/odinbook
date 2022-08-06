import { useState } from "react";
import { SignInBtn, SignInErrorMsg, SignInForm, SignInInput } from "./styles";

const SignIn = ({setUser} : any) => {

    const [authInfo, setAuthInfo] = useState({
        Email: '',
        Password: ''
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const [buttonText, setButtonText] = useState("Log In")

    const handleChange = (e: any) => {
        const value = e.target.value;
        setAuthInfo({
            ...authInfo,
            [e.target.name]: value,
          });
    }

    const handleSubmit = async (e: any) => {
        setButtonText(buttonText => "Logging In...")
        e.preventDefault();
        const response = await fetch('/auth/log-in', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authInfo)
        });

        const responseJSON = await response.json();

        if(!response.ok) {
            setErrorMessage(responseJSON.message)
            setButtonText(buttonText => "Log In")
            return
        }
        
        setUser(responseJSON.user);
        setButtonText(buttonText => "Success")
    }

    return(
        <>
            <SignInForm onSubmit={handleSubmit}>
                <SignInInput type="email" placeholder="Username (E-Mail)" name="Email" onChange={handleChange} value={authInfo.Email} required/>
                <SignInInput type="password" placeholder="Password" name="Password" onChange={handleChange} value={authInfo.Password} required/>
                <SignInBtn type="submit">{buttonText}</SignInBtn>
                <SignInErrorMsg>{errorMessage && errorMessage}</SignInErrorMsg>
            </SignInForm>
        </>
    )
}

export default SignIn;