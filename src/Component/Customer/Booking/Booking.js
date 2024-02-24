import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import UserNavbar from "../UserNavbar/UserNavbar";
import Footer from "../Footer/Footer";


const BookingForm = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sessionType: "",
    photographerName: "",
    date: "",
    location: "",
    notes: "",
    services: {
      dslrCameras: false,
      drones: false,
      filters: false,
      lightKits: false,
    },
    numberOfGuests: "",
  });
  const [openDialog, setOpenDialog] = useState(false);

  const sessionTypes = [
    { value: "sports", label: "Sports" },
    { value: "travel", label: "Travel" },
    { value: "event", label: "Event" },
    { value: "food", label: "Food" },
    { value: "architectural", label: "Architectural" },
  ];

  const photographersName = [
    { value: "sara", label: "Sara Photography" },
    { value: "saad", label: "Saad Photography" },
    { value: "hareem", label: "Hareem Photography" },
    { value: "ahmed", label: "Ahmed Photography" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        services: {
          ...prevData.services,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <UserNavbar />
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ textAlign: "center", mt: 3 }}
        >
          Book a Session
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            select
            fullWidth
            label="Session Type"
            name="sessionType"
            value={formData.sessionType}
            onChange={handleChange}
            margin="normal"
            required
          >
            {sessionTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="Select Photographer"
            name="photographerName"
            value={formData.photographerName}
            onChange={handleChange}
            margin="normal"
            required
          >
            {photographersName.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Preferred Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Typography sx={{ mt: 1 }}>Select the Services</Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.services.dslrCameras}
                onChange={handleChange}
                name="dslrCameras"
              />
            }
            label="DSLR Cameras"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.services.drones}
                onChange={handleChange}
                name="drones"
              />
            }
            label="Drones"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.services.filters}
                onChange={handleChange}
                name="filters"
              />
            }
            label="Filters"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.services.lightKits}
                onChange={handleChange}
                name="lightKits"
              />
            }
            label="Light Kits"
          />
          <TextField
            fullWidth
            label="Number of Guests"
            name="numberOfGuests"
            type="number"
            value={formData.numberOfGuests}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Additional Notes"
            name="notes"
            multiline
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
          >
            Proceed to Checkout
          </Button>
        </form>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Proceed to Payment</DialogTitle>
          <DialogContent>
            <DialogContentText>Payment Gateway</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
      <Footer />
    </>
  );
};

export default BookingForm;
