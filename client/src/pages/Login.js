import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  useTheme,
  Alert,
  Collapse,
  TextField,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/login", { email, password });
      toast.success("Login Successfully");
      localStorage.setItem("authToken", true);
      navigate("/");
    } catch (err) {
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <Box
      width={isNotMobile ? "40%" : "80%"}
      p={"2rem"}
      m={"2rem auto"}
      borderRadius={5}
      sx={{ boxShadow: 5 }}
      backgroundColor={theme.palette.background.alt}
    >
      <Collapse in={error}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      </Collapse>
      <form onSubmit={handleSubmit}>
        <Typography variant="h3">Sign In</Typography>

        <TextField
          label="email"
          type="email"
          required
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          label="password"
          type="password"
          required
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          size="large"
          sx={{ color: "white", mt: 2 }}
        >
          Sign In
        </Button>
        <Typography mt={2}>
          Dont have an account ?{" "}
          <NavLink to="/register" style={{ color: "green" }}>
            Please Register
          </NavLink>
        </Typography>
      </form>
    </Box>
  );
};

export default Login;
