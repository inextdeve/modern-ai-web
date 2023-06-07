import { FC } from "react";
import { Box, Paper, Divider } from "@mui/material";
import UsersList from "./UsersList";
import SearchBox from "./SearchBox";
import BottomButtons from "./BottomButtons";
import useCameraStyle from "../../../styles/useCameraStyle";
interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
  const classes = useCameraStyle();
  return (
    <Paper className={classes.sideBarContainer}>
      <Box>
        <SearchBox />
        <Divider sx={{ height: 1, m: 0.5 }} orientation="horizontal" />
        <UsersList />
      </Box>
      <Box>
        <Divider sx={{ height: 1, m: 0.5 }} orientation="horizontal" />
        <BottomButtons />
      </Box>
    </Paper>
  );
};

export default SideBar;
