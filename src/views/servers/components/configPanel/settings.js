import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import Title from "src/components/shared/Title";
import { serversActions } from "src/store";
import { deleteServer } from "src/store/servers";

const Settings = ({}) => {
  const dispatch = useDispatch();
  const selectedServer = useSelector((state) => state.servers.selected);

  const handleChange = (e) =>
    dispatch(
      serversActions.editCurrent({
        [e.target.name]: e.target.value,
      })
    );

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Title>Server Settings</Title>
      <Typography sx={{ color: "grey", fontWeight: "bold", mb: 2 }}>
        Rename server
      </Typography>
      <TextField
        name="name"
        size="small"
        id="outlined-basic"
        label="Name"
        sx={{ width: "80%" }}
        value={selectedServer?.name}
        onChange={handleChange}
      />
      <Box>
        <Button
          variant="contained"
          sx={{ mt: 4 }}
          color="error"
          onClick={handleClickOpen}
        >
          Delete Server
        </Button>
      </Box>

      <Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Warning</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete{" "}
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {selectedServer.name}
              </Typography>{" "}
              ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Cancel
            </Button>
            <Button onClick={() => dispatch(deleteServer())} color="warning">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Settings;
