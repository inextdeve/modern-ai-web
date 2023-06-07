import {
  FormControl,
  TextField,
  Typography,
  Select,
  MenuItem,
  Stack,
  Box,
  InputLabel,
  FormGroup,
  FormControlLabel,
  FormGroupProps,
} from "@mui/material";

// import SlideDialog from "../../../common/components/ui/SlideDialog";
// import useCameraStyle from "../../../styles/useCameraStyle";
// import { useAppDispatch, useAppSelector } from "../../../common/util/hooks";
// import { camerasActions } from "../../../store";
// import { ChangeEvent } from "react";
import CSwitch from "../../../../components/shared/CSwitch";
import Title from "src/components/shared/Title";

const Connection = ({}) => {
  //   const classes = useCameraStyle();
  //   const dispatch = useAppDispatch();

  //   const selectedCamera = useAppSelector<camera | null>((state) => {
  //     if (state.cameras.selectedCamera !== null) {
  //       return state.cameras.selectedCamera;
  //     }
  //     return null;
  //   });

  //   const handleChange = (prop: string, value: any) => {
  //     if (value === "true") value = false;
  //     if (value === "false") value = true;

  //     if (prop.indexOf("-") > 0) {
  //       const [prop1, prop2] = prop.split("-");
  //       //Use JSON For Clone
  //       const newSelectedCamera: any = JSON.parse(JSON.stringify(selectedCamera));

  //       newSelectedCamera[prop1][prop2] = value;

  //       dispatch(camerasActions.modifyCamera(newSelectedCamera));
  //       return;
  //     }

  //     dispatch(camerasActions.modifyCamera({ ...selectedCamera, [prop]: value }));
  //   };

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
        />

        <Title>Device</Title>
        <Stack direction="row" spacing={4}>
          <FormControl fullWidth>
            <InputLabel>Brand</InputLabel>
            <Select
              labelId="month-dd"
              id="month-dd"
              value="rtsp"
              size="small"
              // onChange={handleChange}
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