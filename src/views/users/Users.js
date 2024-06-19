import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersActions } from "src/store";
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
} from "@mui/material";
import ConfigPanel from "./components/ConfigPanel/ConfigPanel";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardCard from "src/components/shared/DashboardCard";
import PageContainer from "src/components/container/PageContainer";
import { useTranslation } from "react-i18next";

const Users = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const open = useSelector((state) => state.users.openCreateUserDialog);

  const selectedUser = useSelector((state) => state.users.selectedUser);

  const [value, setValue] = useState("");

  const [createType, setCreateType] = useState(""); //Type mean a user or a group

  const handleChange = (event) => {
    setCreateType(event.target.value);
  };

  const handleAddUser = () => {
    setTimeout(() => {}, 4000);
    dispatch(usersActions.add({}));
  };

  return (
    <PageContainer title={t("globals.users")} description="Users management">
      <Dialog open={open}>
        <Box sx={{ padding: "1rem" }}>
          <DialogTitle sx={{ textAlign: "center" }}>
            {t("users.createNewItem")}
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
              <MenuItem value={0}>{t("users.user")}</MenuItem>
              <MenuItem value={1}>{t("users.group")}</MenuItem>
            </Select>
          </FormControl>
          <Stack direction="row" gap={2}>
            <Button variant="contained" onClick={handleAddUser}>
              {t("globals.create")}
            </Button>
            <Button
              variant="outlined"
              onClick={() => dispatch(usersActions.setOpenCreateUserDialog())}
            >
              {t("globals.close")}
            </Button>
          </Stack>
        </Box>
      </Dialog>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <DashboardCard>
            <Sidebar />
          </DashboardCard>
        </Grid>
        <Grid item xs={8}>
          <DashboardCard title={selectedUser?.name}>
            <ConfigPanel />
          </DashboardCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Users;
