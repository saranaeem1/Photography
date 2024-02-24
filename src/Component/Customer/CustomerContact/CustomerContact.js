import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./CustomerContact.css";

const CustomerContact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [incompleteData, setIncompleteData] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, message } = userData;
    if (!name || !email || !message) {
      setIncompleteData(true);
      return;
    }
    if (!validateEmail(email)) {
      setInvalidEmail(true);
      return;
    }
    const currentDate = new Date().toISOString(); 
    const res = await fetch(
      "https://photography-website-26cc4-default-rtdb.firebaseio.com/UserContact.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          date: currentDate, 
        }),
      }
    );
    if (res.ok) {
      setUserData({
        name: "",
        email: "",
        message: "",
      });
      setOpenSnackbar(true);
    }
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="ContactContainer" id="contact">
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
          method="POST"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: isSmallScreen ? "35ch" : "50ch",
            },
          }}
          noValidate
          autoComplete="off"
          onSubmit={submitData}
        >
          <TextField
            id="standard-basic"
            label="Enter Name"
            variant="standard"
            name="name"
            value={userData.name}
            required
            onChange={postUserData}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Enter Email"
            variant="standard"
            name="email"
            required
            value={userData.email}
            onChange={postUserData}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Message"
            name="message"
            variant="standard"
            value={userData.message}
            onChange={postUserData}
            multiline
            rows={3}
            required
          />
          <br />
          <Button variant="contained" type="submit">
            Send
          </Button>
        </Box>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Form Submitted
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={incompleteData}
        autoHideDuration={3000}
        onClose={() => setIncompleteData(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          onClose={() => setIncompleteData(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please fill in all fields.
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={invalidEmail}
        autoHideDuration={3000}
        onClose={() => setInvalidEmail(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          onClose={() => setInvalidEmail(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please enter a valid email address.
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomerContact;
