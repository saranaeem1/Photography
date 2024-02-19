import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "../Sidebar/Sidebar";
import AccountMenu from "./MenuAvatar";

export default function Navbar() {
  const [state, setState] = React.useState({
    left: false, 
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)} // Pass "left" as the anchor
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photography
          </Typography>
          <AccountMenu/>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer
        anchor="left" 
        state={state}
        setState={setState}
        toggleDrawer={toggleDrawer}
      />
    </Box>
  );
}
