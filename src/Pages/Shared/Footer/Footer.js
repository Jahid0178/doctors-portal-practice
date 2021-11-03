import { Button, Container, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./Footer.css";
import footerBg from "../../../images/footer-bg.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

const footerBanner = {
  background: `url(${footerBg})`,
  backgroundSize: "cover",
};

const Footer = () => {
  return (
    <Container style={footerBanner}>
      <Box sx={{ flexGrow: 1, mt: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <ul>
              <li>
                <Link className="footer-link" to="#">
                  Emergency Dental Care
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Check Up
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Treatment of Personal Diseases
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Tooth Extraction
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Check Up
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#14d1ca" }}
              >
                Services
              </Typography>
              <ul>
                <li>
                  <Link className="footer-link" to="#">
                    Emergency Dental Care
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="#">
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="#">
                    Specialist
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="#">
                    Neurology
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="#">
                    Oncology
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="#">
                    Appointments
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#14d1ca" }}
              >
                Oral Health
              </Typography>
              <ul>
                <li>
                  <Link className="footer-link" to="#">
                    Emergency Dental Care
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="#">
                    Check Up
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="#">
                    Treatment of Personal Diseases
                  </Link>
                </li>
                <li>
                  <Link className="footer-link" to="#">
                    Tooth Extraction
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "#14d1ca" }}
              >
                Our Address
              </Typography>
              <Typography sx={{ color: "#808080" }}>
                New York - 101010 Hudson Yards
              </Typography>
              <Typography>
                <Link to="#">
                  <FacebookRoundedIcon
                    sx={{ color: "#3b5998", mr: 1, fontSize: "30px" }}
                  ></FacebookRoundedIcon>
                </Link>
                <Link to="#">
                  <GoogleIcon
                    sx={{ color: "#4285F4", mr: 1, fontSize: "30px" }}
                  ></GoogleIcon>
                </Link>
                <Link to="#">
                  <TwitterIcon
                    sx={{ color: "#1DA1F2", fontSize: "30px" }}
                  ></TwitterIcon>
                </Link>
              </Typography>
              <Typography sx={{ mb: 1, color: "#808080" }}>Call Now</Typography>
              <Button
                variant="contained"
                style={{
                  background:
                    "linear-gradient(to right, rgba(24, 210, 176, 0.8), rgb(15, 207, 233, 0.8))",
                  width: "150px",
                  height: "40px",
                }}
              >
                +202550295
              </Button>
            </Box>
          </Grid>
          <Typography sx={{ p: 2, margin: "auto", color: "#808080" }}>
            Copyright 2021 All Rights Reserved
          </Typography>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
