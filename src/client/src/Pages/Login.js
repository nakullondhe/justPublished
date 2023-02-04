import React from "react";
import { Container, Paper, Tab, Tabs,Typography } from "@mui/material";
import LoginTab from "../Components/LoginTab";
import RegisterTab from "../Components/RegisterTab";


const Login = () => {
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

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
            Login
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

export default Login;
