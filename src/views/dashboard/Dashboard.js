import React from "react";
import { Grid, Box } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";

// components
import VideoAnalytics from "./components/VideoAnalytics";
import EnabledCameras from "./components/EnabledCameras";
import RecentTransactions from "./components/RecentTransactions";
import ProductPerformance from "./components/ProductPerformance";
import Blog from "./components/Blog";
import MonthlyEarnings from "./components/MonthlyEarnings";

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <VideoAnalytics />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <EnabledCameras />
              </Grid>
              <Grid item xs={12}>
                {/* <MonthlyEarnings /> */}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            {/* <RecentTransactions /> */}
          </Grid>
          <Grid item xs={12} lg={8}>
            {/* <ProductPerformance /> */}
          </Grid>
          <Grid item xs={12}>
            {/* <Blog /> */}
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
