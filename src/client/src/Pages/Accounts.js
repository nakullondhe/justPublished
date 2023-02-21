import {
  Box,
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import PageWrapper from "../Components/PageWrapper";
import DeleteIcon from "@mui/icons-material/Delete";
import {AddAccountModal, ConfirmModal} from "../Components/Modals";

const Accounts = () => {
  const [addAccount, setAddAccount] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

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
        <Typography variant="h5">Connected Accounts</Typography>
        <Button variant="contained" color="primary" size="medium" onClick={() => setAddAccount(true)}>
          Add Account
        </Button>
      </Box>
      <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

      <Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow >
                <TableCell>Account Name</TableCell>
                <TableCell align="right">Account Type</TableCell>
                <TableCell align="right">Date Connected</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Nakul Londhe</TableCell>
                <TableCell align="right">Facebook</TableCell>
                <TableCell align="right">12 Dec 2022</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    startIcon={<DeleteIcon />}
                    onClick={() => setConfirm(true)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <AddAccountModal open={addAccount} onClose={() => setAddAccount(false)}/>
      <ConfirmModal open={confirm} heading="Confirm Delete Account?" onClose={() => setConfirm(false)}/>
    </PageWrapper>
  );
};

export default Accounts;
