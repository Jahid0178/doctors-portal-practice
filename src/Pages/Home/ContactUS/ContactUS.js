import { Container, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React from "react";

const alignment = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const ContactUS = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Container>
        <Typography variant="h6" sx={{ textAlign: "center", mb: 1, pt: 1 }}>
          Contact US
        </Typography>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>
          Always Connect with us
        </Typography>
        <form>
          <Box style={alignment}>
            <div>
              <TextField
                sx={{ width: "100%", py: 1 }}
                id="outlined-size-small"
                placeholder="Email Address"
                size="small"
              />
              <TextField
                sx={{ width: "100%", py: 1 }}
                id="outlined-size-small"
                placeholder="Subject"
                size="small"
              />
              <TextField
                sx={{ width: "100%", py: 1 }}
                id="filled-multiline-flexible"
                placeholder="Your Message"
                multiline
              />
              <Button variant="contained">Submit</Button>
            </div>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default ContactUS;
