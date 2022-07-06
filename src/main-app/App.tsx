import { useState } from "react";
import { MainApp } from "./styles";
import AuthPageLayout from "../layouts/auth-page/auth-page.layout";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";;


function App() {
  const [user, setUser] = useState(null);

  return (
    <MainApp>
      {!user && <AuthPageLayout setUser={setUser}/>}
      {user && <Header />}
      {user && <Outlet />}
    </MainApp>
  );
}

export default App;