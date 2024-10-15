import React, { useState } from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "guest") {
      navigate("/");
    } else {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1B1A55",
      }}
    >
      <Card sx={{ width: 400, padding: 2, background: "#DDE6ED" }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Login
          </Typography>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
            <Button variant="outlined" onClick={() => navigate("/")}>
              Continue as Guest
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
