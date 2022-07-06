import SignIn from "../../components/auth/sign-in";

const AuthPageLayout = ({setUser}: any) => {
    return(
        <div>
            <h3>Auth Page Here</h3>
            <SignIn setUser={setUser}/>
            <div>Sign Up Button</div>
        </div>
    )
}

export default AuthPageLayout;