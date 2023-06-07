import {
  DialogTitle,
  Dialog,
  TextField,
  Box,
  Button,
  Stack,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../common/util/hooks";
import { usersActions } from "../../store";
import ConfigPanel from "./ConfigPanel";
import SideBar from "./SideBar/SideBar";

const Servers = () => {
  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.users.openCreateUserDialog);

  const [value, setValue] = useState<string>("");

  const [createType, setCreateType] = useState<string>(""); //Type mean a user or a group

  const handleChange = (event: SelectChangeEvent) => {
    setCreateType(event.target.value as string);
  };

  const handleAddUser = () => {
    setTimeout(() => {}, 4000);
    dispatch(usersActions.add({}));
  };

  return (
    <>
      <Dialog open={open}>
        <Box sx={{ padding: "1rem" }}>
          <DialogTitle sx={{ textAlign: "center" }}>
            Create new item
          </DialogTitle>
          <TextField
            size="small"
            sx={{ paddingBottom: "1.5rem", minWidth: "300px", mr: 2 }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Name"
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              size="small"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={createType}
              label="Type"
              onChange={handleChange}
            >
              <MenuItem value={0}>User</MenuItem>
              <MenuItem value={1}>Group</MenuItem>
            </Select>
          </FormControl>
          <Stack direction="row" gap={2}>
            <Button variant="contained" onClick={handleAddUser}>
              Create
            </Button>
            <Button
              variant="outlined"
              onClick={() => dispatch(usersActions.setOpenCreateUserDialog())}
            >
              Close
            </Button>
          </Stack>
        </Box>
      </Dialog>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
        <Grid item xs={8}>
          <ConfigPanel />
        </Grid>
      </Grid>
    </>
  );
};

export default Servers;
