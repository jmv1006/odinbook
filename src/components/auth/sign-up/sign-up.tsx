import { useState } from "react"
import SignUpFormPage from "./form";
import ProfileInfoSetUp from "./profile-info";
import { ExitBtnContainer, SignUpModal, SignUpTitle, SignUpTopContainer } from "./styles"

type SignUpProps = {
    toggle: () => void,
    setUser: (user: any) => void
}

const SignUp = ({toggle, setUser} : SignUpProps) => {

    const [accountCreated, setAccountCreated] = useState(false);

    const [uploadingProfileInfo, setUploadingProfileInfo] = useState(false);

    const [createdUser, setCreatedUser] = useState(null);

    return(
        <SignUpModal>
            <SignUpTopContainer>
                <ExitBtnContainer>
                    <button onClick={toggle}>X</button>
                </ExitBtnContainer>
                <SignUpTitle>Sign Up</SignUpTitle>
            </SignUpTopContainer>
            {!accountCreated ?
                <SignUpFormPage setAccountCreated={setAccountCreated}  setCreatedUser={setCreatedUser}/>
                :
                null
            }
            {accountCreated && !uploadingProfileInfo && createdUser ?
                <ProfileInfoSetUp setUploadingInfo={setUploadingProfileInfo} createdUser={createdUser} setUser={setUser}/>
                :
                null
            }
            {uploadingProfileInfo && "Uploading Details..."}
        </SignUpModal>
    )
}

export default SignUp