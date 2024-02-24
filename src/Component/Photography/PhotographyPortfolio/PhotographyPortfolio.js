import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Avatar,
} from "@mui/material";

const PhotographerPortfolio = () => {
  const [aboutInformation, setAboutInformation] = useState("");
  const [gallery, setGallery] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [imageAdded, setImageAdded] = useState(false);

  const handleAboutChange = (e) => {
    setAboutInformation(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleAddImage = () => {
    if (newImage) {
      setGallery([...gallery, newImage]);
      setNewImage(null);
      setImageAdded(true);
    }
  };

  const handleCloseSnackbar = () => {
    setImageAdded(false);
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
              Portfolio
            </Typography>
            <Typography variant="p" sx={{ fontSize: "20px" }}>
              About Information:
            </Typography>
            <TextField
              multiline
              rows={4}
              fullWidth
              value={aboutInformation}
              onChange={handleAboutChange}
              variant="outlined"
              margin="normal"
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
              Gallery:
            </Typography>
            <Grid container spacing={2}>
              {gallery.map((image, index) => (
                <Grid item key={index}>
                  <Avatar
                    alt={`Image ${index + 1}`}
                    src={URL.createObjectURL(image)}
                    sx={{ width: 100, height: 100 }}
                  />
                </Grid>
              ))}
            </Grid>
            <Box mt={2}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" component="span">
                  Upload Image
                </Button>
              </label>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddImage}
                disabled={!newImage}
                sx={{ ml: 2 }}
              >
                Add Image
              </Button>
            </Box>
            <Snackbar
              open={imageAdded}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Alert
                onClose={handleCloseSnackbar}
                severity="success"
                sx={{ width: "100%" }}
              >
                Image added successfully
              </Alert>
            </Snackbar>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PhotographerPortfolio;
