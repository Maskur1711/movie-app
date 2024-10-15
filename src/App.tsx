import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import ProfilePage from "./Pages/ProfilePage";
import Navbar from "./Components/Navbar";
import { useNavigate } from "react-router-dom";

const App: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  const user = localStorage.getItem("user");

  return (
    <>
      {user && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

const MainApp = () => (
  <Router>
    <App />
  </Router>
);

export default MainApp;
