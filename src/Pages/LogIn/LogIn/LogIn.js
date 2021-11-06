import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import loginBg from "../../../images/login.png";

const LogIn = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ textAlign: "center" }}>
        <Grid item xs={12} sm={12} md={6} sx={{ mt: 8 }}>
          <Typography variant="body1">Login Your Account</Typography>
          <form>
            <TextField
              sx={{ width: "75%", mb: 1 }}
              id="standard-basic"
              label="Your Email"
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", mb: 2 }}
              id="standard-basic"
              label="Your Password"
              variant="standard"
            />
            <Button variant="contained" sx={{ width: "75%", mb: 2 }}>
              Sign In
            </Button>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <Button sx={{ width: "75%" }}>New User? Please Register</Button>
            </NavLink>
          </form>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img style={{ width: 530 }} src={loginBg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LogIn;
