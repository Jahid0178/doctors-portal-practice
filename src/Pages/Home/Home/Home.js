import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import ContactUS from "../ContactUS/ContactUS";
import DentalCare from "../DentalCare/DentalCare";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Services></Services>
      <DentalCare></DentalCare>
      <AppointmentBanner></AppointmentBanner>
      <Testimonial></Testimonial>
      <ContactUS></ContactUS>
      <Footer></Footer>
    </div>
  );
};

export default Home;
