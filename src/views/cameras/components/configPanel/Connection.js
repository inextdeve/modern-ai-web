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

const Connection = ({}) => {
  const dispatch = useDispatch();

  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);

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
        <Title>Address (IP address or URL)</Title>
        <TextField
          name="address"
          size="small"
          id="outlined-basic"
          label="IPv4/URL"
          sx={{ width: "80%" }}
          value={selectedCamera?.address}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <Title>Device</Title>
        <Stack direction="row" spacing={4}>
          <FormControl fullWidth>
            <InputLabel>Brand</InputLabel>
            <Select
              labelId="brand-lb-id"
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
            <InputLabel>Device Type</InputLabel>
            <Select
              name="type"
              size="small"
              label="Device Type"
              value={selectedCamera?.type}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              <MenuItem value="camera">Camera</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Model</InputLabel>
            <Select
              name="model"
              size="small"
              label="Model"
              value={selectedCamera?.model}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              <MenuItem value="rtsp">RTSP/RTP Device</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Title>Authorization</Title>
        <Stack direction="row" spacing={4}>
          <TextField
            name="auth-username"
            size="small"
            label="Username"
            value={selectedCamera?.auth.username}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <TextField
            name="auth-password"
            size="small"
            label="Password"
            type="password"
            value={selectedCamera?.auth.password}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </Stack>
      </Box>
      <Box>
        <Title>Video streams</Title>
        <Stack direction="row" spacing={4}>
          <FormControl>
            <InputLabel>Format</InputLabel>
            <Select
              name="streams-0-format"
              size="small"
              label="Model"
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
        <Title>Additional</Title>
        <FormGroup
          onChange={(e) => handleChange(e.target.name, e.target.checked)}
        >
          <FormControlLabel
            name="sound"
            control={<CSwitch />}
            label="Sound reception"
            checked={Boolean(selectedCamera?.sound)}
            value={selectedCamera?.sound}
          />
          <FormControlLabel
            name="narrowBandwidth"
            control={<CSwitch />}
            label="Narrow bandwidth camera"
            checked={Boolean(selectedCamera?.narrowBandwidth)}
            value={selectedCamera?.narrowBandwidth}
          />
          <FormControlLabel
            control={<CSwitch disabled />}
            label="Connection via server"
          />
        </FormGroup>
      </Box>
      <Box>{/* <SlideDialog /> */}</Box>
    </>
  );
};

export default Connection;
