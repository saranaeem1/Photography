import React, { useState } from "react";
import {
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../Navbar/Navbar";


const PhotographerTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddPhotographer = (photographer) => {
    // Add logic to add photographer
    console.log("Adding photographer:", photographer);
  };

  const handleDeletePhotographer = (photographer) => {
    // Add logic to delete photographer
    console.log("Deleting photographer:", photographer);
  };

  const handleSendEmail = (photographer) => {
    // Add logic to send email
    console.log("Sending email to photographer:", photographer);
  };

  return (
      <>
          <Navbar/>
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h4" sx={{ mt: "15px", mb: "15px" }}>
          Photographer Data
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <SearchIcon sx={{ color: "#ddd", mr: "10px" }} />
                ),
              }}
              sx={{ marginBottom: 2, width: "40%" }}
            />
            <Table
              sx={{
                minWidth: "80%",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={UsertableCellStyle}>ID</TableCell>
                  <TableCell sx={UsertableCellStyle}>Name</TableCell>
                  <TableCell sx={UsertableCellStyle}>Email</TableCell>
                  <TableCell sx={UsertableCellStyle}>CNIC</TableCell>
                  <TableCell sx={UsertableCellStyle}>Phone</TableCell>
                  <TableCell sx={UsertableCellStyle}>Bill</TableCell>
                  <TableCell sx={UsertableCellStyle}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredData.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:nth-of-type(odd)": { backgroundColor: "action.hover" },
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.cnic}</TableCell>
                    <TableCell>{row.phone}</TableCell>
                    <TableCell>
                      <img src={row.billPic} alt="Bill" style={{ width: 50 }} />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleAddPhotographer(row)}
                        aria-label="Add Photographer"
                        color="primary"
                      >
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDeletePhotographer(row)}
                        aria-label="Delete Photographer"
                        color="secondary"
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => handleSendEmail(row)}
                        aria-label="Send Email"
                        color="primary"
                      >
                        <EmailIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
const UsertableCellStyle = {
  fontWeight: "bold",
  backgroundColor: "lightblue",
  color: "primary.contrastText",
  fontSize: "18px",
};
export default PhotographerTable;
