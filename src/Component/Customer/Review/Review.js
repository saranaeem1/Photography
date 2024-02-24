import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomDatePicker from "../../datepicker";
import HoverRating from "./Rating";
import CheckboxLabels from "./Checkboxlabel";
import MuiAlert from "@mui/material/Alert";

const photographers = [
  { id: 1, name: "Aliza Photography" },
  { id: 2, name: "Ahmed Photography" },
  { id: 3, name: "Saad Photography" },
];

const CustomerReviewsPage = () => {
  const [incompleteData, setIncompleteData] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [reviewsData, setReviewData] = useState({
    rating: 0,
    comment: "",
    date: null,
    photographer: "",
  });

  const submitData = async (event) => {
    event.preventDefault();
    const { rating, comment, date, photographer } = reviewsData;
    if (!rating || !comment || !date || !photographer) {
      setIncompleteData(true);
      return;
    }
    const res = await fetch(
      "https://photography-website-26cc4-default-rtdb.firebaseio.com/UserReview.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          comment,
          date,
          photographer,
        }),
      }
    );
    if (res.ok) {
      setReviewData({
        rating: 0,
        comment: "",
        date: null,
        photographer: "",
      });
      setOpenSnackbar(true);
      setIncompleteData(false); 
    }
  };

  const postUserData = (name, value) => {
    setReviewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box id="review" sx={{ backgroundColor: "#f0f0f0", minHeight: "130vh" }}>
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
                <HoverRating
                  value={reviewsData.rating}
                  onChange={(event, newValue) =>
                    setReviewData({ ...reviewsData, rating: newValue })
                  }
                  sx={{ mt: 5 }}
                />
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
                  value={reviewsData.comment}
                  onChange={(event) =>
                    postUserData("comment", event.target.value)
                  }
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
                    value={reviewsData.photographer}
                    onChange={(event) =>
                      postUserData("photographer", event.target.value)
                    }
                    name="photographer"
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
                  selectedDate={reviewsData.date}
                  onDateSelect={(date) => postUserData("date", date)}
                  name="date"
                  sx={{ width: "100%" }}
                />
                <CheckboxLabels mt={2} />
                <Button
                  variant="outlined"
                  onClick={submitData}
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
      <Snackbar
        open={incompleteData}
        autoHideDuration={3000}
        onClose={() => setIncompleteData(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MuiAlert
          onClose={() => setIncompleteData(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please fill in all fields.
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default CustomerReviewsPage;
