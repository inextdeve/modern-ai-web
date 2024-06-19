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
import { useTranslation } from "react-i18next";

const Settings = ({}) => {
  const { t: translate } = useTranslation();
  const t = (value) =>
    value.indexOf(".") > -1
      ? translate(value)
      : translate(`cameras.settings.${value}`);
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
      <Title>{t("camSettings")}</Title>
      <Typography sx={{ color: "grey", fontWeight: "bold", mb: 2 }}>
        {t("renameCam")}
      </Typography>
      <TextField
        name="name"
        size="small"
        id="outlined-basic"
        label={t("globals.name")}
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
        {t("delCam")}
      </Button>
      <Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {t("globals.warning")}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {t("delMsg")}{" "}
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {selectedCamera.name}
              </Typography>{" "}
              ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              {t("globals.cancel")}
            </Button>
            <Button onClick={() => dispatch(deleteCamera())} color="warning">
              {t("globals.delete")}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Settings;
