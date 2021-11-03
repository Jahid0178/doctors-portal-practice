import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

const Service = ({ service }) => {
  const { img, name, description } = service;
  return (
    <>
      <Grid item xs={2} sm={4} md={4}>
        <Card
          sx={{
            minWidth: 275,
            mt: "3rem",
            textAlign: "center",
            boxShadow: 0,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "auto", height: 80, margin: "0 auto" }}
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Service;
