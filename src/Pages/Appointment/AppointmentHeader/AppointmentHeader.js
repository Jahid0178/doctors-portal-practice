import { Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import Chair from "../../../images/chair.png";
import Calendar from "../../Shared/Calendar/Calendar";
import bg from "../../../images/bg.png";

const backgroundBg = {
  background: `url(${bg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const AppointmentHeader = () => {
  return (
    <Container style={backgroundBg}>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 500 }}>
            Appointment
          </Typography>
          <Calendar></Calendar>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img style={{ width: 550 }} src={Chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AppointmentHeader;
