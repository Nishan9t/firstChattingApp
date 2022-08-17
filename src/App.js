import { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "./context/Auth/authContext";
import ChatPage from "./pages/ChatPage";
import ForgetPassPage from "./pages/ForgetPassPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SignupPage";
import {Toaster} from "react-hot-toast";


function App() {
  // const [auth,setAuth]=useState(false)
  const authC=useContext(AuthContext);

  console.log("auth context from App: " ,authC);





  return (
    <div>
      <Toaster/>
      <Routes>
        {!authC.state && (
            <>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="forget" element={<ForgetPassPage/>}/>
          <Route path="signup" element={<SignupPage/>}/>
          </>
        )}
        {authC.state && (
          <>
          <Route path="/" element={<ChatPage/>} />
          <Route path="chat" element={<ChatPage/>} />
          <Route path="profile" element={<ProfilePage/>} />
          
          
          </>
        )}

        <Route path="*" element={<Navigate to={authC.state ? "/chat" : "/login"} />} />


      </Routes>
    </div>
  );
}

export default App;
