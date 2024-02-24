import React from "react";
import { Box, Button, Typography } from "@mui/material";
import "./Portfolio.css"; 
import PortfolioGallery from "./PortfolioGallery";
import TestimonialsCarousel from "../Testimonials/Testimonial";
import UserNavbar from "../UserNavbar/UserNavbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <UserNavbar />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ margin: "50px auto", width: "60%" }}>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            <span className="gradient-text">Ahmed Photography</span>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              margin: "15px",
              fontFamily: "Great Vibes",
            }}
          >
            A Team of Professional Photographers
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              margin: "20px",
            }}
          >
            Our team of professional photographers is dedicated to capturing the
            essence of every moment, turning your memories into timeless art,
            with every shot.
          </Typography>
          <Link to="/photographer-services">
            <Button
              variant="contained"
              className="btn-grad"
              sx={{
                margin: "12px auto",
                borderRadius: "20px",
                display: "block",
              }}
            >
              Available for Hire
            </Button>
          </Link>
        </Box>
        <Box sx={{ width: "90%", margin: "10px auto" }}>
          <PortfolioGallery />
        </Box>
        <Box sx={{ width: "90%", margin: "10px auto" }}>
          <TestimonialsCarousel />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Portfolio;
