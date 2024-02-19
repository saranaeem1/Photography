import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomDatePicker from "../../datepicker";
import HoverRating from "./Rating";
import CheckboxLabels from "./Checkboxlabel";

const photographers = [
  { id: 1, name: "Aliza Photography" },
  { id: 2, name: "Ahmed Photography" },
  { id: 3, name: "Saad Photography" },
];

const CustomerReviewsPage = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPhotographer, setSelectedPhotographer] = useState("");

  const handlePublish = () => {
    // Handle publishing the review
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    console.log("Date:", selectedDate);
    console.log("Photographer:", selectedPhotographer);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#f0f0f0", minHeight: "130vh" }}>
      <Typography
        sx={{
          fontSize: "2rem",
          textAlign: "center",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          paddingTop: "40px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        Rate & Review Your Experience
      </Typography>
      <Box
        sx={{
          width: "180px",
          backgroundColor: "black",
          height: "2px",
          margin: "10px auto",
        }}
      ></Box>
      <Box mt={2} mb={8} ml={3} mr={3}>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={10}
            md={8}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              p={3}
              boxShadow={3}
              borderRadius={2}
              sx={{
                backgroundColor: "white",
                width: "90%",
                marginTop: "30px",
              }}
            >
              <Stack spacing={2}>
                <Typography
                  variant="p"
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  Rate your Experience
                </Typography>
                <HoverRating sx={{ mt: 5 }} />
                <Typography
                  variant="p"
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  Tell us more about your Experience
                </Typography>
                <TextField
                  multiline
                  rows={3}
                  fullWidth
                  label="Comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
                <Typography
                  variant="p"
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  Select Photographer
                </Typography>
                <FormControl
                  fullWidth
                  variant="outlined"
                  sx={{ width: "100%" }}
                >
                  <InputLabel id="photographer-label">Photographer</InputLabel>
                  <Select
                    labelId="photographer-label"
                    value={selectedPhotographer}
                    onChange={(e) => setSelectedPhotographer(e.target.value)}
                  >
                    {photographers.map((photographer) => (
                      <MenuItem key={photographer.id} value={photographer.name}>
                        {photographer.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Typography
                  variant="p"
                  sx={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  Date of Experience
                </Typography>
                <CustomDatePicker
                  label="Date of experience"
                  value={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  sx={{ width: "100%" }}
                />
                <CheckboxLabels mt={2} />
                <Button
                  variant="outlined"
                  onClick={handlePublish}
                  sx={{
                    borderRadius: "20px",
                    border: "2px solid #0066ff",
                    color: "#0066ff",
                    width: "150px",
                    textAlign: "right",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  Publish
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CustomerReviewsPage;
