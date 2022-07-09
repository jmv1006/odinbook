import LeftPanelContainer from "../../components/home/left-panel/container-left-panel";
import MainFeedContainer from "../../components/home/main-feed/container-main-feed";
import RightPanelContainer from "../../components/home/right-panel/container-right-panel";
import { HomePage } from "./styles";
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../context/userContext";
import { HomePageContext } from "../../context/homePageContext";
import useFetch from "../../hooks/useFetch";
import { SocketContext } from "../../context/SocketContext";


const HomePageLayout = () => {
    const user = useContext<any>(UserContext);
    const socket = useContext(SocketContext);

    const {response: postsResponse, isLoading: postsAreLoading, reFetch:postsReFetch} = useFetch(`/posts/${user.Id}/timeline`);

    const {response: friendsResponse, isLoading: friendsAreLoading, reFetch: friendsReFetch} = useFetch(`/friendships/${user.Id}`)

    const [posts, setPosts] = useState([]);
    const [friends, setFriends] = useState([]);
    const [timelineUpdate, setTimelineUpdate] = useState(false);

    useEffect(() => {
        if(postsResponse) setPosts(postsResponse.posts);
    }, [postsResponse])

    useEffect(() => {
        if(friendsResponse) setFriends(friendsResponse.friends);
    }, [friendsResponse])

    useEffect(() => {
        if(socket) {
            socket.on('new-post', (message: any) => {
                setTimelineUpdate(timelineUpdate => true)
            });
        };
    }, [socket]);

    const updateTimeline = async () => {
        await postsReFetch();
        setTimelineUpdate(timelineUpdate => false)
    };
        
    return(
        <HomePage>
            <HomePageContext.Provider value={{posts: posts, reFetchPosts: postsReFetch, postsLoading: postsAreLoading}}>
                <LeftPanelContainer />
                <MainFeedContainer timelineUpdate={timelineUpdate} updateTimeline={updateTimeline}/>
                <RightPanelContainer friends={friends}/>
            </HomePageContext.Provider>
        </HomePage>
    )
}

export default HomePageLayout;