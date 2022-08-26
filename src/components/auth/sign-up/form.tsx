import { SignUpForm } from "./styles";
import { useState } from "react";

type SignUpFormPageProps = {
    setAccountCreated: (value: any) => void,
    setCreatedUser: (value: any) => void
}

const SignUpFormPage = ({setAccountCreated, setCreatedUser} : SignUpFormPageProps) => {

    const [formValues, setFormValues] = useState({
        Email: "",
        DisplayName: "",
        Password: "",
        ConfirmedPassword: ""
    });

    const [error, setError] = useState(false);


    const handleChange = (e: any) => {
        const value = e.target.value
        setFormValues({
            ...formValues,
            [e.target.name]: value
        })
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const response = await fetch('/auth/sign-up', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        });

        if(!response.ok) {
            setError(true)
            return
        }
        
        const resJSON = await response.json()
        setCreatedUser(resJSON.user)
        setAccountCreated(true)
    }
    return(
        <>
            {error && "There Was An Error Creating Your Account"}
            <SignUpForm onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="email" name="Email" value={formValues.Email} onChange={handleChange} required/>
                <label>Full Name</label>
                <input type="text" name="DisplayName" value={formValues.DisplayName} onChange={handleChange} required/>
                <label>Password</label>
                <input type="password" name="Password" value={formValues.Password} onChange={handleChange} required/>
                <label>Confirm Password</label>
                <input type="password" name="ConfirmedPassword" value={formValues.ConfirmedPassword} onChange={handleChange} required/>
                <button type="submit">Create</button>
            </SignUpForm>
        </>
    )
}

export default SignUpFormPage