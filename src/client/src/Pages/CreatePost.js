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
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SendIcon from "@mui/icons-material/Send";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import GPTWrapper from "../Components/GPTWrapper";  
import {ScheduleModal, ConfirmModal} from "../Components/Modals";

const CreatePost = () => {
  const [image, setImage] = React.useState(null);
  const [open, setOpen] = React.useState({
    schedule: false,
    publish: false,
  });

  const handleClose = (name) => {
    console.log(name);
    setOpen({ ...open, [name]: false });
  };
  const handleUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImage(file);
    };
    reader.readAsDataURL(file);
  };

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
            onClick={() => setOpen({ ...open, schedule: true })}
          >
            Schedule
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            endIcon={<SendIcon />}
            onClick={() => setOpen({ ...open, publish: true })}
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
          <GPTWrapper />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Box
            sx={{
              borderColor: "grey.500",
              borderWidth: "1px",
              width: "100%",
              minHeight: "400px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderStyle: "dashed",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            {image && (
              <>
                <img
                  src={URL.createObjectURL(image)}
                  alt="preview"
                  style={{ width: "100%", height: "100%" }}
                />

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "right",
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    sx={{ marginTop: 2 }}
                    onClick={() => setImage(null)}
                  >
                    Change
                  </Button>
                </Box>
              </>
            )}
            {!image && (
              <>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  size="large"
                >
                  <input
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleUpload}
                  />
                  <AddPhotoAlternateIcon fontSize="large" />
                </IconButton>
                <Typography variant="h6">Upload Image</Typography>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
      <ScheduleModal open={open.schedule} onClose={() => setOpen({ ...open, schedule : false })} />
      <ConfirmModal open={open.publish} onClose={() => setOpen({ ...open, publish : false })} heading="Confirm Publish?" />
    </PageWrapper>
  );
};

export default CreatePost;
