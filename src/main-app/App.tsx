import { useEffect, useState } from "react";
import { MainApp } from "./styles";
import { UserContext } from "../context/userContext";
import AuthPageLayout from "../layouts/auth-page/auth-page.layout";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import { io } from "socket.io-client";
import { SocketContext } from "../context/SocketContext";

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
      {!user && <AuthPageLayout setUser={setUser}/>}
      {user && <Header />}
      <UserContext.Provider value={user}>
        <SocketContext.Provider value={socket}>
          {user && <Outlet />}
        </SocketContext.Provider>
      </UserContext.Provider>
    </MainApp>
  );
}

export default App;