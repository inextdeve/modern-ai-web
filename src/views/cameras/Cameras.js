import {
  DialogTitle,
  Dialog,
  TextField,
  Box,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import PageContainer from "src/components/container/PageContainer";

import ConfigPanel from "./components/configPanel/ConfigPanel";
import SideBar from "./components/sidebar/Sidebar";
import DashboardCard from "src/components/shared/DashboardCard";

const Cameras = () => {
  return (
    <>
      <PageContainer title="Cameras" description="this is Cameras">
        <Dialog open={false}>
          <Box sx={{ padding: "1rem" }}>
            <DialogTitle sx={{ textAlign: "center" }}>
              Add new camera
            </DialogTitle>
            <TextField
              size="small"
              sx={{ paddingBottom: "1.5rem", minWidth: "300px" }}
              placeholder="Name"
            />
            <Stack direction="row" gap={2}>
              <Button variant="contained">Add</Button>
              <Button variant="outlined">Close</Button>
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
            <DashboardCard title="Outdoor Camera">
              <ConfigPanel />
            </DashboardCard>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default Cameras;
