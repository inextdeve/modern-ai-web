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

const Archive = ({}) => {
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
          label="Recording and viewing archive"
          checked={selectedCamera?.archive.recAndArch}
          onChange={(e) => handleChange(e.target.name, e.target.checked)}
        />
      </FormGroup>
      <FormControl
        onChange={(e) => handleChange(e.target.name, e.target.value)}
      >
        <FormLabel id="demo-radio-buttons-group-label">
          Recording Mode
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedCamera?.archive.recMode}
          name="recMode"
        >
          <FormControlLabel
            value="alwayson"
            control={<Radio />}
            label="Always On"
          />
          <FormControlLabel
            value="bymotion"
            control={<Radio />}
            label="By Motion"
          />
          <FormControlLabel value="manual" control={<Radio />} label="Manual" />
          <FormControlLabel
            value="schedule"
            control={<Radio />}
            label="Schedule"
          />
        </RadioGroup>
      </FormControl>
      <Typography component="p" sx={{ mt: 2, color: "Grey" }}>
        It is possible to modify archive storage parameters in the server
        settings
      </Typography>
      <Link href="#">Set up server</Link>
      <Title>Video stream for recording</Title>
      <Typography sx={{ color: "grey", fontWeight: "bold", mb: 2 }}>
        Main
      </Typography>
      <Typography sx={{ color: "grey" }}>
        It is possible to modify the stream on the Connection Tab
      </Typography>
      <Link>Set up the stream</Link>
    </Box>
  );
};

export default Archive;
