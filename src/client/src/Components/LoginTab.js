import React from "react";
import { Button, TextField, Box, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const LoginTab = () => {
  return (
    <Box >
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        sx={{ width: "100%", marginBottom: "10px" }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        name="password"
        sx={{ width: "100%", marginBottom: "10px" }}
      />
      <Button variant="contained" sx={{ width: "100%" }}>
        Login
      </Button>
      <Divider
        sx={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
      />
      <Button
        variant="outlined"
        sx={{ width: "100%" }}
        startIcon={<GoogleIcon />}
      >
        Login with Google
      </Button>
    </Box>
  );
};

export default LoginTab;
