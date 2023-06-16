import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  FormGroup,
  FormControlLabel,
  Typography,
  Link,
} from "@mui/material";
import Title from "src/components/shared/Title";
import { cameras } from "src/data/data";
import { camerasActions } from "src/store";
import CSwitch from "src/components/shared/CSwitch";

const MotionDetector = ({}) => {
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
      <Title>Video stream for analysis</Title>
      <Typography sx={{ color: "grey", fontWeight: "bold", mb: 2 }}>
        Main
      </Typography>
      <Typography sx={{ color: "grey" }}>
        It is possible to modify the stream on the Connection Tab
      </Typography>
      <Link>Set up the stream</Link>
      <FormGroup sx={{ my: 4 }}>
        <FormControlLabel
          name="motionDetector"
          checked={Boolean(selectedCamera?.motionDetector)}
          control={<CSwitch />}
          label="Motion Detector"
          onChange={handleChange}
        />
      </FormGroup>
    </Box>
  );
};

export default MotionDetector;
