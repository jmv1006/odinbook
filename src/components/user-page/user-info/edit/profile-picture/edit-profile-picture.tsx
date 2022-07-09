import { useState } from "react"
import { ProfileImgContainer, ProfileImg, EditItemContainer, EditItemTitle } from "../styles"

const EditProfilePicture = ({user} : any) => {

    const [file, setFile] = useState<any>("");

    const handleChange = (e: any) => {
        console.log(e.target.files[0])
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return(
        <EditItemContainer>
            <EditItemTitle>Edit Profile Photo</EditItemTitle>
            <ProfileImgContainer><ProfileImg src={user.ProfileImg}/></ProfileImgContainer>
            <form onSubmit={handleSubmit}>
                <input type="file" name="image" onChange={handleChange} required/>
                <button type="submit">Submit</button>
            </form>
        </EditItemContainer>
    )
}

export default EditProfilePicture