import { Box, Divider } from "@mui/material";
import AnalyticsList from "./AnalyticsList";
import SearchBox from "./SearchBox";
import BottomButtons from "./BottomButtons";

const SideBar = () => {

  return (
    <>
      <Box>
        <SearchBox />
        <Divider sx={{ height: 1, m: 0.5 }} orientation="horizontal" />
        <AnalyticsList />
      </Box>
      <Box>
        <Divider sx={{ height: 1, m: 0.5 }} orientation="horizontal" />
        <BottomButtons />
      </Box>
    </>
  );
};

export default SideBar;
