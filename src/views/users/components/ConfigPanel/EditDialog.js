import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersActions } from "src/store";
import {
  Box,
  FormControl,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  InputBase,
  Link,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const EditDialog = () => {
  const { t: translate } = useTranslation();
  const t = (value) =>
    value.indexOf(".") > -1 ? translate(value) : translate(`users.${value}`);
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);
  const open = useSelector((state) => state.users.openEditUserDialog);

  const [passwordValue] = useState({ pass: "", confirm: "" });
  const [openPassEdit, setOpenPassEdit] = useState(false);

  return (
    <>
      {selectedUser !== null && selectedUser.type === "user" ? (
        <>
          <Dialog open={openPassEdit}>
            <Box sx={{ p: 3 }}>
              <DialogTitle sx={{ textAlign: "center" }}>
                {t("pass")}
              </DialogTitle>
              <FormControl>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: 3 }}
                >
                  <Typography>{t("newPass")}</Typography>
                  <InputBase value={passwordValue.pass} />
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: 3 }}
                >
                  <Typography>{t("confirmPass")}</Typography>
                  <InputBase value={passwordValue.confirm} />
                </Stack>
              </FormControl>
              <Stack
                direction="row"
                sx={{ mt: 3 }}
                gap={3}
                justifyContent="flex-start"
              >
                <Button onClick={() => {}}>{t("globals.save")}</Button>
                <Button onClick={() => setOpenPassEdit(false)}>
                  {t("globals.cancel")}
                </Button>
              </Stack>
            </Box>
          </Dialog>
          <Dialog open={open}>
            <Box sx={{ minWidth: "450px", p: 3 }}>
              <DialogTitle sx={{ textAlign: "center" }}>
                {t("globals.edit")}
              </DialogTitle>

              <FormControl fullWidth>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>{t("group")}</Typography>
                  <Select
                    size="small"
                    id="group-select"
                    value={0}
                    sx={{ minWidth: "180px" }}
                  >
                    <MenuItem value={0}>{t("user")}</MenuItem>
                    <MenuItem value={1}>{t("group")}</MenuItem>
                  </Select>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: 3 }}
                >
                  <Typography>{t("globals.username")}</Typography>
                  <InputBase
                    value={selectedUser.name}
                    inputProps={{ "aria-label": "search" }}
                  />
                </Stack>
              </FormControl>
              <Stack direction="row" justifyContent="flex-end">
                <Link
                  href="#"
                  sx={{
                    fontSize: "0.8rem",
                    mt: 3,
                  }}
                  onClick={() => setOpenPassEdit(true)}
                >
                  {t("editPass")}
                </Link>
              </Stack>
              <Stack direction="row" gap={2} sx={{ mt: 6 }}>
                <Button variant="contained">{t("globals.apply")}</Button>
                <Button
                  variant="outlined"
                  onClick={() => dispatch(usersActions.setOpenEditUserDialog())}
                >
                  {t("globals.cancel")}
                </Button>
              </Stack>
            </Box>
          </Dialog>
        </>
      ) : (
        <Dialog open={open}>
          <Box sx={{ padding: "1rem" }}>
            <DialogTitle sx={{ textAlign: "center" }}>
              {t("globals.edit")}
            </DialogTitle>

            <FormControl>
              <InputLabel id="demo-simple-select-label">
                {t("globals.type")}
              </InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={0}
                label="Type"
              >
                <MenuItem value={0}>{t("user")}</MenuItem>
                <MenuItem value={1}>{t("group")}</MenuItem>
              </Select>
              <InputLabel id="demo-simple-select-label">
                {t("globals.type")}
              </InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={1}
                label="Type"
              >
                <MenuItem value={0}>{t("user")}</MenuItem>
                <MenuItem value={1}>{t("group")}</MenuItem>
              </Select>
            </FormControl>
            <Stack direction="row" gap={2}>
              <Button variant="contained">{t("globals.apply")}</Button>
              <Button
                variant="outlined"
                onClick={() => dispatch(usersActions.setOpenEditUserDialog())}
              >
                {t("globals.cancel")}
              </Button>
            </Stack>
          </Box>
        </Dialog>
      )}
    </>
  );
};

export default EditDialog;
