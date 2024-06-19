import {
  DialogTitle,
  Dialog,
  TextField,
  Box,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import PageContainer from "src/components/container/PageContainer";
import { serversActions } from "../../store";
import ConfigPanel from "./components/configPanel/configPanel";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardCard from "src/components/shared/DashboardCard";
import { serverInit } from "src/data/data";
import { createServer } from "src/store/servers";
import { useTranslation } from "react-i18next";

const Servers = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [error, setError] = useState({ error: false, helperText: "" });

  const open = useSelector((state) => state.servers.createServerDialog);
  const close = () => dispatch(serversActions.setCreateServerDialog());

  const selectedServer = useSelector((state) => state.servers.selected);

  const addServer = () => {
    if (value.trim().length < 3) {
      setError({ error: true, helperText: t("globals.enterValidName") });
      return;
    } else {
      setError({ error: false, helperText: "" });
    }

    toast.promise(new Promise((resolve) => resolve()), {
      pending: "Creating",
      success: "Created",
      error: "Error Try Again",
    });
    dispatch(createServer({ name: value }));
    setValue("");
    close();
  };

  return (
    <>
      <PageContainer title={t("servers.title")} description="this is Servers">
        <Dialog open={open}>
          <Box sx={{ padding: "1rem" }}>
            <DialogTitle sx={{ textAlign: "center" }}>
              {t("servers.addNew")}
            </DialogTitle>
            <TextField
              size="small"
              sx={{ paddingBottom: "1.5rem", minWidth: "300px" }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Name"
              {...error}
            />
            <Stack direction="row" gap={2}>
              <Button variant="contained" onClick={addServer}>
                {t("globals.add")}
              </Button>
              <Button variant="outlined" onClick={close}>
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
            <DashboardCard title={selectedServer?.name}>
              <ConfigPanel />
            </DashboardCard>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default Servers;
