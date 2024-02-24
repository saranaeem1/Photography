import React, { useState } from "react";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import PhotographyNavbar from "../PhotographySidebar/PhotographerNavbar";;

const PhotographerProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newCity, setNewCity] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleEdit = () => {
    setIsEditing(true);
    setNewFirstName(firstName);
    setNewLastName(lastName);
    setNewEmail(email);
    setNewPhoneNumber(phoneNumber);
    setNewAddress(address);
    setNewCity(city);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setFirstName(newFirstName);
    setLastName(newLastName);
    setEmail(newEmail);
    setPhoneNumber(newPhoneNumber);
    setAddress(newAddress);
    setCity(newCity);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <>
      <PhotographyNavbar/>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box sx={{ flexWrap: "wrap", flexDirection: "column" }}>
          <Typography
            variant="h4"
            sx={{ mt: "30px", mb: "25px", textAlign: "center" }}
          >
            Photographer Profile
          </Typography>
          <form onSubmit={handleSave}>
            {isEditing ? (
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  src={
                    profilePicture ? URL.createObjectURL(profilePicture) : ""
                  }
                  sx={{
                    width: "150px",
                    height: "150px",
                    margin: "0 auto",
                    marginBottom: "16px",
                  }}
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    sx={{
                      margin: "0 auto",
                      display: "block",
                      width: "180px",
                      mb: "15px",
                    }}
                  >
                    Upload Picture
                  </Button>
                </label>
                <TextField
                  label="First Name"
                  value={newFirstName}
                  onChange={(e) => setNewFirstName(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  sx={{ mr: "15px" }}
                />
                <TextField
                  label="Last Name"
                  value={newLastName}
                  onChange={(e) => setNewLastName(e.target.value)}
                  variant="outlined"
                  margin="normal"
                />
                <br />
                <TextField
                  label="Email"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  sx={{ mr: "15px" }}
                />
                <TextField
                  label="Phone Number"
                  type="number"
                  value={newPhoneNumber}
                  onChange={(e) => setNewPhoneNumber(e.target.value)}
                  variant="outlined"
                  margin="normal"
                />
                <br />
                <TextField
                  label="Address"
                  type="text"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  variant="outlined"
                  margin="normal"
                  sx={{ mr: "15px" }}
                />
                <TextField
                  label="City"
                  type="text"
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  variant="outlined"
                  margin="normal"
                />
                <br />
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="contained-button-file"
                  type="file"
                  onChange={handlePictureChange}
                />
                <br />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ margin: "15px" }}
                >
                  Save
                </Button>
                <Button variant="contained" onClick={handleCancel}>
                  Cancel
                </Button>
              </Box>
            ) : (
              <Box p={3} boxShadow={3} borderRadius={2}>
                <Avatar
                  src={
                    profilePicture ? URL.createObjectURL(profilePicture) : ""
                  }
                  sx={{
                    width: "120px",
                    height: "120px",
                    margin: "0 auto",
                    marginBottom: "16px",
                  }}
                />
                <Box sx={{ marginTop: "30px" }}>
                  <Typography variant="h6" sx={{ marginBottom: "8px" }}>
                    First Name:{" "}
                    <span
                      style={{
                        marginLeft: "10px",
                        color: firstName ? "initial" : "#ccc",
                      }}
                    >
                      {firstName ? (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue={firstName}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      ) : (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue="Enter First Name"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      )}
                    </span>
                  </Typography>

                  <Typography variant="h6" sx={{ marginBottom: "8px" }}>
                    Last Name:{" "}
                    <span style={{ marginLeft: "12px" }}>
                      {lastName ? (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue={lastName}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      ) : (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue="Enter Last Name"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      )}
                    </span>
                  </Typography>

                  <Typography variant="h6" sx={{ marginBottom: "8px" }}>
                    Email:{" "}
                    <span
                      style={{
                        marginLeft: "61px",
                        color: email ? "initial" : "#ccc",
                      }}
                    >
                      {email ? (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue={email}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      ) : (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue="Enter Email"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      )}
                    </span>
                  </Typography>

                  <Typography variant="h6" sx={{ marginBottom: "8px" }}>
                    Phone No:{" "}
                    <span
                      style={{
                        marginLeft: "20px",
                        color: phoneNumber ? "initial" : "#ccc",
                      }}
                    >
                      {phoneNumber ? (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue={phoneNumber}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      ) : (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue="Enter Phone No"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      )}
                    </span>
                  </Typography>

                  <Typography variant="h6" sx={{ marginBottom: "8px" }}>
                    Address:{" "}
                    <span
                      style={{
                        marginLeft: "32px",
                        color: address ? "initial" : "#ccc",
                      }}
                    >
                      {address ? (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue={address}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      ) : (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue="Enter Address"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      )}
                    </span>
                  </Typography>

                  <Typography variant="h6" sx={{ marginBottom: "8px" }}>
                    City:{" "}
                    <span
                      style={{
                        marginLeft: "73px",
                        color: city ? "initial" : "#ccc",
                      }}
                    >
                      {city ? (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue={city}
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      ) : (
                        <TextField
                          id="standard-read-only-input"
                          defaultValue="Enter City"
                          InputProps={{
                            readOnly: true,
                          }}
                          variant="standard"
                        />
                      )}
                    </span>
                  </Typography>

                  <Button
                    variant="contained"
                    onClick={handleEdit}
                    sx={{ margin: "15px", width: "120px" }}
                  >
                    Edit
                  </Button>
                </Box>
              </Box>
            )}
          </form>
        </Box>
      </Box>
    </>
  );
};

export default PhotographerProfile;
