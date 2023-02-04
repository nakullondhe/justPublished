import React from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const PostTile = ({ height, width }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
      {}
      <img
        src={`https://picsum.photos/${height || 300}/${width || 300}`}
        alt="Test"
      />
      <Typography variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Box>
          <Typography variant="p">10 Likes</Typography>{" "}
          <Typography variant="p">10 Views</Typography>
        </Box>
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon fontSize="small" />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
          <MenuItem onClick={handleClose}>Insights</MenuItem>
        </Menu>
      </Box>
    </Paper>
  );
};

export default PostTile;
