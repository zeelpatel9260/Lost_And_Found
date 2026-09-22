import UserAuth from "./components/UserAuth";
import AdminAuth from "./components/AdminAuth";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState, useEffect, act } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import Alert from "./components/Alert";

function App() {
  const [loading, setLoading] = useState(false)
  const [userAuth, setUserAuth] = useState({
    state: false,
    page: "signup",
  });
  const [adminAuth, setAdminAuth] = useState({
    state: false,
    page: "signup",
  });
  const [alert, setAlert] = useState({
    msg: '', state: false
  })

  let tokenAvailable = document.cookie.split(';').find(cookie => cookie.startsWith('user_jwt='))?.split('=')[1]
  const [isLog, setIsLog] = useState(tokenAvailable ? true : false)

  const[activePost, setActivePost] = useState("lost");

  useEffect(() => {
    const id = setTimeout(() => {
      setAlert({ msg: "", state: false });
    }, 4000);
    return () => {
      clearTimeout(id);
    };
  }, [alert]);

  return (
    <>
      { alert.state && <Alert msg={alert.msg}/> }
      <BrowserRouter>
        {!adminAuth.state && userAuth.state && (
          <UserAuth
            setUserAuth={setUserAuth}
            userAuth={userAuth}
            setAdminAuth={setAdminAuth}
            adminAuth={adminAuth}
            setAlert={setAlert}
            alert={alert}
            loading={loading}
            setLoading={setLoading}
            setIsLog={setIsLog}
          />
        )}
        {adminAuth.state && !userAuth.state && (
          <AdminAuth
            setUserAuth={setUserAuth}
            userAuth={userAuth}
            setAdminAuth={setAdminAuth}
            adminAuth={adminAuth}
            setAlert={setAlert}
            alert={alert}
            loading={loading}
            setLoading={setLoading}
            setIsLog={setIsLog}
          />
        )}
        <Navbar setUserAuth={setUserAuth} isLog={isLog} />

        <Routes>
          <Route path={"/dashboard"} element={<Dashboard isLog={isLog} setUserAuth={setUserAuth} />}></Route>
          <Route path={"/post/report_lost_items"} element={<Post setActivePost={setActivePost} activePost='lost' loading={loading} setLoading={setLoading} setAlert={setAlert}/>}></Route>
          <Route path={"/post/report_found_items"} element={<Post setActivePost={setActivePost} activePost='found' loading={loading} setLoading={setLoading} setAlert={setAlert}/>}></Route>
          <Route path={"/profile"} element={<Profile />}></Route>
          <Route path={"*"} element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
