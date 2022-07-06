import LeftPanelContainer from "../../components/home/left-panel/container-left-panel";
import MainFeedContainer from "../../components/home/main-feed/container-main-feed";
import RightPanelContainer from "../../components/home/right-panel/container-right-panel";
import { HomePage } from "./styles";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/userContext";

const HomePageLayout = () => {
    const user = useContext<any>(UserContext);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`/posts/${user.Id}/timeline`)
        .then(res => res.json())
        .then(res => setPosts(posts => res.posts))
    }, []);
        
    return(
        <HomePage>
            <LeftPanelContainer user={user}/>
            <MainFeedContainer posts={posts} user={user}/>
            <RightPanelContainer />
        </HomePage>
    )
}

export default HomePageLayout;