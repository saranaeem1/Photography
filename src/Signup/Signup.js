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
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
    phoneNumber: "",
    city: "",
    cnic: "",
    billImage: null,
  });
  const [signupCompleted, setSignupCompleted] = useState(false);
  const [userType, setUserType] = useState(null);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleButtonClick = (type) => {
    setUserType(type);
  };

  const postUserData = (event) => {
    const { name, value, files } = event.target;
    if (name === "billImage") {
      setUserData({ ...userData, billImage: files[0] || null });
    } else {
      setUserData({ ...userData, [name]: value });
    }
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

    if (userType === "photographer") {
      if (!userData.cnic) {
        newErrors.cnic = "CNIC is required";
        valid = false;
      }

      if (!userData.billImage) {
        newErrors.billImage = "Bill Image is required";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { email, password } = userData;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    const user = userCredential.user;
    localStorage.setItem("token", user.accessToken);
    localStorage.setItem("user", JSON.stringify(user));
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log(Object.fromEntries(formData.entries()));

    var res;
    if (userType === "photographer") {
      res = await fetch(
        `https://photography-website-26cc4-default-rtdb.firebaseio.com/photographer.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userData.username,
            email: userData.email,
            password: userData.password,
            fullName: userData.fullName,
            phoneNumber: userData.phoneNumber,
            city: userData.city,
            cnic: userData.cnic,
            billImage: userData.billImage,
          }),
        }
      );
    } else {
      res = await fetch(
        `https://photography-website-26cc4-default-rtdb.firebaseio.com/user.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: userData.username,
            email: userData.email,
            password: userData.password,
            fullName: userData.fullName,
            phoneNumber: userData.phoneNumber,
            city: userData.city,
            cnic: userData.cnic,
            billImage: userData.billImage,
            role: "user",
          }),
        }
      );
    }
    if (res.ok) {
      setUserData({
        username: "",
        email: "",
        password: "",
        fullName: "",
        phoneNumber: "",
        city: "",
        cnic: "",
        billImage: null,
      });
      setSignupCompleted(true);
      navigate("/login");
    } else {
      console.error("Error:", res.statusText);
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
                onClick={() => handleButtonClick("user")}
                sx={{
                  marginRight: "10px",
                  ...(userType === "user" && {
                    backgroundColor: "#007bff",
                    color: "#fff",
                  }),
                }}
              >
                User
              </Button>
              <Button
                onClick={() => handleButtonClick("photographer")}
                sx={{
                  ...(userType === "photographer" && {
                    backgroundColor: "#007bff",
                    color: "#fff",
                  }),
                }}
              >
                Photographer
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
                type="tel"
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />
              <TextField
                label="City"
                name="city"
                value={userData.city}
                onChange={postUserData}
                variant="outlined"
                margin="normal"
                fullWidth
                type="text"
                error={!!errors.city}
                helperText={errors.city}
              />
              {userType === "photographer" && (
                <>
                  <TextField
                    label="CNIC"
                    name="cnic"
                    value={userData.cnic}
                    onChange={postUserData}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    type="text"
                    error={!!errors.cnic}
                    helperText={errors.cnic}
                  />
                  <input
                    type="file"
                    name="billImage"
                    onChange={postUserData}
                    accept="image/*"
                    required
                    error={!!errors.billImage}
                    helperText={errors.billImage}
                  />
                </>
              )}
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
              <Typography sx={{ textAlign: "center" }}>
                Already have an account? <Link to="/login">Login</Link>
              </Typography>
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
