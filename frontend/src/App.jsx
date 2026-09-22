import UserAuth from "./components/UserAuth";
import AdminAuth from "./components/AdminAuth";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
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
          />
        )}
        <Navbar setUserAuth={setUserAuth}/>

        <Routes>
          <Route path={"/dashboard"} element={<Dashboard />}></Route>
          <Route path={"/post/report_lost_items"} element={<Post />}></Route>
          <Route path={"/post/report_found_items"} element={<Post />}></Route>
          <Route path={"/profile"} element={<Profile />}></Route>
          <Route path={"*"} element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
