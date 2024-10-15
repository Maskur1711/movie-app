// Components/Navbar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#070F2B" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        <Button color="inherit" onClick={() => navigate("/")}>
          Home
        </Button>
        <Button color="inherit" onClick={() => navigate("/profile")}>
          Profile
        </Button>
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
