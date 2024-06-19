import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { Box, Switch, Typography, Tabs, Tab, Button } from "@mui/material";
import Information from "./Information";
import { updateServer } from "src/store/servers";
import Settings from "./settings";
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
  const [value, setValue] = useState(0);
  const [updated, setUpdated] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectedServer = useSelector((state) => state.servers.selected);

  const cloneSelected = useSelector((state) => state.servers.cloneSelected);

  useEffect(() => {
    setUpdated(!_.isEqual(cloneSelected, selectedServer));
  }, [selectedServer, cloneSelected]);

  return (
    <>
      {selectedServer !== null ? (
        <>
          <Box
            component="header"
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            {/* <Switch /> */}
            {updated && (
              <Button
                variant="contained"
                onClick={() => {
                  dispatch(updateServer());
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
                aria-label="basic tabs server"
              >
                <Tab label={t("globals.info")} {...a11yProps(0)} />
                <Tab label={t("globals.settings")} {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Information />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Settings />
            </TabPanel>
          </Box>
        </>
      ) : null}
    </>
  );
};

export default ConfigPanel;
