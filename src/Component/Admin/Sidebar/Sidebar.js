import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom"; 

export default function TemporaryDrawer({
  anchor,
  state,
  setState,
  toggleDrawer,
}) {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            text: "Profile",
            icon: <PersonIcon />,
            link: "admin-profile",
          },
          {
            text: "Dashboard",
            icon: <DashboardIcon />,
            link: "/dashboard",
          },
          {
            text: "Manage users",
            icon: <PeopleAltIcon />,
            link: "/manage-users",
          },
          {
            text: "Manage photographers",
            icon: <PeopleAltIcon />,
            link: "/manage-photographers",
          },
          {
            text: "Add Genre",
            icon: <AddIcon />,
            link: "/add-genre",
          },
          {
            text: "Customer Queries",
            icon: <HelpOutlineIcon />,
            link: "/customer-queries",
          },
          {
            text: "Logout",
            icon: <ExitToAppIcon />,
            link: "/logout",
          },
        ].map(({ text, icon, link }, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={link}>
              {" "}
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
