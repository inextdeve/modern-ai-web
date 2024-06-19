import {
  FormControl,
  TextField,
  Select,
  MenuItem,
  Stack,
  Box,
  InputLabel,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CSwitch from "src/components/shared/CSwitch";
import Title from "src/components/shared/Title";
import { camerasActions } from "src/store";
import CameraTest from "./CameraTest";
import { useTranslation } from "react-i18next";

const Connection = () => {
  const [translate] = useTranslation();
  const t = (value) => translate(`cameras.connection.${value}`);
  const dispatch = useDispatch();

  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);
  const servers = useSelector((state) => state.servers.items);

  const handleChange = (property, value) => {
    if (property.indexOf("auth") > -1) {
      const newSelectedCamera = JSON.parse(JSON.stringify(selectedCamera)); //Create new camera object and modify props and send it to selected camera

      newSelectedCamera.auth[property.split("-")[1]] = value;

      dispatch(camerasActions.editCurrent({ ...newSelectedCamera }));
      return;
    }

    if (property.indexOf("streams") > -1) {
      const newSelectedCamera = JSON.parse(JSON.stringify(selectedCamera)); //Create new camera object and modify props and send it to selected camera

      newSelectedCamera.streams[0].format = value;

      dispatch(camerasActions.editCurrent({ ...newSelectedCamera }));
      return;
    }

    dispatch(camerasActions.editCurrent({ [property]: value }));
  };

  return (
    <>
      <Box>
        <Title>{t("addressUrl")}</Title>
        <TextField
          name="address"
          size="small"
          id="outlined-basic"
          label={t("ipv4/url")}
          sx={{ width: "80%" }}
          value={selectedCamera?.address}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <Title>{t("device")}</Title>
        <Stack direction="row" spacing={4}>
          <FormControl fullWidth>
            <InputLabel>{t("brand")}</InputLabel>
            <Select
              labelId="brand-lb-id"
              label="brand"
              id="brand"
              name="brand"
              value={selectedCamera?.brand}
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              <MenuItem value="rtsp">RTSP/RTP Device</MenuItem>
              <MenuItem value="html">HTML/MPEG</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>{t("deviceType")}</InputLabel>
            <Select
              name="type"
              size="small"
              label={t("deviceType")}
              value={selectedCamera?.type}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              <MenuItem value="camera">{t("camera")}</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>{t("model")}</InputLabel>
            <Select
              name="model"
              size="small"
              label={t("model")}
              value={selectedCamera?.model}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              <MenuItem value="rtsp">RTSP/RTP Device</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Title>{t("auth")}</Title>
        <Stack direction="row" spacing={4}>
          <TextField
            name="auth-username"
            size="small"
            label={t("username")}
            value={selectedCamera?.auth.username}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <TextField
            name="auth-password"
            size="small"
            label={t("password")}
            type="password"
            value={selectedCamera?.auth.password}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </Stack>
      </Box>
      <Box>
        <Title>{t("videoStreams")}</Title>
        <Stack direction="row" spacing={4}>
          <FormControl>
            <InputLabel>{t("format")}</InputLabel>
            <Select
              name="streams-0-format"
              size="small"
              label={t("model")}
              value={selectedCamera?.streams[0].format}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              <MenuItem value="h264">H264</MenuItem>
              <MenuItem value="h265">H265</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Box>
        <Title>{t("streamServer")}</Title>
        <Stack direction="row" spacing={4}>
          <FormControl>
            <InputLabel>{t("server")}</InputLabel>
            <Select
              sx={{ minWidth: "120px" }}
              name="streamServer"
              size="small"
              label={t("server")}
              value={selectedCamera?.streamServer}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              {servers.map((server) => (
                <MenuItem value={`${server.id}`}>{server.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Box>
        <Title>{t("additional")}</Title>
        <FormGroup
          onChange={(e) => handleChange(e.target.name, e.target.checked)}
        >
          <FormControlLabel
            name="sound"
            control={<CSwitch />}
            label={t("soundReception")}
            checked={Boolean(selectedCamera?.sound)}
            value={selectedCamera?.sound}
          />
          <FormControlLabel
            name="narrowBandwidth"
            control={<CSwitch />}
            label={t("narrow")}
            checked={Boolean(selectedCamera?.narrowBandwidth)}
            value={selectedCamera?.narrowBandwidth}
          />
          <FormControlLabel
            control={<CSwitch disabled />}
            label={t("connServ")}
          />
        </FormGroup>
      </Box>
      <Box sx={{ mt: 3 }}>
        <CameraTest camera={selectedCamera} />
      </Box>
    </>
  );
};

export default Connection;
