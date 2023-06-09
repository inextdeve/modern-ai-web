import { useDispatch, useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";
import ModuleCard from "./ModuleCard";
import {
  EngineeringIcon,
  CleaningServicesOutlinedIcon,
  IconTrash,
} from "src/components/shared/Icons";
import Title from "src/components/shared/Title";

import { camerasActions } from "src/store";

const Analytics = () => {
  const dispatch = useDispatch();

  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);

  const handleChange = (prop, value) => {
    const newSelectedCamera = JSON.parse(JSON.stringify(selectedCamera));

    newSelectedCamera.analytics[prop] = value;

    dispatch(camerasActions.editCurrent(newSelectedCamera));
  };

  return (
    <Box>
      <Title>Intelligent module</Title>
      <Grid container gap={2}>
        <Grid item xs={4}>
          <ModuleCard
            name="0"
            icon={EngineeringIcon}
            text="Wroker presence"
            checked={selectedCamera?.analytics[0]}
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        </Grid>
        <Grid item xs={4}>
          <ModuleCard
            name="1"
            icon={CleaningServicesOutlinedIcon}
            text="Quality of cleaning"
            checked={selectedCamera?.analytics[1]}
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        </Grid>
        <Grid item xs={4}>
          <ModuleCard
            name="2"
            icon={IconTrash}
            text="Trash cleaning"
            checked={selectedCamera?.analytics[2]}
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
