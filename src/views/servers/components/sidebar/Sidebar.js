import { Box, Divider } from "@mui/material";
import ServersList from "./ServersList";
import SearchBox from "./SearchBox";
import BottomButtons from "./BottomButtons";

const Sidebar = () => {
  return (
    <>
      <Box>
        <SearchBox />
        <Divider sx={{ height: 1, m: 0.5 }} orientation="horizontal" />
        <ServersList />
      </Box>
      <Box>
        <Divider sx={{ height: 1, m: 0.5 }} orientation="horizontal" />
        <BottomButtons />
      </Box>
    </>
  );
};

export default Sidebar;
