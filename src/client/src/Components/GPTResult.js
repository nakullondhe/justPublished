import React from "react";
import {
  IconButton,
  styled,
  Tooltip,
  Typography,
  Box,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(3),
  elevation: 10,
}));

const GPTResult = ({caption, hashtags}) => {
  return (
    <>
    
    <Typography variant="h6">Results</Typography>
      <Divider sx={{ marginBottom: 2, marginTop: 1 }} />
    <Stack spacing={3}>
      <Item>
        <Typography variant="body1">
          {caption}
          <br />
          <br /> 
          {hashtags}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "right" }}>
          <Tooltip title="Copy">
            <IconButton variant="text" color="primary" size="small">
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Item>
    </Stack>
    </>
  );
};

export default GPTResult;
