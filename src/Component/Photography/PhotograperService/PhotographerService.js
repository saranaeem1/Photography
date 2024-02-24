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

const PhotographerService = () => {
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [servicePicture, setServicePicture] = useState(null);
  const [serviceAdded, setServiceAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like submitting the form data to an API, etc.
    console.log("Service submitted:", {
      serviceName,
      description,
      servicePicture,
    });
    // Reset form fields
    setServiceName("");
    setDescription("");
    setServicePicture(null);
    setServiceAdded(true);
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setServicePicture(file);
  };

  const handleCloseSnackbar = () => {
    setServiceAdded(false);
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
              Add Service
            </Typography>
            <form onSubmit={handleSubmit}>
              <Typography variant="p" sx={{ fontSize: "20px" }}>
                Service Name:
              </Typography>
              <TextField
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
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
              {servicePicture !== null && (
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
                  Add Service
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={serviceAdded}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Service has been added
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PhotographerService;
