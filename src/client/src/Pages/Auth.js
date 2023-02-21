import React, { useEffect } from "react";
import { Container, Paper, Tab, Tabs,Typography } from "@mui/material";
import LoginTab from "../Components/LoginTab";
import RegisterTab from "../Components/RegisterTab";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { token } from "../Helpers/AxiosHelper";


const Auth = () => {
  const [tab, setTab] = React.useState(0);
  const navigate = useNavigate()

  
  const handleChange = (event, newValue) => setTab(newValue);

  useEffect(() => {
    const jwt = localStorage.getItem("jptoken");
    console.log({jwt});
    if (jwt) return navigate("/dashboard");
  }, []);

  return (
    <>
      {/* Create a login page using MUI */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "400px",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Typography variant="h4" component="h4" gutterBottom>
            {tab === 0 ? "Login" : "Register"}
          </Typography>
          <Tabs
            variant="fullWidth"
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            centered
            onChange={handleChange}
            sx={{ width: "100%", marginBottom: "20px" }}  
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          {tab === 0 && <LoginTab/>}
          {tab === 1 && <RegisterTab/>}
        </Paper>
      </Container>
    </>
  );
};

export default Auth;
