import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Typography,
  Link,
} from "@mui/material";
import Title from "src/components/shared/Title";
import { camerasActions } from "src/store";
import CSwitch from "src/components/shared/CSwitch";
import { useTranslation } from "react-i18next";

const MotionDetector = ({}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);

  const handleChange = (e) =>
    dispatch(
      camerasActions.editCurrent({
        [e.target.name]: e.target.checked,
      })
    );

  return (
    <Box>
      <Title>{t("cameras.motionDetector.videoStreamForAnlysis")}</Title>
      <Typography sx={{ color: "grey", fontWeight: "bold", mb: 2 }}>
        {t("globals.main")}
      </Typography>
      <Typography sx={{ color: "grey" }}>{t("globals.connTabMsg")}</Typography>
      <Link>{t("globals.setupStream")}</Link>
      <FormGroup sx={{ my: 4 }}>
        <FormControlLabel
          name="motionDetector"
          checked={Boolean(selectedCamera?.motionDetector)}
          control={<CSwitch />}
          label={t("cameras.motionDetector.title")}
          onChange={handleChange}
        />
      </FormGroup>
    </Box>
  );
};

export default MotionDetector;
