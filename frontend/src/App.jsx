import "./App.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";
import AdminAuth from "./components/AdminAuth";
import UserAuth from "./components/UserAuth";

function App() {
  const [userAuth, setUserAuth] = useState({
    state: false,
    page: "signup",
  });
  const [adminAuth, setAdminAuth] = useState({
    state: false,
    page: "signup",
  });

  return (
    <>
      {!adminAuth.state && userAuth.state && (
        <UserAuth setUserAuth={setUserAuth} userAuth={userAuth} setAdminAuth={setAdminAuth} adminAuth={adminAuth} />
      )}
      {adminAuth.state && !userAuth.state && (
        <AdminAuth setUserAuth={setUserAuth} userAuth={userAuth} setAdminAuth={setAdminAuth} adminAuth={adminAuth} />
      )}
      <Navbar setUserAuth={setUserAuth} />
      <Dashboard />
    </>
  );
}

export default App;
