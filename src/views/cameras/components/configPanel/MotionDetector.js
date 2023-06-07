import {
  Box,
  FormGroup,
  FormControlLabel,
  Typography,
  Link,
} from "@mui/material";
import Title from "src/components/shared/Title";
import { cameras } from "src/data/data";
// import { camerasActions } from "../../../store";
import CSwitch from "src/components/shared/CSwitch";

const MotionDetector = ({}) => {
  //   const classes = useCameraStyle();
  //   const dispatch = useAppDispatch();
  const selectedCamera = cameras[0];
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
          checked={selectedCamera?.motionDetector}
          control={<CSwitch />}
          label="Motion Detector"
          //   onChange={(e) =>
          //     dispatch(
          //       camerasActions.modifyCamera({
          //         ...selectedCamera,
          //         [e.target.name]: e.target.checked,
          //       })
          //     )
          //   }
        />
      </FormGroup>
    </Box>
  );
};

export default MotionDetector;
