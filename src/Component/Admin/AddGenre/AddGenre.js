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

const AddGenrePage = () => {
  const [genreName, setGenreName] = useState("");
  const [description, setDescription] = useState("");
  const [genrePicture, setGenrePicture] = useState(null);
  const [genreAdded, setGenreAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like submitting the form data to an API, etc.
    console.log("Genre submitted:", { genreName, description, genrePicture });
    // Reset form fields
    setGenreName("");
    setDescription("");
    setGenrePicture(null);
    setGenreAdded(true);
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setGenrePicture(file);
  };

  const handleCloseSnackbar = () => {
    setGenreAdded(false);
  };

  return (
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
                value={genreName}
                onChange={(e) => setGenreName(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
              {genrePicture !== null && (
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
        open={genreAdded}
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
  );
};

export default AddGenrePage;
