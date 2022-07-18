import { useContext, useState } from "react"
import { UserContext } from "../../../../../context/userContext";
import { useUserPageContext } from "../../../../../context/userPageContextRewrite";
import { ProfileImgContainer, ProfileImg, EditItemContainer, EditItemTitle } from "../styles"

const EditProfilePicture = ({user} : any) => {

    const [file, setFile] = useState<any>(null);
    const {updateUser} = useContext<any>(UserContext);

    const [isLoading, setIsLoading] = useState(false);

    const {triggerReload} = useUserPageContext()

    const handleChange = (e: any) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e: any) => {
        setIsLoading(isLoading => true)
        e.preventDefault()

        if(file) {
            const formData = new FormData()
            formData.append('image', file);
            const ImgUploadResponse = await fetch(`/users/${user.Id}/profile-img`, {
                method: "PUT",
                body: formData
            });
            if(!ImgUploadResponse.ok) {
                setIsLoading(isLoading => false)
                return
            }
            
            const resJSON = await ImgUploadResponse.json()
            setIsLoading(isLoading => false)
            console.log(resJSON.updatedUser)
            updateUser((prev: any) => resJSON.updatedUser)
            triggerReload();
        }
    }

    return(
        <EditItemContainer>
            <EditItemTitle>Edit Profile Photo</EditItemTitle>
            <ProfileImgContainer><ProfileImg src={user.ProfileImg}/></ProfileImgContainer>
            {!isLoading ? 
                <form onSubmit={handleSubmit}>
                   <input type="file" onChange={handleChange} accept="image/*" required/>
                   <button type="submit">Submit</button>
               </form>
               :
               "Loading..."
            }
        </EditItemContainer>
    )
}

export default EditProfilePicture