import { Box, FormControl, Typography } from "@mui/material";
import Table from "./Table";
import Title from "src/components/shared/Title";
import { useTranslation } from "react-i18next";

const Rights = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <FormControl sx={{ width: "80%" }}>
        <Title>{t("cameras.rights.cameraRights")}</Title>
        <Table />
      </FormControl>
    </Box>
  );
};

export default Rights;
