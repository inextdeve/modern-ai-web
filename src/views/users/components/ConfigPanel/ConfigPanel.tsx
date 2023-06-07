import { FC, useState } from "react";
import { Box, Switch, Typography, Tabs, Tab } from "@mui/material";
import { useAppSelector } from "../../../common/util/hooks";
import Information from "./Information";
import useConfigPanelStyle from "../../../styles/useConfigPanelStyle";
import { user } from "../../../common/util/type";

interface ConfigPanelProps {}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ConfigPanel: FC<ConfigPanelProps> = ({}) => {
  const [value, setValue] = useState(0);

  const classes = useConfigPanelStyle();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const selectedUser = useAppSelector<user | null>(
    (state) => state.users.selectedUser
  );

  return (
    <>
      {selectedUser !== null ? (
        <Box component={"section"} className={classes.configPanelContainer}>
          <Box component="header" className={classes.configPanelHeader}>
            <Typography sx={{ ml: "0.4rem" }}>{selectedUser?.name}</Typography>
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
          </Box>
        </Box>
      ) : null}
    </>
  );
};

export default ConfigPanel;
