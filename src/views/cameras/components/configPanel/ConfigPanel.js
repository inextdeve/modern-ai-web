import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Switch, Typography, Tabs, Tab } from "@mui/material";
import Connection from "./Connection";
import Rights from "./Rights";
import Archive from "./Archive";
import MotionDetector from "./MotionDetector";
import Analytics from "./Analytics";

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

const ConfigPanel = () => {
  const [value, setValue] = useState(0);
  const [formData, setFormData] = useState({})

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);

  useEffect(() => {
    setFormData({ ...selectedCamera })
  }, [selectedCamera])

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
              <Connection formData={formData} setFormData={setFormData} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Rights />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Archive />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <MotionDetector />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Analytics />
            </TabPanel>
          </Box>
        </>
      ) : null}
    </>
  );
};

export default ConfigPanel;
