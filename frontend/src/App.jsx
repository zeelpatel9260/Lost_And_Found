// import UserAuth from './components/UserAuth'
import AdminAuth from "./components/AdminAuth";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <div
        className="
        bg-(--bg)
        flex 
        justify-center 
        items-center
        w-screen
        h-screen"
      >
        {/* <UserAuth></UserAuth> */}
        <AdminAuth></AdminAuth>
      </div>
    </>
  );
}

export default App;
