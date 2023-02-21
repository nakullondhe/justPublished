import React from "react";
import { Button,Box, Divider, Grid, Typography } from "@mui/material";
import PageWrapper from "../Components/PageWrapper";
import PostTile from "../Components/PostTile";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";


const Posts = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2}}>
        <Typography variant="h5" >
          Posts
        </Typography>
        <Button variant="contained" color="primary" size="medium" endIcon={<EditIcon />}
        onClick={() => navigate("/posts/create")}
        >
          Create Post
        </Button>
      </Box>
      <Divider sx={{marginTop: 2, marginBottom: 2}}/>
      <Grid container spacing={3} marginBottom={2}>
        <Grid item xs={12} md={4} lg={3}>
          <PostTile />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <PostTile/>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <PostTile />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <PostTile />
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <PostTile />
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default Posts;
