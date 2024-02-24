import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CustomDatePicker = ({ onDateSelect }) => {
  const [date, setDate] = useState(null);
  const handleDateChange = (newDate) => {
    setDate(newDate);
    if (typeof onDateSelect === "function") {
      try {
        onDateSelect(newDate);
      } catch (error) {
        console.error("Error in onDateSelect:", error);
      }
    } else {
      console.warn("onDateSelect is not a function");
    }
  };

  return (
    <Box sx={{ mb: "15px" }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Select Date"
          value={date}
          onChange={handleDateChange}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider>
    </Box>
  );
};

CustomDatePicker.propTypes = {
  onDateSelect: PropTypes.func.isRequired,
};

export default CustomDatePicker;
