import { useState } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { useSelector } from "react-redux";
import Information from "./Information";
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const selectedUser = useSelector((state) => state.users.selectedUser);

  return (
    <>
      {selectedUser !== null ? (
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label={t("globals.info")} {...a11yProps(0)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Information />
          </TabPanel>
        </Box>
      ) : null}
    </>
  );
};

export default ConfigPanel;
