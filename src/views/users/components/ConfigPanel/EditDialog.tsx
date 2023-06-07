import { FC, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../../../../common/util/hooks";
import { usersActions } from "../../../../store";
import { user } from "../../../../common/util/type";

const EditDialog = () => {
  const dispatch = useAppDispatch();
  const selectedUser = useAppSelector<user | null>(
    (state) => state.users.selectedUser
  );
  const open = useAppSelector((state) => state.users.openEditUserDialog);

  const [passwordValue, setPasswordValue] = useState({ pass: "", confirm: "" });
  const [openPassEdit, setOpenPassEdit] = useState(false);

  return (
    <>
      {selectedUser !== null && selectedUser.type === "user" ? (
        <>
          <Dialog open={openPassEdit}>
            <Box sx={{ p: 3 }}>
              <DialogTitle sx={{ textAlign: "center" }}>Password</DialogTitle>
              <FormControl>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: 3 }}
                >
                  <Typography>New Password</Typography>
                  <InputBase value={passwordValue.pass} />
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: 3 }}
                >
                  <Typography>Confirm Password</Typography>
                  <InputBase value={passwordValue.confirm} />
                </Stack>
              </FormControl>
              <Stack
                direction="row"
                sx={{ mt: 3 }}
                gap={3}
                justifyContent="flex-start"
              >
                <Button onClick={() => {}}>Save</Button>
                <Button onClick={() => setOpenPassEdit(false)}>Cancel</Button>
              </Stack>
            </Box>
          </Dialog>
          <Dialog open={open}>
            <Box sx={{ minWidth: "450px", p: 3 }}>
              <DialogTitle sx={{ textAlign: "center" }}>Edit</DialogTitle>

              <FormControl fullWidth>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography>Group</Typography>
                  <Select
                    size="small"
                    id="group-select"
                    value={0}
                    sx={{ minWidth: "180px" }}
                  >
                    <MenuItem value={0}>User</MenuItem>
                    <MenuItem value={1}>Group</MenuItem>
                  </Select>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mt: 3 }}
                >
                  <Typography>Username</Typography>
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
                  Edit Password
                </Link>
              </Stack>
              <Stack direction="row" gap={2} sx={{ mt: 6 }}>
                <Button variant="contained">Apply</Button>
                <Button
                  variant="outlined"
                  onClick={() => dispatch(usersActions.setOpenEditUserDialog())}
                >
                  Cancel
                </Button>
              </Stack>
            </Box>
          </Dialog>
        </>
      ) : (
        <Dialog open={open}>
          <Box sx={{ padding: "1rem" }}>
            <DialogTitle sx={{ textAlign: "center" }}>Edit</DialogTitle>

            <FormControl>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={0}
                label="Type"
              >
                <MenuItem value={0}>User</MenuItem>
                <MenuItem value={1}>Group</MenuItem>
              </Select>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                size="small"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={1}
                label="Type"
              >
                <MenuItem value={0}>User</MenuItem>
                <MenuItem value={1}>Group</MenuItem>
              </Select>
            </FormControl>
            <Stack direction="row" gap={2}>
              <Button variant="contained">Apply</Button>
              <Button
                variant="outlined"
                onClick={() => dispatch(usersActions.setOpenEditUserDialog())}
              >
                Cancel
              </Button>
            </Stack>
          </Box>
        </Dialog>
      )}
    </>
  );
};

export default EditDialog;
