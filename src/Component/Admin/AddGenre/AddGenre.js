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

import Navbar from "../Navbar/Navbar";
import { storage } from "../../../Firebase";
import { getDatabase, ref, push } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const AddGenrePage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [genreData, setGenreData] = useState({
    name: "",
    description: "",
    pic: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Genre submitted:", genreData);

    // Upload picture to storage service (e.g., Firebase Storage)
    const storageRef = ref(storage, "images/myFile.jpg");
    await uploadBytes(storageRef, genreData.pic);
    const picUrl = await getDownloadURL(storageRef);

    // Include picture URL in the data sent to the database
    const dataWithPicUrl = {
      ...genreData,
      pic: picUrl,
    };

    // Initialize Firebase Realtime Database
    const database = getDatabase();

    // Add the data to the database
    const dbRef = ref(database, "Genre");
    await push(dbRef, dataWithPicUrl);

    setGenreData({
      name: "",
      description: "",
      pic: false,
    });
    setOpenSnackbar(true);
  };


  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setGenreData((prevData) => ({
      ...prevData,
      pic: file,
    }));
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Navbar />
      <Box mt={2} mb={8} ml={3} mr={3}>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Box p={3} boxShadow={3} borderRadius={2}>
              <Typography
                variant="h4"
                sx={{ mt: "50px", mb: "15px", textAlign: "center" }}
              >
                Add Genre
              </Typography>
              <form onSubmit={handleSubmit}>
                <Typography variant="p" sx={{ fontSize: "20px" }}>
                  Genre Name:
                </Typography>
                <TextField
                  name="name"
                  value={genreData.name}
                  onChange={(e) =>
                    setGenreData((prevData) => ({
                      ...prevData,
                      name: e.target.value,
                    }))
                  }
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                />
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "20px",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                  }}
                >
                  Description:
                </Typography>
                <Box mt={2}>
                  <TextField
                    multiline
                    rows={4}
                    fullWidth
                    name="description"
                    value={genreData.description}
                    onChange={(e) =>
                      setGenreData((prevData) => ({
                        ...prevData,
                        description: e.target.value,
                      }))
                    }
                    variant="outlined"
                    required
                  />
                </Box>
                <input
                  accept="image/*"
                  style={{ display: "none" }}
                  id="contained-button-file"
                  type="file"
                  onChange={handlePictureChange}
                  name="pic"
                />
                <label htmlFor="contained-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    sx={{ mt: "10px" }}
                  >
                    Upload Picture
                  </Button>
                </label>
                {genreData.pic && (
                  <Typography variant="body1">Picture uploaded!</Typography>
                )}
                <br />
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{ mt: 2 }}
                  >
                    Add Genre
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Genre has been added
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default AddGenrePage;
