import LeftPanelContainer from "../../components/home/left-panel/container-left-panel";
import MainFeedContainer from "../../components/home/main-feed/container-main-feed";
import RightPanelContainer from "../../components/home/right-panel/container-right-panel";
import { HomePage } from "./styles";

const HomePageLayout = () => {

    return(
        <HomePage>
            <LeftPanelContainer />
            <MainFeedContainer />
            <RightPanelContainer />
        </HomePage>
    )
}

export default HomePageLayout;