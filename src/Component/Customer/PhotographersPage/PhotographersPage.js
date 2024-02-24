import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Grow } from "@mui/material";
import { Link } from "react-router-dom";
import UserNavbar from "../UserNavbar/UserNavbar";
import Footer from "../Footer/Footer";

const photographers = [
  {
    name: "Ahmed Photography",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=630,fit=crop,f=jpeg/mxBBwjRJnrsQzMNq/Arafa-logo-black-png-A3QQGa5RzVSo8Vl1.png",
    description:
      "Capture the beauty of the world through the lens of Ahmed Photography.",
  },
  {
    name: "Natalie Photography",
    image:
      "https://images.squarespace-cdn.com/content/v1/6411423bb10b9564eca83881/eaf4177c-a6b3-493d-884d-353c87eeab24/logo.2023-500x500.jpg",
    description: "Experience the thrill of sports with Hareem Photography.",
  },
  {
    name: "Sara Photography",
    image:
      "https://images.squarespace-cdn.com/content/v1/5f14c8b55e2c117be49eecda/1595198299589-VIO85GJTAJE7POHXTA2O/Crop+Sara+Patterson+Photography+Logo.png",
    description:
      "Discover the artistry of architectural wonders with Sara Photography.",
  },
];


const PhotographerPage = () => {
  return (
    <>
      <UserNavbar/>
      <Box>
        <Typography
          sx={{
            fontSize: "2rem",
            textAlign: "center",
            fontFamily: "sans-serif",
            paddingTop: "40px",
            fontWeight: "bold",
            margin: "0 15px",
          }}
        >
          Photographers Available
        </Typography>
        <Box
          sx={{
            margin: "5%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {photographers.map((photographers, index) => (
            <Grow in={true} timeout={index * 500}>
              <Card sx={{ maxWidth: 300, margin: "15px" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={photographers.image}
                  alt={photographers.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {photographers.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {photographers.description}
                  </Typography>
                  <Link to="/photographer-portfolio">
                    <Button
                      variant="contained"
                      sx={{ marginTop: "12px", borderRadius: "20px" }}
                    >
                      Explore
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grow>
          ))}
        </Box>
      </Box>
      <Footer/>
    </>
  );
};
export default PhotographerPage;
