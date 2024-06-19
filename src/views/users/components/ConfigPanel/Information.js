import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableRow,
  Paper,
  Button,
  styled,
} from "@mui/material";
import EditDialog from "./EditDialog";
import CSwitch from "src/components/shared/CSwitch";
import Title from "src/components/shared/Title";
import { useTranslation } from "react-i18next";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Information = () => {
  const { t } = useTranslation();

  const [editGroup, setEditGroup] = useState(false);

  const selectedUser = useSelector((state) => state.users.selectedUser);

  // const handleChange = (prop: string, value: string) => {
  //   dispatch(serversActions.editServer({ ...selectedServer, [prop]: value }));
  // };
  function createData(key, value) {
    return { key, value };
  }

  const handleEdit = () => {
    if (selectedUser?.type === "group") {
      setEditGroup(true);
    }
  };

  const handleSave = () => {};
  const rowsGen = () => {
    if (selectedUser?.type === "user") {
      return [
        createData("Username", selectedUser.name),
        createData("Belongs to group", selectedUser.group.join(", ")),
        createData("Created At", "05/26/2023 7:52:22 PM"),
      ];
    }
    if (selectedUser?.type === "group") {
      return [
        createData("Group Name", selectedUser.name),
        createData(
          "Changing password from client",
          <CSwitch
            checked={selectedUser.rights.changePassFromClient}
            disabled={!editGroup}
          />
        ),
        createData(
          "Archiving management",
          <CSwitch
            checked={selectedUser.rights.archivingManagement}
            disabled={!editGroup}
          />
        ),
      ];
    }
    return [];
  };
  return (
    <Box>
      <EditDialog />
      <Title>{t("users.information.title")}</Title>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableBody>
            {rowsGen().map((row) => (
              <StyledTableRow key={row.key}>
                <StyledTableCell component="th" scope="row">
                  {row.key}
                </StyledTableCell>
                <StyledTableCell align="right">{row.value}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!editGroup ? (
        <Button
          variant="contained"
          size="small"
          sx={{ my: 3 }}
          onClick={handleEdit}
        >
          {t("globals.edit")}
        </Button>
      ) : (
        <>
          <Button
            variant="contained"
            size="small"
            sx={{ my: 3 }}
            onClick={handleSave}
          >
            {t("globals.save")}
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ my: 3, mx: 2 }}
            onClick={() => setEditGroup(false)}
          >
            {t("globals.cancel")}
          </Button>
        </>
      )}
    </Box>
  );
};

export default Information;
