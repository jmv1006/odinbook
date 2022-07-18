import { useEffect, useState } from "react";
import { MainApp } from "./styles";
import { UserContext } from "../context/userContext";
import AuthPageLayout from "../layouts/auth-page/auth-page.layout";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import { io } from "socket.io-client";
import { SocketContext } from "../context/SocketContext";
import { UserFriendsProvider } from "../context/userFriendsContext ";

function App() {
  const [user, setUser] = useState<any>(null);
  const [socket, setSocket] = useState<any>(null);

  useEffect(() => {
    if(user) {
      const newSocket = io('http://localhost:7000/');
      setSocket(newSocket)
      newSocket.emit('user-identify', user.Id)
    }
  }, [user])

  return (
    <MainApp>
      <UserContext.Provider value={{user: user, updateUser: setUser}}>
          {user ? 
            <SocketContext.Provider value={socket}>
              <UserFriendsProvider>
                <Header />
                <Outlet />
              </UserFriendsProvider>
            </SocketContext.Provider>
          :
          <AuthPageLayout setUser={setUser} />
          }
      </UserContext.Provider>
    </MainApp>
  );
}

export default App;