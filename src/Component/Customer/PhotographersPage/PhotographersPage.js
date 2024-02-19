import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Grow } from "@mui/material";

const photographers = [
  {
    name: "Ahmed Photography",
    image:
      "https://www.shutterstock.com/image-photo/young-woman-traveler-taking-beautiful-260nw-2271242359.jpg",
    description:
      "Capture the beauty of the world through the lens of Ahmed Photography.",
  },
  {
    name: "Hareem Photography",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1w5Tvkp7pT1Y2zhJ2mLRNcf_UW_jPhNuoYA&usqp=CAU",
    description: "Experience the thrill of sports with Hareem Photography.",
  },
  {
    name: "Saad Photography",
    image:
      "https://www.weddingplz.com/blog/wp-content/uploads/bridal-photography-weddingplz-10.jpg",
    description: "Create unforgettable memories with Saad Photography.",
  },
  {
    name: "Sara Photography",
    image:
      "https://www.adobe.com/au/creativecloud/photography/hub/guides/media_1ddb173a8297cb5ae1812c23e5bf7cc890c544202.jpeg?width=1200&format=pjpg&optimize=medium",
    description:
      "Discover the artistry of architectural wonders with Sara Photography.",
  },
];


const PhotographerPage = () => {
  return (
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
              <CardActionArea>
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
                  <Button
                    variant="contained"
                    sx={{ marginTop: "12px", borderRadius: "20px" }}
                  >
                    Explore
                  </Button>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grow>
        ))}
      </Box>
    </Box>
  );
};
export default PhotographerPage;
