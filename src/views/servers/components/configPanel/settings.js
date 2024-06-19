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
import { useTranslation } from "react-i18next";

const Settings = ({}) => {
  const { t } = useTranslation();
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
      <Title>{t("servers.settings.title")}</Title>
      <Typography sx={{ color: "grey", fontWeight: "bold", mb: 2 }}>
        {t("servers.settings.renServer")}
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
          {t("servers.settings.delServer")}
        </Button>
      </Box>

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
              {t("globals.delMsg")}{" "}
              <Typography component="span" sx={{ fontWeight: "bold" }}>
                {selectedServer.name}
              </Typography>{" "}
              ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              {t("globals.cancel")}
            </Button>
            <Button onClick={() => dispatch(deleteServer())} color="warning">
              {t("globals.delete")}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Settings;
