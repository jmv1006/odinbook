import { useState } from "react";

const SignIn = ({setUser} : any) => {

    const [authInfo, setAuthInfo] = useState({
        Email: '',
        Password: ''
    });

    const handleChange = (e: any) => {
        const value = e.target.value;
        setAuthInfo({
            ...authInfo,
            [e.target.name]: value,
          });
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch('/auth/log-in', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authInfo)
        });

        if(!response.ok) {
            return
        }
        
        const responseJSON = await response.json();
        setUser(responseJSON.user);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Username (E-Mail)" name="Email" onChange={handleChange} value={authInfo.Email} required/>
                <input type="password" placeholder="Password" name="Password" onChange={handleChange} value={authInfo.Password} required/>
                <button type="submit">Log In</button>
            </form>
        </>
    )
}

export default SignIn;