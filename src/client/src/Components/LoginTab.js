import React from "react";
import { Button, TextField, Box, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import {signIn, googleSignIn} from "../Helpers/firebase";
import { useNavigate } from 'react-router-dom'
import { loginWithEmail } from "../Helpers/AuthHelper";

const LoginTab = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [token, setToken] = React.useState("");

  const handleLogin = () => {
    loginWithEmail(user).then((res) => {
      if (res.success && res.token) {
        localStorage.setItem("jptoken", res.token);
        navigate('/dashboard');
      }
    });
  }
  // const handleLogin = async () => {
  //   signIn(user.email, user.password)
  //   .then((userCredential) => {
  //     // Signed in
  //     console.log({user: userCredential.getIdToken()})
  //     sessionStorage.setItem("Auth Token", userCredential._tokenResponse.refreshToken);
  //     navigate('/dashboard');
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log({error});
  //   });
  // };

  const handleGoogleLogin = async () => {
    googleSignIn()
    .then((userCredential) => {
      // Signed in
      sessionStorage.setItem("token", userCredential._tokenResponse.idToken);
      navigate('/dashboard');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log({ errorCode, errorMessage });
    });
  };

  return (
    <Box >
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
      <Button variant="contained" sx={{ width: "100%" }} onClick={handleLogin}>
        Login
      </Button>
      <Divider
        sx={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
      />
      <Button
        variant="outlined"
        sx={{ width: "100%" }}
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
      >
        Login with Google
      </Button>
    </Box>
  );
};

export default LoginTab;
