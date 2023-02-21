import React from "react";
import {
  Button,
  TextField,
  Box,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { createUser } from "../Helpers/firebase";
import Slide from "@mui/material/Slide";
import { registerUsingEmail } from "../Helpers/AuthHelper";

const vertical = "top";
const horizontal = "center";

const RegisterTab = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
  });
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleRegister = async () => {
    if (user.password !== user.confirm_password) {
      alert("Passwords do not match");
      return;
    }
    
    registerUsingEmail(user).then((res) => {
      if (res.success) {
        setOpen(true);
        setMessage("User created successfully! Please login to continue");
      } 
      
    })
    // await createUser(user.email, user.password)
    //   .then((userCredential) => {
    //     if (userCredential) {
    //       setOpen(true);
    //       setMessage("User created successfully! Please login to continue");
    //     }
    //   })
    //   .catch((error) => {
    //     setOpen(true);
    //     const errorMessage = error.code;
    //     setMessage(errorMessage);
    //   });
  };
  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        sx={{ width: "100%", marginBottom: "10px" }}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        name="password"
        sx={{ width: "100%", marginBottom: "10px" }}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <TextField
        id="outlined-basic"
        label="Confirm Password"
        variant="outlined"
        name="confirm_password"
        sx={{ width: "100%", marginBottom: "10px" }}
        onChange={(e) => setUser({ ...user, confirm_password: e.target.value })}
      />
      <Button
        variant="contained"
        sx={{ width: "100%" }}
        onClick={handleRegister}
      >
        Register
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
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={() => setOpen(false)}
        key={vertical + horizontal}
        TransitionComponent={Slide}
        color="success"
      >
        <Alert
          severity={
            message === "User created successfully! Please login to continue"
              ? "success"
              : "error"
          }
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RegisterTab;
