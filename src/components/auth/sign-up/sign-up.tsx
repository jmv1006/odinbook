import { useState } from "react"
import SignUpFormPage from "./form";
import { SignUpModal } from "./styles"
import ProfileInfoSetUp from "./profile-info";

const SignUp = ({toggle, setUser} : any) => {

    const [accountCreated, setAccountCreated] = useState(false);

    const [creatingAccount, setCreatingAccount] = useState(false);

    const [uploadingProfileInfo, setUploadingProfileInfo] = useState(false);

    const [createdUser, setCreatedUser] = useState(null);

    return(
        <SignUpModal>
            {!accountCreated && !creatingAccount ?
                <SignUpFormPage setAccountCreated={setAccountCreated} setCreatingAccount={setCreatingAccount} setCreatedUser={setCreatedUser}/>
                :
                null
            }
            {accountCreated && !uploadingProfileInfo && createdUser ?
                <ProfileInfoSetUp setUploadingInfo={setUploadingProfileInfo} createdUser={createdUser} setUser={setUser}/>
                :
                null
            }
            {creatingAccount && "Creating New Account..."}
            {uploadingProfileInfo && "Uploading Details..."}
            <button onClick={toggle}>X</button>
        </SignUpModal>
    )
}

export default SignUp