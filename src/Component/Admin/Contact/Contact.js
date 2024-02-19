import React, { useState } from "react";
import {
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Box,
  Paper, // Add Paper component for TableContainer
} from "@mui/material";
import CustomDatePicker from "../../datepicker";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const QueriesTable = ({ data }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [filteredData, setFilteredData] = useState(data);

  const handleDateSelect = (selectedDate) => {
    // Ensure selectedDate is a Date object
    if (!(selectedDate instanceof Date)) {
      selectedDate = new Date(selectedDate);
    }

    const filteredQueries = data.filter((query) => {
      // Convert query.time to a Date object
      const queryDate = new Date(query.time);
      // Check if the date parts are equal
      return (
        queryDate.getFullYear() === selectedDate.getFullYear() &&
        queryDate.getMonth() === selectedDate.getMonth() &&
        queryDate.getDate() === selectedDate.getDate()
      );
    });
    setFilteredData(filteredQueries);
  };

  const tableCellStyle = {
    fontWeight: "bold",
    backgroundColor: "lightblue",
    color: "primary.contrastText",
    fontSize: isSmallScreen ? "15px" : "18px",
  };

  const tableStyle = {
    minWidth: "80%",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  return (
    <Box sx={{ margin: "15px" }}>
      <Typography variant="h4" sx={{ marginTop: "20px", mb: "20px" }}>
        Customer Queries
      </Typography>
      <CustomDatePicker onDateSelect={handleDateSelect} />
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {/* Wrap the Table in TableContainer and Paper */}
          <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
            <Table sx={tableStyle}>
              <TableHead>
                <TableRow>
                  <TableCell sx={tableCellStyle}>ID</TableCell>
                  <TableCell sx={tableCellStyle}>Username</TableCell>
                  <TableCell sx={tableCellStyle}>Email</TableCell>
                  <TableCell sx={tableCellStyle}>Message</TableCell>
                  <TableCell sx={tableCellStyle}>Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((query) => (
                  <TableRow key={query.id}>
                    <TableCell>{query.id}</TableCell>
                    <TableCell>{query.username}</TableCell>
                    <TableCell>{query.email}</TableCell>
                    <TableCell>{query.message}</TableCell>
                    <TableCell>{query.time}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default QueriesTable;
