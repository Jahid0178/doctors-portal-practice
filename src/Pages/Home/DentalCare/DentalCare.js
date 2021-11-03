import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import treatment from "../../../images/treatment.png";

const alignment = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const DentalCare = () => {
  return (
    <Container sx={{ flexGrow: 1, my: 4, py: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6} style={alignment}>
          <img style={{ width: 380 }} src={treatment} alt="" />
        </Grid>
        <Grid item xs={6} md={6} style={alignment}>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 500, my: 3 }}>
              Exceptional Dental Care, on Your Terms
            </Typography>
            <Typography sx={{ mb: 4, color: "#c6c6c6" }}>
              Our focus is on your overall well being and helping you achieve
              optimal health and esthetics. We provide state-of-the-art dental
              care in a comfortable. Bleaching methods use carbamide peroxide
              which reacts with water to form hydrogen peroxide. The implant
              fixture is first placed, so that it is likely to osseointegrate,
              then a dental prosthetic is added
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
    </Container>
  );
};

export default DentalCare;
