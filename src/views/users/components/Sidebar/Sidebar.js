import { Box, Divider } from "@mui/material";
import UsersList from "./UsersList";
import SearchBox from "./SearchBox";
import BottomButtons from "./BottomButtons";


const SideBar = () => {

  return (
    <>
      <Box>
        <SearchBox />
        <Divider sx={{ height: 1, m: 0.5 }} orientation="horizontal" />
        <UsersList />
      </Box>
      <Box>
        <Divider sx={{ height: 1, m: 0.5 }} orientation="horizontal" />
        <BottomButtons />
      </Box>
    </>
  );
};

export default SideBar;
