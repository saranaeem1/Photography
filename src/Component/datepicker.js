import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"; // Correct import
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CustomDatePicker = ({ onDateSelect }) => {
  const [date, setDate] = useState(null);
  const handleDateChange = (newDate) => {
    setDate(newDate);
    onDateSelect(newDate); 
  };

  return (
    <Box sx={{mb:"15px"}}>
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

export default CustomDatePicker;
