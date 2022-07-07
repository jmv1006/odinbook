import { useParams } from "react-router-dom";

const UserPageLayout = () => {
   const params = useParams();

    return(
        <div>
            User Page
            {params.UserId}
        </div>
    )
};

export default UserPageLayout;