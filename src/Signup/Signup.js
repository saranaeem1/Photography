import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Snackbar,
  Alert, 
} from "@mui/material";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    city: "",
  });
  const [signupCompleted, setSignupCompleted] = useState(false);
  const [userType, setUserType] = useState(null);
  const [errors, setErrors] = useState({});

  const handleButtonClick = (type) => {
    setUserType(type);
  };

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!userData.fullName) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    }

    if (!userData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!userData.username) {
      newErrors.username = "Username is required";
      valid = false;
    }

    if (!userData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (userData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

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
    const res = await fetch(
      `https://photography-website-26cc4-default-rtdb.firebaseio.com/${nodeName}.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    if (res.ok) {
      setUserData({
        username: "",
        email: "",
        password: "",
        fullName: "",
        phoneNumber: "",
        city: "",
      });
      setSignupCompleted(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSignupCompleted(false);
  };

  return (
    <Box mt={2} mb={8} ml={3} mr={3}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <Box p={3} boxShadow={3} borderRadius={2}>
            <Typography
              variant="h4"
              sx={{ mt: "20px", mb: "15px", textAlign: "center" }}
            >
              Sign Up
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Button
                onClick={() => handleButtonClick("admin")}
                sx={{
                  marginRight: "10px",
                  ...(userType === "admin" && {
                    backgroundColor: "#007bff",
                    color: "#fff",
                  }),
                }}
              >
                Admin
              </Button>
              <Button
                onClick={() => handleButtonClick("photographer")}
                sx={{
                  marginRight: "10px",
                  ...(userType === "photographer" && {
                    backgroundColor: "#007bff",
                    color: "#fff",
                  }),
                }}
              >
                Photographer
              </Button>
              <Button
                onClick={() => handleButtonClick("user")}
                sx={{
                  ...(userType === "user" && {
                    backgroundColor: "#007bff",
                    color: "#fff",
                  }),
                }}
              >
                User
              </Button>
            </Box>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                name="fullName"
                value={userData.fullName}
                onChange={postUserData}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                error={!!errors.fullName}
                helperText={errors.fullName}
              />
              <TextField
                label="Email"
                name="email"
                value={userData.email}
                onChange={postUserData}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                label="Username"
                name="username"
                value={userData.username}
                onChange={postUserData}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                error={!!errors.username}
                helperText={errors.username}
              />
              <TextField
                label="Password"
                name="password"
                value={userData.password}
                onChange={postUserData}
                variant="outlined"
                margin="normal"
                fullWidth
                type="password"
                required
                error={!!errors.password}
                helperText={errors.password}
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={userData.phoneNumber}
                onChange={postUserData}
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <TextField
                label="City"
                name="city"
                value={userData.city}
                onChange={postUserData}
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <Button type="submit" variant="contained" color="primary">
                  Sign Up
                </Button>
              </Box>
              <Typography sx={{textAlign:"center"}}>Already have an account? <Link to="/login">Login</Link></Typography>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={signupCompleted}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Signup completed successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignupPage;
