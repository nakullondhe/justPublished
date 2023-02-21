import * as React from "react";
import Box from "@mui/material/Box";
import Nav from "../Components/Nav";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import SideBar from "../Components/SideBar";

function PageWrapper({ children }) {  
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Nav />
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default PageWrapper;
