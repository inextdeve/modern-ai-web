import { FC } from "react";
import { Grid } from "@mui/material";
import SideBar from "./SideBar";
import ConfigPanel from "./ConfigPanel";
interface AnalyticsProps {}

const Analytics: FC<AnalyticsProps> = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <SideBar />
      </Grid>
      <Grid item xs={8}>
        <ConfigPanel />
      </Grid>
    </Grid>
  );
};

export default Analytics;
