import { Grid, Paper, Typography } from "@mui/material";
import * as React from "react";
import Charting from "../Components/Charting";
import PageWrapper from "../Components/PageWrapper";

export default function Dashboard() {
  return (
    <PageWrapper>
      <Typography variant="h5" marginBottom={2}>
        Insights
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Total Posts
            </Typography>
            <Typography variant="h5">0</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Total Likes
            </Typography>
            <Typography variant="h5">0</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
              Total Views
            </Typography>
            <Typography variant="h5">0</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Paper sx={{ width: "100%", marginTop: 3, p: 2}} variant="elevation" elevation={4}>
        <Charting />
      </Paper>
    </PageWrapper>
  );
}
