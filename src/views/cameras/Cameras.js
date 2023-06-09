import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DialogTitle,
  Dialog,
  TextField,
  Box,
  Button,
  Stack,
  Grid,
  CircularProgress
} from "@mui/material";
import { toast } from "react-toastify";
import PageContainer from "src/components/container/PageContainer";
import ConfigPanel from "./components/configPanel/ConfigPanel";
import SideBar from "./components/sidebar/Sidebar";
import DashboardCard from "src/components/shared/DashboardCard";
import { camerasActions } from "src/store";
import { cameraInit } from "src/data/data";


const Cameras = () => {

  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const [error, setError] = useState({ error: false, helperText: "" });

  const selectedCamera = useSelector((state) => state.cameras.selectedCamera)
  const open = useSelector(state => state.cameras.createCameraDialog);
  const close = () => dispatch(camerasActions.setCreateCameraDialog());

  const addCamera = () => {
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

    const fetchId = { id: 384733 };//await a fetch for create a cemera in db
    cameraInit.id = fetchId.id;
    cameraInit.name = value;
    console.log(cameraInit)
    dispatch(camerasActions.add([cameraInit]));
    dispatch(camerasActions.setSelectedCamera(fetchId.id));
    close();
  }

  return (
    <>
      <PageContainer title="Cameras" description="this is Cameras">
        <Dialog open={open}>
          <Box sx={{ padding: "1rem" }}>
            <DialogTitle sx={{ textAlign: "center" }}>
              Add new camera
            </DialogTitle>
            <TextField
              size="small"
              sx={{ paddingBottom: "1.5rem", minWidth: "300px" }}
              placeholder="Name"
              value={value}
              {...error}
              onChange={({ target }) => setValue(target.value)}
            />
            <Stack direction="row" gap={2}>
              <Button variant="contained" onClick={addCamera}>Add<CircularProgress color="success" size={20} sx={{ ml: 2 }} /></Button>
              <Button variant="outlined" onClick={close}>Close</Button>
            </Stack>
          </Box>
        </Dialog>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <DashboardCard>
              <SideBar />
            </DashboardCard>
          </Grid>
          <Grid item xs={8}>
            <DashboardCard title={selectedCamera?.name}>
              <ConfigPanel />
            </DashboardCard>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default Cameras;
