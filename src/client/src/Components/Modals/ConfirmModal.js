import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";

const ConfirmModal = ({open, onClose, onSubmit, heading}) => {
  return ( 
    <Dialog open={open} maxWidth="md">
      <DialogTitle>{heading}</DialogTitle>
      <Divider sx={{marginBottom: 2}}/>
      
      <DialogActions sx={{width: '400px'}}>
        <Button color="error" variant="contained" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onSubmit}>
          Publish
        </Button>
      </DialogActions>
    </Dialog>
   );
}
 
export default ConfirmModal;