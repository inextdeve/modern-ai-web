import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { Box, Switch, Typography, Tabs, Tab, Button } from "@mui/material";
import Information from "./Information";

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
  const [updated, setUpdated] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const selectedServer = useSelector((state) => state.servers.selected);

  const cloneSelected = useSelector((state) => state.servers.cloneSelected);

  useEffect(() => {
    setUpdated(!_.isEqual(cloneSelected, selectedServer));
  }, [selectedServer]);

  return (
    <>
      {selectedServer !== null ? (
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
                <Tab label="Information" {...a11yProps(0)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Information />
            </TabPanel>
            {updated && <Button variant="contained">Update</Button>}
          </Box>
        </>
      ) : null}
    </>
  );
};

export default ConfigPanel;
