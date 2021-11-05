import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";

const bannerBg = {
  background: `url(${bg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const verticalAlign = {
  display: "flex",
  alignItems: "center",
  height: "80vh",
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={verticalAlign}>
          <Box>
            <Typography variant="h3" sx={{ mb: 2 }}>
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography sx={{ my: 2 }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              enim quas eius perspiciatis eligendi adipisci, dignissimos
              eveniet. Eveniet, harum officiis.
            </Typography>
            <Button
              variant="contained"
              sx={{
                height: "45px",
                mt: 2,
                background:
                  "linear-gradient(to right, rgba(24, 210, 176, 1), rgb(15, 207, 233, 1))",
              }}
            >
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalAlign}>
          <img style={{ width: 550 }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
