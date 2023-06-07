import { Grid } from "@mui/material";
import Sidebar from "./components/Sidebar/Sidebar";
import ConfigPanel from "./components/ConfigPanel/ConfigPanel";
import DashboardCard from "src/components/shared/DashboardCard";
import PageContainer from "src/components/container/PageContainer";

const Analytics = () => {
  return (
    <PageContainer title="Video Analytics" description="Video Analytics modules">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <DashboardCard>
            <Sidebar />
          </DashboardCard>
        </Grid>
        <Grid item xs={8}>
          <DashboardCard title={"Video Analytics"}>
            <ConfigPanel />
          </DashboardCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Analytics;
