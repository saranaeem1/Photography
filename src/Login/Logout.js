import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate("/login");
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleLogout}
      sx={{ mt: 2, mb: 2 }}
    >
      Logout
    </Button>
  );
};

export default Logout;
