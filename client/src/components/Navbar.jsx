import React from "react";
import { useNavigate } from "react-router";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("api/v1/auth/logout");
      localStorage.removeItem("authToken");
      navigate("/login");
      toast.success("Logout successfully");
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <Box
      width="100%"
      p="1rem 6%"
      textAlign="center"
      sx={{
        boxShadow: 3,
        mb: 2,
        color: "white",
      }}
    >
      <Typography variant="h1" color="white">
        AI GPT3 Clone
      </Typography>
      {loggedIn ? (
        <>
          <NavLink to="/" p={1}>
            Home
          </NavLink>
          <NavLink to="/login" onClick={handleLogout} p={1}>
            Logout
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/register" p={1}>
            Sign up
          </NavLink>
          <NavLink to="/login" p={1}>
            Sign In
          </NavLink>
        </>
      )}
    </Box>
  );
};

export default Navbar;
