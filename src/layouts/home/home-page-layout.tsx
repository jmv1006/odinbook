import LeftPanel from "../../components/home/left-panel/left-panel";
import MainFeed from "../../components/home/main-feed/main-feed";
import RightPanel from "../../components/home/right-panel/right-panel";
import { HomePage } from "./styles";
const HomePageLayout = () => {

    return(
        <HomePage>
            <LeftPanel />
            <MainFeed />
            <RightPanel />
        </HomePage>
    )
}

export default HomePageLayout;