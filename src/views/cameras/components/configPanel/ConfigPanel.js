import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import {
  Box,
  Switch,
  Typography,
  Tabs,
  Tab,
  Button,
  FormControlLabel,
} from "@mui/material";
import Connection from "./Connection";
import Rights from "./Rights";
import Archive from "./Archive";
import MotionDetector from "./MotionDetector";
import Analytics from "./Analytics";
import Settings from "./Settings";
import { camerasActions } from "src/store";
import { updateCamera } from "src/store/cameras";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [updated, setUpdated] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);

  const cloneSelected = useSelector((state) => state.cameras.cloneSelected);

  useEffect(() => {
    setUpdated(!_.isEqual(cloneSelected, selectedCamera));
  }, [selectedCamera, cloneSelected]);

  return (
    <>
      {selectedCamera !== null ? (
        <>
          <Box
            component="header"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <FormControlLabel
              name="enabled"
              control={<Switch />}
              checked={Boolean(selectedCamera.enabled)}
              value={selectedCamera.enabled}
              onChange={(e) =>
                dispatch(
                  camerasActions.editCurrent({ enabled: e.target.checked })
                )
              }
            />
            {updated && (
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(updateCamera());
                }}
              >
                {t("globals.update")}
              </Button>
            )}
          </Box>
          <Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label={t("cameras.connection.title")} {...a11yProps(0)} />
                <Tab label={t("cameras.rights.title")} {...a11yProps(1)} />
                <Tab label={t("cameras.archive.title")} {...a11yProps(2)} />
                <Tab
                  label={t("cameras.motionDetector.title")}
                  {...a11yProps(3)}
                />
                <Tab label={t("cameras.analytics.title")} {...a11yProps(4)} />
                <Tab label={t("globals.settings")} {...a11yProps(5)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Connection />
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
            <TabPanel value={value} index={5}>
              <Settings />
            </TabPanel>
          </Box>
        </>
      ) : null}
    </>
  );
};

export default ConfigPanel;
