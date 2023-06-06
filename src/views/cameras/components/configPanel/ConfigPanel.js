import {  useState } from "react";
import { Box, Switch, Typography, Tabs, Tab } from "@mui/material";
// import { useAppSelector } from "../../../common/util/hooks";
import Connection from "./Connection";
// import Rights from "./Rights";
// import useCameraStyle from "../../../styles/useCameraStyle";
// import Archive from "./Archive";
// import MotionDetector from "./MotionDetector";
// import Analytics from "./Analytics";

const selectedCamera = {
    id: 98239,
    name: "camera-outdoor",
    address: "10.10.10.10",
    brand: "html",
    type: "camera",
    model: "rtsp",
    auth: {
      username: "admin",
      password: "admin",
    },
    streams: [{ format: "h264" }],
    rights: [{ group: "administrators", surveillance: true, archive: true }],
    sound: true,
    narrowBandwidth: true,
    archive: {
      recAndArch: true,
      recMode: "alwayson",
    },
    motionDetector: false,
    analytics: {
      workerPresence: false,
      trashUnloading: true,
      qualityOfCleaning: false,
    },
  }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ConfigPanel= ({}) => {
  const [value, setValue] = useState(0);

//   const classes = useCameraStyle();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//   const selectedCamera = useAppSelector<camera | null>((state) => {
//     return state.cameras.selectedCamera;
//   });

  return (
    <>
      {selectedCamera !== null ? (
          <>
          <Box component="header">
            <Switch />
          </Box>
          <Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Connection" {...a11yProps(0)} />
                <Tab label="Rights" {...a11yProps(1)} />
                <Tab label="Archive" {...a11yProps(2)} />
                <Tab label="Motion Detector" {...a11yProps(3)} />
                <Tab label="Analytics" {...a11yProps(4)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Connection />
            </TabPanel>
            <TabPanel value={value} index={1}>
              {/* <Rights /> */}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {/* <Archive /> */}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {/* <MotionDetector /> */}
            </TabPanel>
            <TabPanel value={value} index={4}>
              {/* <Analytics /> */}
            </TabPanel>
          </Box>
          </>
      ) : null}
    </>
  );
};

export default ConfigPanel;
