import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./CustomerContact.css";

const CustomerContact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="ContactContainer">
      <Box
        sx={{
          height: "350px",
          backgroundImage: `url(https://www.shutterstock.com/image-photo/hand-pushing-social-network-button-260nw-235150300.jpg)`,
          backgroundSize: "cover",
          width: "100%",
        }}
      ></Box>
      <Typography
        variant={isSmallScreen ? "h6" : "h5"}
        sx={{ textAlign: "center", margin: "20px" }}
      >
        Have any queries?
      </Typography>
      <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        sx={{ textAlign: "center", margin: "15px 20px" }}
      >
        We're here to help
      </Typography>
      <Box
        sx={{
          width: "180px",
          backgroundColor: "black",
          height: "2px",
          margin: "0px auto",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "40px",
          marginBottom: "30px",
        }}
      >
        <Box sx={{ margin: "50px" }}>
          <Typography
            variant={isSmallScreen ? "h4" : "h3"}
            className="ContactUsHeading"
            sx={{ paddingBottom: "20px" }}
          >
            Contact Us
          </Typography>
          <Typography sx={{ padding: "10px" }}>
            <CallIcon sx={{ paddingRight: "10px" }} />
            0322-5923164
          </Typography>
          <Typography sx={{ padding: "10px" }}>
            <EmailIcon sx={{ paddingRight: "10px" }} />
            Contact@info.com
          </Typography>
          <Typography sx={{ padding: "10px" }}>
            <LocationOnIcon sx={{ paddingRight: "10px" }} />
            Carmelita Ave, Beverly Hills, CA 90210, USA
          </Typography>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: isSmallScreen ? "35ch" : "50ch",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Enter Name"
            variant="standard"
          />
          <br />
          <TextField
            id="standard-basic"
            label="Enter Email"
            variant="standard"
          />
          <br />
          <TextField
            id="standard-basic"
            label="Message"
            variant="standard"
            multiline
            rows={3}
          />
          <br />
          <Button variant="contained">Send</Button>
        </Box>
      </Box>
    </div>
  );
};

export default CustomerContact;
