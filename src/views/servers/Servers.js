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
import PageContainer from "src/components/container/PageContainer";
import { serversActions } from "../../store";
import ConfigPanel from "./components/configPanel/configPanel";
import Sidebar from "./components/sidebar/Sidebar";
import DashboardCard from "src/components/shared/DashboardCard";

const Servers = () => {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.servers.openCreateServerDialog);

  const selectedServer = useSelector((state) => state.servers.selectedServer);

  const [value, setValue] = useState(""); //Mean for the new created server

  const handleAddServer = () => {
    // setTimeout(() => {}, 4000);
    // dispatch(serversActions.add({}));
  };

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
            />
            <Stack direction="row" gap={2}>
              <Button variant="contained" onClick={handleAddServer}>
                Add
              </Button>
              <Button
                variant="outlined"
                onClick={() =>
                  dispatch(serversActions.setOpenCreateServerDialog())
                }
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
