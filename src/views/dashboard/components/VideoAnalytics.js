import React, { useEffect, useState } from "react";
import { Select, MenuItem, Grid } from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";
import { useSelector } from "react-redux";
import VideoCard from "src/components/shared/VideoCard";

const VideoAnalytics = () => {
  // select
  const [selectedModule, setSelectedModule] = useState("all");

  // Viewed cameras with selected module

  const [viewedCameras, setViewedCamera] = useState([]);

  const handleChange = (event) => {
    setSelectedModule(event.target.value);
  };

  // Get all enabled camera

  const enabledCameras = useSelector((state) =>
    state.cameras.items.filter((camera) => camera.enabled)
  );

  //Get all analytics modules

  const analyticsModules = useSelector((state) => state.analytics.items);

  useEffect(() => {
    if (selectedModule === "all") {
      setViewedCamera(enabledCameras);
      return;
    }

    setViewedCamera(
      enabledCameras.filter((camera) => {
        return Boolean(camera.analytics[selectedModule]) === true;
      })
    );
  }, [selectedModule]);

  return (
    <DashboardCard
      title="Video Analytics"
      action={
        <Select
          labelId="module-label"
          id="module-select"
          value={selectedModule}
          size="small"
          onChange={handleChange}
        >
          <MenuItem value={"all"}>All</MenuItem>
          {analyticsModules.map((module) => (
            <MenuItem key={module.id} value={module.id}>
              {module.name}
            </MenuItem>
          ))}
        </Select>
      }
    >
      <Grid container spacing={4}>
        {viewedCameras.map((camera, index) => (
          <Grid item xs={6} key={index}>
            <VideoCard camera={camera} />
          </Grid>
        ))}
      </Grid>
    </DashboardCard>
  );
};

export default VideoAnalytics;
