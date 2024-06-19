import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
  Link,
} from "@mui/material";
import { camerasActions } from "src/store";
import CSwitch from "src/components/shared/CSwitch";
import Title from "src/components/shared/Title";
import { useTranslation } from "react-i18next";

const Archive = () => {
  const [translate] = useTranslation();
  const t = (value) =>
    value.indexOf(".") > -1
      ? translate(value)
      : translate(`cameras.archive.${value}`);

  const dispatch = useDispatch();

  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);

  const handleChange = (prop, value) => {
    const newSelectedCamera = JSON.parse(JSON.stringify(selectedCamera)); //clone the selected camera and modify it

    newSelectedCamera.archive[prop] = value;

    dispatch(camerasActions.editCurrent(newSelectedCamera));
  };

  return (
    <Box>
      <FormGroup sx={{ mb: 2 }}>
        <FormControlLabel
          name="recAndArch"
          control={<CSwitch />}
          label={t("recViewArch")}
          checked={Boolean(selectedCamera?.archive.recAndArch)}
          onChange={(e) => handleChange(e.target.name, e.target.checked)}
        />
      </FormGroup>
      <FormControl
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      >
        <FormLabel id="demo-radio-buttons-group-label">{t("mode")}</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedCamera?.archive.recMode}
          name="recMode"
        >
          <FormControlLabel
            value="alwayson"
            control={<Radio />}
            label={t("alwaysOn")}
          />
          <FormControlLabel
            value="bymotion"
            control={<Radio />}
            label={t("byMotion")}
          />
          <FormControlLabel
            value="manual"
            control={<Radio />}
            label={t("globals.manual")}
          />
          <FormControlLabel
            value="schedule"
            control={<Radio />}
            label={t("schedule")}
          />
        </RadioGroup>
      </FormControl>
      <Typography component="p" sx={{ mt: 2, color: "Grey" }}>
        {t("settingMsg")}
      </Typography>
      <Link href="#">{t("setupServer")}</Link>
      <Title>{t("vidStreamForRec")}</Title>
      <Typography sx={{ color: "grey", fontWeight: "bold", mb: 2 }}>
        {t("globals.main")}
      </Typography>
      <Typography sx={{ color: "grey" }}>{t("globals.connTabMsg")}</Typography>
      <Link>{t("globals.setupStream")}</Link>
    </Box>
  );
};

export default Archive;
