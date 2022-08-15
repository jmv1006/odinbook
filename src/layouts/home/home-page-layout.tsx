import LeftPanelContainer from "../../components/home/left-panel/container-left-panel";
import MainFeedContainer from "../../components/home/main-feed/container-main-feed";
import RightPanelContainer from "../../components/home/right-panel/container-right-panel";
import { HomePage } from "./styles";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { HomePageContext } from "../../context/homePageContext";
import useFetch from "../../hooks/useFetch";
import { SocketContext } from "../../context/SocketContext";
import { useFriends } from "../../context/userFriendsContext ";
import IPost from "../../interfaces/post";

const HomePageLayout = () => {
    const { user } = useContext<any>(UserContext);
    const socket = useContext(SocketContext);

    const { friends } = useFriends();

    const [posts, setPosts] = useState<any>([]);
    const [suggestedFriends, setSuggestedFriends] = useState<any>([]);
    const [timelineUpdate, setTimelineUpdate] = useState(false);
    const [paginationPage, setPaginationPage] = useState(0);

    const {response: postsResponse, isLoading: postsAreLoading, reFetch:postsReFetch} = useFetch(`/posts/${user.Id}/timeline/paginated?page=${paginationPage}&limit=10`);
    const {response: suggestedFriendsResponse} = useFetch(`/friendships/${user.Id}/suggested`);

    useEffect(() => {
        if(postsResponse){
            //setPosts((posts : any) => postsResponse.posts)
            setPosts((posts: any) => [...posts, ...postsResponse.posts])
        } 
    }, [postsResponse]);

    useEffect(() => {
        if(suggestedFriendsResponse){
            setSuggestedFriends((suggestedFriends: any) => suggestedFriendsResponse.users);
        } 
    }, [suggestedFriendsResponse]);

    useEffect(() => {
        if(socket) {
            socket.on('new-post', (message: any) => {
                setTimelineUpdate(timelineUpdate => true)
            });
        };
    }, [socket]);

    useEffect(() => {
        console.log(posts)
    }, [posts])

    const updateTimeline = async () => {
        await postsReFetch();
        setTimelineUpdate(timelineUpdate => false)
    };

    const addPostToTimeline = (post: IPost) => {
        setPosts((posts: any) => [post, ...posts])
    };

        
    return(
        <HomePage>
            <HomePageContext.Provider value={{posts: posts, reFetchPosts: postsReFetch, postsLoading: postsAreLoading, suggested:suggestedFriends}}>
                <LeftPanelContainer />
                <MainFeedContainer timelineUpdate={timelineUpdate} addPostToTimeline={addPostToTimeline} setPaginationPage={setPaginationPage} />
                <RightPanelContainer friends={friends}/>
            </HomePageContext.Provider>
        </HomePage>
    )
}

export default HomePageLayout;