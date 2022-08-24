import { UserContext } from "./userContext";
import { SocketContext } from "./SocketContext";
import { UserFriendsProvider } from "./userFriendsContext ";
import { NotificationsProvider } from "./notificationsContext";
import { BrowserRouter } from "react-router-dom";
import IUser from "../interfaces/user";

class SocketMock {
    on() {
        return
    }

    emit() {
        return
    }
}

const mockUser: IUser = {
    Id: "12345",
    DisplayName: "Test User",
    Email: "testuser@gmail.com",
    ProfileImg: "null.com",
};

const mockSocket = new SocketMock()

const TestsContextProvider = ({children} : any) => {
    return(
        <BrowserRouter>
            <UserContext.Provider value={{user: mockUser, updateUser: jest.fn()}}>
                <SocketContext.Provider value={mockSocket}>
                    <UserFriendsProvider>
                        <NotificationsProvider>
                            {children}
                        </NotificationsProvider>
                    </UserFriendsProvider>
                </SocketContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    )
};

export default TestsContextProvider