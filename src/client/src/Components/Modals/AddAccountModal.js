import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const AddAccountModal = ({ open, onClose, onSubmit }) => {
  return (
    <Dialog open={open} minWidth="md">
      <DialogTitle sx={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
        <Typography>
        Login with Facebook
        </Typography>
        <IconButton onClick={onClose} >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <br/>
      <DialogContent sx={{minWidth: '300px'}}>
        <Button fullWidth onClick={onSubmit} color="primary" variant="contained">
          Login with Facebook
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddAccountModal;
