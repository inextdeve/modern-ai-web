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

const Connection = ({ formData, setFormData }) => {

  const dispatch = useDispatch();

  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  console.log(formData)

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
          defaultValue={selectedCamera?.address}
          value={formData.address}
          onChange={handleChange}
        />

        <Title>Device</Title>
        <Stack direction="row" spacing={4}>
          <FormControl fullWidth>
            <InputLabel>Brand</InputLabel>
            <Select
              labelId="brand-lb-id"
              id="brand"
              defaultValue={selectedCamera?.brand}
              value={formData?.brand}
              size="small"
              onChange={handleChange}
            >
              <MenuItem value="rtsp">RTSP/RTP Device</MenuItem>
              <MenuItem value="html">HTML/MPEG</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Device Type</InputLabel>
            <Select name="type" size="small" label="Device Type">
              <MenuItem value="camera">Camera</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Model</InputLabel>
            <Select name="model" size="small" label="Model">
              <MenuItem value="rtsp">RTSP/RTP Device</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Title>Authorization</Title>
        <Stack direction="row" spacing={4}>
          <TextField name="auth-username" size="small" label="Username" />
          <TextField
            name="auth-password"
            size="small"
            label="Password"
            type="password"
          />
        </Stack>
      </Box>
      <Box>
        <Title>Video streams</Title>
        <Stack direction="row" spacing={4}>
          <FormControl>
            <InputLabel>Format</InputLabel>
            <Select name="streams-format" size="small" label="Model">
              <MenuItem value="h264">H264</MenuItem>
              <MenuItem value="h265">H265</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <Box>
        <Title>Additional</Title>

        <FormGroup>
          <FormControlLabel
            name="sound"
            checked
            control={<CSwitch />}
            label="Sound reception"
          />
          <FormControlLabel
            name="narrowBandwidth"
            checked
            control={<CSwitch />}
            label="Narrow bandwidth camera"
          />
          <FormControlLabel
            control={<CSwitch defaultChecked disabled />}
            label="Connection via server"
          />
        </FormGroup>
      </Box>
      <Box>{/* <SlideDialog /> */}</Box>
    </>
  );
};

export default Connection;
