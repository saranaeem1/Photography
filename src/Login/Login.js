import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Typography, Snackbar } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeButton, setActiveButton] = useState(null);
  const [activePhotographerButton, setActivePhotographerButton] =
    useState(null);
  const [userType, setUserType] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (isAdmin) => {
    setActiveButton(isAdmin ? "admin" : "user");
    setActivePhotographerButton(null);
    setUserType(isAdmin ? "admin" : "user");
  };

  const handlePhotographerButtonClick = () => {
    setActivePhotographerButton("photographer");
    setActiveButton(null);
    setUserType("photographer");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setLoginMessage("Please enter all fields.");
      setOpenSnackbar(true);
      return;
    }
    try {
      const response = await axios.get(
        `https://photography-website-26cc4-default-rtdb.firebaseio.com/user.json`
      );

      console.log(response.status);
      if (response.status === 200) {
        // Check if the username exists in the database
        const userData = response.data;
        const user = Object.values(userData).find(
          (user) => user.email === email
        );
        try {
          if (user) {
            console.log(user);
            // Check if the password matches the one stored in the database
            if (user.password === password) {
              //check user role from db
              if (user.role == "admin") {
                navigate("/dashboard");
              } else if (user.role == "photographer") {
                navigate("/photographer-profile");
              } else if (user.role == "user") {
                navigate("/homepage");
                console.log("user");
              }
            } else {
              setLoginMessage("Incorrect password.");
              setOpenSnackbar(true);
            }
          }
        } catch (error) {
          console.error("Error occurred during login:", error);
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

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      setLoginMessage("An error occurred. Please try again later.");
      setOpenSnackbar(true);
    }
  };

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
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
