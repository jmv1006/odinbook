import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { ProfileInfoContainer, ProfileInfoForm } from "./styles";

const ProfileInfoSetUp = ({setUploadingInfo, createdUser, setUser} : any) => {

    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [bioText, setBioText] = useState("");
    const [error, setError] = useState(false);

    const fileChangeHandler = (e: any) => {
        setSelectedFile(e.target.files[0])
    }

    const bioTextOnChange = (e: any) => {
        setBioText(bioText => e.target.value)
    };

    const submitData = async (e: any) => {
        e.preventDefault()
        setUploadingInfo(true)
        const formData = new FormData()
        formData.append('image', selectedFile);

        if(selectedFile) {
            const ImgUploadResponse = await fetch(`/users/${createdUser.Id}/profile-img`, {
                method: "POST",
                body: formData
            });
            if(!ImgUploadResponse.ok) {
                setError(true)
                return
            }
        }

        const ProfileInfoResponse =  await fetch(`/users/${createdUser.Id}/profile`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Bio: bioText})
        });

        if(!ProfileInfoResponse.ok) {
            setError(true)
            return
        }
        setUploadingInfo(false)
        navigate('/')

        const userResponse =  await fetch(`/users/${createdUser.Id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if(!userResponse.ok) {
            setError(true)
            return
        }

        const responseJSON = await userResponse.json();
        setUser(responseJSON.user);
    }

    const skipDetails = () => {
        setUser(createdUser)
    }

    return(
        <ProfileInfoContainer>
            {error && "There was an error uploading your details! Your account has been created, so you can still LOG IN to access it."}
            <ProfileInfoForm onSubmit={submitData}>
                <label>Bio: </label>
                <textarea value={bioText} onChange={bioTextOnChange}/>
                <label>Profile Img: </label>
                <input type="file" accept="image/*" onChange={fileChangeHandler}/>
                <button type="submit">Submit</button>
            </ProfileInfoForm>
            <button onClick={skipDetails}>Skip</button>
        </ProfileInfoContainer>
    )
}

export default ProfileInfoSetUp