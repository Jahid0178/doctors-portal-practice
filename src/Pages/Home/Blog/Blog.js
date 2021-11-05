import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import personOne from "../../../images/people-1.png";
import personTwo from "../../../images/people-2.png";
import personThree from "../../../images/people-3.png";

const Blog = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, textAlign: "center", color: "#14d1ca", mb: 2 }}
      >
        Our Blog
      </Typography>
      <Typography
        variant="h4"
        sx={{ fontWeight: 500, textAlign: "center", mb: 6 }}
      >
        From Our Blog News
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Paper sx={{ py: 5, px: 3 }}>
              <Box sx={{ display: "flex", mr: 2 }}>
                <img style={{ width: 50 }} src={personOne} alt="" />
                <Box sx={{ ml: 1 }}>
                  <Typography variant="h6">Dr. Caudi</Typography>
                  <Typography>23 April 2019</Typography>
                </Box>
              </Box>
              <Typography sx={{ fontWeight: "bold", my: 1 }}>
                2 times of brush in a day keep your health
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                enim quas eius perspiciatis eligendi adipisci, dignissimos
                eveniet. Eveniet, harum officiis.
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Paper sx={{ py: 5, px: 3 }}>
              <Box sx={{ display: "flex", mr: 2 }}>
                <img style={{ width: 50 }} src={personTwo} alt="" />
                <Box sx={{ ml: 1 }}>
                  <Typography variant="h6">Dr. Caudi</Typography>
                  <Typography>23 April 2019</Typography>
                </Box>
              </Box>
              <Typography sx={{ fontWeight: "bold", my: 1 }}>
                The tooth cancer is taking a challenge
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                enim quas eius perspiciatis eligendi adipisci, dignissimos
                eveniet. Eveniet, harum officiis.
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <Paper sx={{ py: 5, px: 3 }}>
              <Box sx={{ display: "flex", mr: 2 }}>
                <img style={{ width: 50 }} src={personThree} alt="" />
                <Box sx={{ ml: 1 }}>
                  <Typography variant="h6">Dr. Caudi</Typography>
                  <Typography>23 April 2019</Typography>
                </Box>
              </Box>
              <Typography sx={{ fontWeight: "bold", my: 1 }}>
                The tooth cancer is taking a challenge
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                enim quas eius perspiciatis eligendi adipisci, dignissimos
                eveniet. Eveniet, harum officiis.
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blog;
