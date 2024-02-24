import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import { PhotoLibrary, Build } from "@mui/icons-material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";

export default function PhotographyDrawer({ anchor, state, setState, toggleDrawer }) {
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
            link: "photographer-profile",
          },
          {
            text: "Portfolio",
            icon: <PhotoLibrary />,
            link: "/photographerPortfolio",
          },
          {
            text: "Services",
            icon: <Build />,
            link: "/photog-services",
          },
          {
            text: "Booking History",
            icon: <CalendarTodayIcon />,
            link: "/Photographerbookinghistory",
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
