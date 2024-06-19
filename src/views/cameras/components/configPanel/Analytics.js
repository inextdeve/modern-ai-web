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
import { useTranslation } from "react-i18next";

const Analytics = () => {
  const { t: translate } = useTranslation();
  const t = (value) => translate(`cameras.analytics.${value}`);
  const dispatch = useDispatch();

  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);

  const handleChange = (prop, value) => {
    const newSelectedCamera = JSON.parse(JSON.stringify(selectedCamera));

    newSelectedCamera.analytics[prop] = value;

    dispatch(camerasActions.editCurrent(newSelectedCamera));
  };

  return (
    <Box>
      <Title>{t("title")}</Title>
      <Grid container gap={2}>
        <Grid item xs={4}>
          <ModuleCard
            name="1"
            icon={EngineeringIcon}
            text={t("workerPresence")}
            checked={Boolean(selectedCamera?.analytics[1])}
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        </Grid>
        <Grid item xs={4}>
          <ModuleCard
            name="2"
            icon={IconTrash}
            text={t("trashUnloading")}
            checked={Boolean(selectedCamera?.analytics[2])}
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        </Grid>
        <Grid item xs={4}>
          <ModuleCard
            name="3"
            icon={CleaningServicesOutlinedIcon}
            text={t("qualityOfCleaning")}
            checked={Boolean(selectedCamera?.analytics[3])}
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Analytics;
