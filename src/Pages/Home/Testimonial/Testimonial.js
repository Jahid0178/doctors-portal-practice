import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import personOne from "../../../images/people-1.png";
import personTwo from "../../../images/people-2.png";
import personThree from "../../../images/people-3.png";
import clientBg from "../../../images/client-bg.png";

const backgroundImg = {
  background: `url(${clientBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top right",
};

const Testimonial = () => {
  return (
    <Container sx={{ my: 5 }} style={backgroundImg}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#14d1ca", mb: 2 }}
      >
        Testimonial
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: 500, mb: 5 }}>
        What's Our Patients <br /> Says
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ px: 3, py: 5 }}>
              <Typography sx={{ mb: 5 }}>
                It is a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less normal
                distribu to using 'Content here, content'
              </Typography>
              <Box sx={{ display: "flex", mt: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 70, mr: 2 }}
                  image={personOne}
                  alt="Paella dish"
                />
                <Box>
                  <Typography variant="h6">Winson Herry</Typography>
                  <Typography>Washington</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ px: 3, py: 5 }}>
              <Typography sx={{ mb: 5 }}>
                It is a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less normal
                distribu to using 'Content here, content'
              </Typography>
              <Box sx={{ display: "flex", mt: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 70, mr: 2 }}
                  image={personTwo}
                  alt="Paella dish"
                />
                <Box>
                  <Typography variant="h6">Jenny Lofez</Typography>
                  <Typography>Italy</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ px: 3, py: 5 }}>
              <Typography sx={{ mb: 5 }}>
                It is a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less normal
                distribu to using 'Content here, content'
              </Typography>
              <Box sx={{ display: "flex", mt: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 70, mr: 2 }}
                  image={personThree}
                  alt="Paella dish"
                />
                <Box>
                  <Typography variant="h6">Ema Watson</Typography>
                  <Typography>Canada</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
