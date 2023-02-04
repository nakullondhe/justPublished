import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import PageWrapper from "../Components/PageWrapper";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SendIcon from "@mui/icons-material/Send";
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';

const CreatePost = () => {
  return (
    <PageWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="h5">Create Post</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{ marginRight: 1 }}
            endIcon={<ScheduleSendIcon />}
          >
            Schedule
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            endIcon={<SendIcon />}
          >
            Publish
          </Button>
        </Box>
      </Box>
      <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

      {/* Form Containing caption, hashtags, Option to generate Caption and hashtags and Image Upload*/}
      <Grid container spacing={3} marginBottom={2}>
        <Grid item xs={12} md={6} lg={8}>
          <TextField
            id="outlined-multiline-static"
            label="Caption"
            multiline
            rows={4}
            fullWidth
            defaultValue="Enter your caption here or generate one using the Caption Generator"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ borderColor: "red", borderWidth: "1px", width: "100%", height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              size="large"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera fontSize="large" />
            </IconButton>
          </Box>
        </Grid>

      </Grid>
    </PageWrapper>
  );
};

export default CreatePost;
