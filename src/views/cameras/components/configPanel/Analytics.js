import { Box, Grid } from "@mui/material";
import ModuleCard from "./ModuleCard";
import {
  EngineeringIcon,
  CleaningServicesOutlinedIcon,
  IconTrash,
} from "src/components/shared/Icons";

import { cameras } from "src/data/data";
import Title from "src/components/shared/Title";

// import { camerasActions } from "../../../store";

const Analytics = ({}) => {
  //   const classes = useCameraStyle();

  //   const dispatch = useAppDispatch();

  const selectedCamera = cameras[0];
  //   const handleChange = (prop, value) => {
  //     const newSelectedCamera = JSON.parse(JSON.stringify(selectedCamera));

  //     newSelectedCamera.analytics[prop] = value;

  //     dispatch(camerasActions.modifyCamera(newSelectedCamera));
  //   };

  return (
    <Box>
      <Title>Intelligent module</Title>
      <Grid container gap={2}>
        <Grid item xs={4}>
          <ModuleCard
            name="workerPresence"
            icon={EngineeringIcon}
            text="Wroker presence"
            checked={selectedCamera?.analytics.workerPresence}
            // onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        </Grid>
        <Grid item xs={4}>
          <ModuleCard
            name="qualityOfCleaning"
            icon={CleaningServicesOutlinedIcon}
            text="Quality of cleaning"
            checked={selectedCamera?.analytics.qualityOfCleaning}
            // onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        </Grid>
        <Grid item xs={4}>
          <ModuleCard
            name="trashUnloading"
            icon={IconTrash}
            text="Trash cleaning"
            checked={selectedCamera?.analytics.trashUnloading}
            // onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
