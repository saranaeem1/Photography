import { Typography } from "@mui/material";
import "./Services.css";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, Grow } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Footer from "../Footer/Footer";
import UserNavbar from "../UserNavbar/UserNavbar";
import { Link } from "react-router-dom";

const photographyServices = [
  {
    name: "DSLR Cameras",
    image:
      "https://i.pinimg.com/originals/e7/5d/db/e75ddbda351d44e24b6b8099fa200aad.jpg",
    price: "$20",
    description:
      "Our DSLR cameras are equipped with advanced features and settings to help you achieve stunning results.",
  },
  {
    name: "Drones",
    image:
      "https://media.istockphoto.com/id/492683865/photo/drone-white-cloudy-dusk-sky.jpg?s=612x612&w=0&k=20&c=kzzV_fu9onBArhMKbE4sxRe4K22fpWK-bd1-PMiJ608=",
    price: "$15",
    description:
      "Our drones are equipped with high-resolution cameras to capture breathtaking aerial photos and videos.",
  },
  {
    name: "Light Kit",
    image:
      "https://img.fixthephoto.com/blog/UserFiles/Image/111/Image/Studio%20Lighting%20Kit_640%D1%85640.jpg",
    price: "$8",
    description:
      "Our light kits are perfect for providing soft, diffused lighting that enhances features and reduces harsh shadows.",
  },
  {
    name: "Filters",
    image:
      "https://www.adorama.com/alc/wp-content/uploads/2018/05/shutterstock_779867686.jpg",
    price: "$10",
    description:
      "Our filters are designed to enhance your photos and videos, adding creative effects and improving image quality.",
  },
];
const Services = () => {
    return (
      <>
        <UserNavbar />
        <Typography
          className="gradient-text"
          variant="h3"
          sx={{ textAlign: "center", margin: "50px 20px 15px 20px" }}
        >
          Services
        </Typography>
        <Typography sx={{ textAlign: "center", margin: "5px 10px 10px 10px" }}>
          Photography services encompass a wide range of offerings, catering to
          various needs and preferences.
        </Typography>
        <Link to="/booking">
          <Button
            variant="contained"
            className="btn-grad"
            sx={{
              margin: "12px auto",
              borderRadius: "20px",
              display: "block",
            }}
          >
            Book Now
          </Button>
        </Link>
        <Box
          sx={{
            margin: "5%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {photographyServices.map((photographyServices, index) => (
            <Grow in={true} timeout={index * 500}>
              <Card sx={{ maxWidth: 300, margin: "15px" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={photographyServices.image}
                  alt={photographyServices.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {photographyServices.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    <strong>{photographyServices.price}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {photographyServices.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          ))}
        </Box>
        <Typography
          className="gradient-text"
          variant="h3"
          sx={{ textAlign: "center", margin: "30px 20px" }}
        >
          Contact Details
        </Typography>
        <Box
          sx={{
            width: "70%",
            margin: "30px auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ padding: "10px" }}>
            <CallIcon sx={{ paddingRight: "10px" }} />
            Phone No: <br /> 0322-5923164
          </Typography>
          <Typography sx={{ padding: "10px" }}>
            <EmailIcon sx={{ paddingRight: "10px" }} />
            Email: <br />
            Contact@info.com
          </Typography>
          <Typography sx={{ padding: "10px" }}>
            <LocationOnIcon sx={{ paddingRight: "10px"}} />
            Location: <br />
            Carmelita Ave, Beverly Hills, CA 90210, USA
          </Typography>
        </Box>
        <Footer />
      </>
    );
}
export default Services;