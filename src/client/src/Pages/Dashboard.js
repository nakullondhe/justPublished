import { Divider, Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import Charting from "../Components/Charting";
import PageWrapper from "../Components/PageWrapper";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState(null);


  return (
    <PageWrapper>
      <Typography variant="h5">Insights</Typography>
      <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

      <Grid container spacing={3} marginBottom={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, display: "flex" }}>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Total Posts
            </Typography>
            <Typography variant="h5">0</Typography>
            <Typography
              color="success.main"
              variant="caption"
              sx={{ marginLeft: 1 }}
            >
              +0%
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, display: "flex" }}>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Total Likes
            </Typography>
            <Typography variant="h5">0</Typography>
            {/*  Indicate Increase in the numbers */}
            <Typography
              color="success.main"
              variant="caption"
              sx={{ marginLeft: 1 }}
            >
              +0%
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, display: "flex" }}>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Total Views
            </Typography>
            <Typography variant="h5">0</Typography>
            <Typography
              color="success.main"
              variant="caption"
              sx={{ marginLeft: 1 }}
            >
              +0%
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="h5">Analytics</Typography>
      <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

      <Paper sx={{ width: "100%", p: 2 }} variant="elevation" elevation={4}>
        <Charting />
      </Paper>
    </PageWrapper>
  );
}
