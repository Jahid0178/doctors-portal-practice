import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import ContactUS from "../ContactUS/ContactUS";
import DentalCare from "../DentalCare/DentalCare";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <DentalCare></DentalCare>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <ContactUS></ContactUS>
      <Footer></Footer>
    </div>
  );
};

export default Home;
