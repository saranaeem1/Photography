import React, { useState, useEffect } from "react";
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
  Paper,
} from "@mui/material";
import CustomDatePicker from "../../datepicker";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Navbar from "../Navbar/Navbar";

const tableStyle = {
  minWidth: "80%",
  border: "1px solid #ddd",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const QueriesTable = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data from Firebase Realtime Database
    fetch(
      "https://photography-website-26cc4-default-rtdb.firebaseio.com/UserContact.json"
    )
      .then((response) => response.json())
      .then((data) => {
        // Convert data object to array of objects
        const dataArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        console.log("Fetched data:", dataArray);
        setData(dataArray);
        setFilteredData(dataArray); // Set filteredData to the same array
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDateSelect = (selectedDate) => {
    // Ensure selectedDate is a Date object
    if (!(selectedDate instanceof Date)) {
      selectedDate = new Date(selectedDate);
    }

    console.log("Selected date:", selectedDate);

    const filteredQueries = data.filter((query) => {
      // Convert query.date to a Date object
      const queryDate = new Date(query.date);
      console.log("Query date:", queryDate);
      // Check if the dates are equal
      return (
        queryDate.getFullYear() === selectedDate.getFullYear() &&
        queryDate.getMonth() === selectedDate.getMonth() &&
        queryDate.getDate() === selectedDate.getDate()
      );
    });

    console.log("Filtered data:", filteredQueries);

    setFilteredData(filteredQueries); // Update filteredData state
  };

  const tableCellStyle = {
    fontWeight: "bold",
    backgroundColor: "lightblue",
    color: "primary.contrastText",
    fontSize: isSmallScreen ? "15px" : "18px",
  };

  return (
    <>
      <Navbar />
      <Box sx={{ margin: "15px" }}>
        <Typography variant="h4" sx={{ marginTop: "20px", mb: "20px" }}>
          Customer Queries
        </Typography>
        <CustomDatePicker onDateSelect={handleDateSelect} />
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
              <Table sx={tableStyle}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={tableCellStyle}>ID</TableCell>
                    <TableCell sx={tableCellStyle}>Username</TableCell>
                    <TableCell sx={tableCellStyle}>Email</TableCell>
                    <TableCell sx={tableCellStyle}>Message</TableCell>
                    <TableCell sx={tableCellStyle}>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.map((query) => (
                    <TableRow key={query.id}>
                      <TableCell>{query.id}</TableCell>
                      <TableCell>{query.name}</TableCell>
                      <TableCell>{query.email}</TableCell>
                      <TableCell>{query.message}</TableCell>
                      <TableCell>
                        {new Date(query.date).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default QueriesTable;
