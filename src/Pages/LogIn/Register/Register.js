import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import RegisterBg from "../../../images/login.png";

const Register = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        <Grid item xs={12} sm={12} md={6} sx={{ mt: 10 }}>
          <Typography variant="body1">Register Your Account</Typography>
          <form>
            <TextField
              sx={{ width: "75%", mb: 1 }}
              id="standard-basic"
              label="Your Name"
              name="name"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", mb: 1 }}
              id="standard-basic"
              label="Your Email"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", mb: 1 }}
              id="standard-basic"
              label="Your Password"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", mb: 2 }}
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
            />
            <Button variant="contained" sx={{ width: "75%", mb: 2 }}>
              Sign In
            </Button>
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button style={{ width: "75%" }}>Already have an account?</Button>
            </NavLink>
          </form>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img style={{ width: 530 }} src={RegisterBg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
