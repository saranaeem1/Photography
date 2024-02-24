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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../Navbar/Navbar";


const DataTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((row) =>
    row.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Box sx={{ margin: "20px" }}>
        <Typography variant="h4" sx={{ mt: "15px", mb: "15px" }}>
          Users Data
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
                  <TableCell sx={UsertableCellStyle}>Age</TableCell>
                  <TableCell sx={UsertableCellStyle}>Status</TableCell>
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
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.age}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          backgroundColor:
                            row.status === "active" ? "lightgreen" : "#ff7f7f",
                          color:
                            row.status === "active"
                              ? "green"
                              : row.status === "passive"
                              ? "darkred"
                              : "inherit",
                          padding: 1,
                          borderRadius: 4,
                          display: "inline-block",
                        }}
                      >
                        {row.status}
                      </Box>
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
export default DataTable;
