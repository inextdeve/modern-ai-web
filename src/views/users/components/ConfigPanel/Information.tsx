import { FC, useState } from "react";
import {
  Box,
  Typography,
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
import { useAppDispatch, useAppSelector } from "../../../common/util/hooks";
import useConfigPanelStyle from "../../../styles/useConfigPanelStyle";
import EditDialog from "./components/EditDialog";
import CSwitch from "../../../common/components/ui/Switch";
import { user, group } from "../../../common/util/type";

interface InformationProps {}

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

const Information: FC<InformationProps> = ({}) => {
  const dispatch = useAppDispatch();
  const classes = useConfigPanelStyle();
  const [editGroup, setEditGroup] = useState<boolean>(false);
  const [groupRights, setGroupRights] = useState({});

  const selectedUser = useAppSelector<user | group | any>(
    (state) => state.users.selectedUser
  );

  // const handleChange = (prop: string, value: string) => {
  //   dispatch(serversActions.editServer({ ...selectedServer, [prop]: value }));
  // };
  function createData(key: string, value: any) {
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
      <Typography className={classes.inputsLabel}>
        Network address for accessing server
      </Typography>
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
          Edit
        </Button>
      ) : (
        <>
          <Button
            variant="contained"
            size="small"
            sx={{ my: 3 }}
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{ my: 3, mx: 2 }}
            onClick={() => setEditGroup(false)}
          >
            Cancel
          </Button>
        </>
      )}
    </Box>
  );
};

export default Information;
