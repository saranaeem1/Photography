import React from 'react';
import ImageCarousel from '../Carousal/ImgCarousal';
import Genre from '../Genre/Genre';
import CustomerReviewsPage from '../Review/Review';
import CustomerContact from '../CustomerContact/CustomerContact';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import UserNavbar from '../UserNavbar/UserNavbar';

const HomePage = () => {
  return (
    <div>
      <UserNavbar />
      <ImageCarousel />
      <Genre />
      <AboutUs/>
      <CustomerReviewsPage />
      <CustomerContact />
      <Footer />
    </div>
  );
};
export default HomePage;
