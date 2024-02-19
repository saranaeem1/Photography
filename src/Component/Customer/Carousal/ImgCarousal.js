import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

const ImageCarousel = () => {
  const items = [
    {
      image:
        "https://www.psychologies.co.uk/wp-content/uploads/sites/3/2021/03/Jessica_Favaro_photography-1-1-scaled.jpg",
      text: "Journey Through Lens",
    },
    {
      image:
        "https://lirp.cdn-website.com/c6e9f154/dms3rep/multi/opt/Grad-640w.jpeg",
      text: "Proud Moments Captured!",
    },
    {
      image:
        "https://m.media-amazon.com/images/S/aplus-media/sc/f5816e1f-3e8e-4fb6-b16b-7b5fb6de8065.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      text: "Joy in Every Frame",
    },
  ];

  return (
    <Carousel>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
