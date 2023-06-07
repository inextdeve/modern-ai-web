import { Box, FormControl, Typography } from "@mui/material";
import Table from "./Table";
import Title from "src/components/shared/Title";

const Rights = () => {
  return (
    <Box>
      <FormControl sx={{ width: "80%" }}>
        <Title>Camera Rights</Title>
        <Table />
      </FormControl>
    </Box>
  );
};

export default Rights;
