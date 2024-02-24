import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Grow } from "@mui/material";
import { Link } from "react-router-dom";

const genres = [
  {
    name: "Travel",
    image:
      "https://www.shutterstock.com/image-photo/young-woman-traveler-taking-beautiful-260nw-2271242359.jpg",
    description: "Explore the world and discover new cultures through travel.",
  },
  {
    name: "Sports",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1w5Tvkp7pT1Y2zhJ2mLRNcf_UW_jPhNuoYA&usqp=CAU",
    description: "Stay active and healthy with a variety of sports activities.",
  },
  {
    name: "Events",
    image:
      "https://www.weddingplz.com/blog/wp-content/uploads/bridal-photography-weddingplz-10.jpg",
    description: "Attend exciting events and make unforgettable memories.",
  },
  {
    name: "Architectural",
    image:
      "https://www.adobe.com/au/creativecloud/photography/hub/guides/media_1ddb173a8297cb5ae1812c23e5bf7cc890c544202.jpeg?width=1200&format=pjpg&optimize=medium",
    description: "Admire the beauty and design of architectural wonders.",
  },
  {
    name: "Food",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl56B5Hi4HIMtTnZ8yAdOckddW9f1XWjjubDpw5nJiiykMI8IttC8fgWNufFP2BIo-Tac&usqp=CAU",
    description: "Savor delicious cuisines from around the world.",
  },
  {
    name: "Fine Arts",
    image:
      "https://www.ppa.com/assets/images/ppmag_articles/201712-header_detritus.jpg",
    description: "Immerse yourself in the world of arts and creativity.",
  },
];

const Genre = () => {
  return (
    <Box id="genre">
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
        Explore Diverse Genres
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
        {genres.map((genre, index) => (
          <Grow in={true} timeout={index * 500}>
            <Card sx={{ maxWidth: 300, margin: "15px" }}>
              <CardMedia
                component="img"
                height="180"
                image={genre.image}
                alt={genre.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {genre.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {genre.description}
                </Typography>
                <Link to="/photographer-page">
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
  );
};
export default Genre;
