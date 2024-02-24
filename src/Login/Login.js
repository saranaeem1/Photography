import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Typography, Snackbar } from "@mui/material"; 
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeButton, setActiveButton] = useState(null); // State to track active button
  const [activePhotographerButton, setActivePhotographerButton] =
    useState(null); // State to track active photographer button
  const [userType, setUserType] = useState(null); // State to track user type
  const history = useHistory(); // Get history object from React Router

  const handleButtonClick = (isAdmin) => {
    setActiveButton(isAdmin ? "admin" : "user"); // Set active button
    setActivePhotographerButton(null); // Reset active photographer button
    setUserType(isAdmin ? "admin" : "user"); // Set user type
  };

  const handlePhotographerButtonClick = () => {
    setActivePhotographerButton("photographer"); // Set active photographer button
    setActiveButton(null); // Reset active button
    setUserType("photographer"); // Set user type
  };

  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false); // State to control Snackbar visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      // Check if any of the fields are empty
      if (!username || !password || !userType) {
        setLoginMessage("Please enter all fields.");
        setOpenSnackbar(true); // Show Snackbar
        return;
      }

      // Make an API call to your backend server to get the user data
      const response = await axios.get(
        `https://photography-website-26cc4-default-rtdb.firebaseio.com/${nodeName}.json`
      );

      // Check if the login was successful
      if (response.status === 200) {
        // Check if the username exists in the database
        const userData = response.data;
        const user = Object.values(userData).find(
          (user) => user.username === username
        );

        if (user) {
          // Check if the password matches the one stored in the database
          if (user.password === password) {
            // Redirect to the appropriate page based on the active button
            if (userType === "admin") {
              history.push("/dashboard");
            } else if (userType === "photographer") {
              history.push("/photographer-profile");
            } else {
              history.push("/homepage");
            }
          } else {
            setLoginMessage("Incorrect password.");
            setOpenSnackbar(true); // Show Snackbar
          }
        } else {
          setLoginMessage("Invalid username.");
          setOpenSnackbar(true); // Show Snackbar
        }
      } else {
        setLoginMessage("An error occurred. Please try again later.");
        setOpenSnackbar(true); // Show Snackbar
      }
    } catch (error) {
      // Display an error message if there was an error with the API call
      setLoginMessage("An error occurred. Please try again later.");
      setOpenSnackbar(true); // Show Snackbar
    }
  };


  let nodeName;
  switch (userType) {
    case "admin":
      nodeName = "Admins";
      break;
    case "photographer":
      nodeName = "Photographers";
      break;
    case "user":
      nodeName = "Customers";
      break;
    default:
      nodeName = "Customers";
  }

  return (
    <div className="login-container">
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mt: "10px", mb: "15px" }}
      >
        Login
      </Typography>
      <div className="button-group">
        <button
          id="bt1"
          className={activeButton === "user" ? "active" : ""}
          onClick={() => handleButtonClick(false)}
        >
          User
        </button>
        <button
          id="bt2"
          className={activeButton === "admin" ? "active" : ""}
          onClick={() => handleButtonClick(true)}
        >
          Admin
        </button>
        <button
          id="bt3"
          className={
            activePhotographerButton === "photographer" ? "active" : ""
          }
          onClick={handlePhotographerButtonClick}
        >
          Photographer
        </button>
      </div>
      <div className="input-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            onClick={togglePasswordVisibility}
            className="eye-icon"
          />
        </div>
      </div>
      <button className="bt" onClick={handleLogin}>
        Login
      </button>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        message={loginMessage}
      />
    </div>
  );
};

export default LoginPage;
