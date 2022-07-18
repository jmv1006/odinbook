import { useState } from "react"
import SignUpFormPage from "./form";
import { ExitBtnContainer, SignUpModal, SignUpTitle, SignUpTopContainer } from "./styles"
import ProfileInfoSetUp from "./profile-info";

const SignUp = ({toggle, setUser} : any) => {

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