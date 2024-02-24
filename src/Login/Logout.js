import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push("/login");
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
