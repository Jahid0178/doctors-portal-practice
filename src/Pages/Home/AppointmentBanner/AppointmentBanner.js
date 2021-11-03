import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import { Button, Typography } from "@mui/material";
import appointmentBg from "../../../images/appointment-bg.png";

const appointmentBanner = {
  backgroundColor: "rgba(45, 58, 74, 1)",
  marginTop: 150,
  background: `url(${appointmentBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundBlendMode: "darken",
};

const AppointmentBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }} style={appointmentBanner}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={doctor}
            alt=""
            style={{ width: 550, marginTop: "-150px" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: "#14d1ca", mb: 2 }}>
              Appointment
            </Typography>
            <Typography variant="h3" sx={{ color: "#fff" }}>
              Make an appointment Today
            </Typography>
            <Typography sx={{ color: "#fff", my: 2 }}>
              It is a long established fact that a reader will be distractedby
              the readable content of a page when looking at its
            </Typography>
            <Button
              variant="contained"
              style={{
                background:
                  "linear-gradient(to right, rgba(24, 210, 176, 0.8), rgb(15, 207, 233, 0.8))",
                width: "150px",
                height: "40px",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
