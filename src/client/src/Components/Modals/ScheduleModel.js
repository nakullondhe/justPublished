import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const ScheduleModal = ({open, onClose, onSubmit }) => {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));
  return (
    <Dialog open={open} maxWidth="md">
      <DialogTitle>Schedule</DialogTitle>
      <Divider />
      <DialogContent sx={{ width: "400px" }}>
        <DialogContentText sx={{ marginBottom: 2 }}>
          Select Date and Time to schedule your post
        </DialogContentText>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
      </DialogContent>
      <DialogActions>
        <Button color="error" variant="contained" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="contained" onClick={onSubmit}>
          Schedule
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ScheduleModal;
