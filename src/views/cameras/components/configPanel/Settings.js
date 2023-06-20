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
import { camerasActions } from "src/store";
import { deleteCamera } from "src/store/cameras";

const Settings = ({}) => {
  const dispatch = useDispatch();
  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);

  const handleChange = (e) =>
    dispatch(
      camerasActions.editCurrent({
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
      <Title>Camera Settings</Title>
      <Typography sx={{ color: "grey", fontWeight: "bold", mb: 2 }}>
        Rename camera
      </Typography>
      <TextField
        name="name"
        size="small"
        id="outlined-basic"
        label="Name"
        sx={{ width: "80%" }}
        value={selectedCamera?.name}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        sx={{ mt: 4 }}
        color="error"
        onClick={handleClickOpen}
      >
        Delete Camera
      </Button>
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
                {selectedCamera.name}
              </Typography>{" "}
              ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Cancel
            </Button>
            <Button onClick={() => dispatch(deleteCamera())} color="warning">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Settings;
