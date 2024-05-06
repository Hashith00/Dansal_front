import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";
import UserLocationPage from "./components/UserLocationPage";
import FullPage from "./components/FullPage";
import AddDansale from "./components/AddDansal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MapComponent from "./components/Map";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/location" element={<UserLocationPage />} />
        <Route path="/full" element={<FullPage />} />
        <Route path="/add" element={<AddDansale />} />
        <Route path="/map" element={<MapComponent />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
