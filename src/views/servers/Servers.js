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

const Servers = () => {

  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [error, setError] = useState({ error: false, helperText: "" });

  const open = useSelector((state) => state.servers.createServerDialog);
  const close = () => dispatch(serversActions.setCreateServerDialog())

  const selectedServer = useSelector((state) => state.servers.selectedServer);

  const addServer = () => {
    if (value.trim().length < 3) {
      setError({ error: true, helperText: "Enter a valid name" })
      return;
    } else {
      setError({ error: false, helperText: "" })
    }

    toast.promise(new Promise((resolve) => resolve()), {
      pending: "Creating",
      success: "Created",
      error: "Error Try Again",
    });

    const fetchId = { id: 384733 };//await a fetch for create a server in db
    serverInit.id = fetchId.id;
    serverInit.name = value;
    // console.log(serverInit)
    dispatch(serversActions.add([serverInit]));
    dispatch(serversActions.setSelected(fetchId.id));
    close();
  }

  return (
    <>
      <PageContainer title="Servers" description="this is Servers">
        <Dialog open={open}>
          <Box sx={{ padding: "1rem" }}>
            <DialogTitle sx={{ textAlign: "center" }}>
              Add new server
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
                Add
              </Button>
              <Button
                variant="outlined"
                onClick={close}
              >
                Close
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
