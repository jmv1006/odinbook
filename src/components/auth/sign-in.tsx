
const SignIn = ({setUser} : any) => {
    return(
        <>
            <form>
                <input type="email" placeholder="Username (E-Mail)" />
                <input type="password" placeholder="Password" />
            </form>
            <button onClick={() => setUser(true)}>Log In</button>
        </>
    )
}

export default SignIn;