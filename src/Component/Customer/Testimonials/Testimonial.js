import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import "./Testimonial.css";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Ronne Galle",
      img: "https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
    },
    {
      name: "Missy Limana",
      img: "https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
    },
    {
      name: "Martha Brown",
      img: "https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
    },
    {
      name: "Hanna Lisem",
      img: "https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const testimonialWidth = `${100 / settings.slidesToShow}%`;

  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ textAlign: "center", margin: "50px"}}>
          User Testimonials
        </Typography>
        <Box sx={{  margin: "10px auto", height:"50vh" }}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                sx={{
                  width: testimonialWidth,
                  borderRadius: "15px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    marginRight: "20px",
                }}
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    margin: "20px auto",
                    objectFit: "cover",
                  }}
                />
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  {testimonial.name}
                </Typography>
                <Typography sx={{ padding: "10px 15px" }}>
                  {testimonial.text}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default TestimonialsCarousel;
