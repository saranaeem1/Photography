import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "./ImgCarousal.css";
const Item = ({ item }) => {
  return (
    <Paper className="carousel-item">
      <img src={item.image} alt={item.text} />
      <div className="text-overlay">
        <Typography sx={{ fontSize: "2.5rem", fontFamily: "Archivo Black" }}>
          {item.text}
        </Typography>
        <Typography sx={{ fontSize: "16px", mt: "10px", mb: "10px" }}>
          Welcome to our photography website! We are passionate about capturing
          moments that tell stories, evoke emotions, and preserve memories.{" "}
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            border: "2px solid white",
            width: "150px",
            borderRadius: "20px",
          }}
        >
          Book Now
        </Button>
      </div>
    </Paper>
  );
};

export default Item;