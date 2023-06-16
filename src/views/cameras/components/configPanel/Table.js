import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { camerasActions } from "src/store/index";

function createData(allGroupsOfUsers, surveillance, archive) {
  return { allGroupsOfUsers, surveillance, archive };
}

const BasicTable = () => {
  const dispatch = useDispatch();

  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);

  const rows = selectedCamera?.rights.map((item) =>
    createData(item.group, item.surveillance, item.archive)
  );

  const handleChange = (prop, value, index) => {
    const newSelectedCamera = JSON.parse(JSON.stringify(selectedCamera));

    newSelectedCamera.rights[index][prop] = value;

    dispatch(camerasActions.editCurrent(newSelectedCamera));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>All Groups Of Users</TableCell>
            <TableCell align="right">Surveillance</TableCell>
            <TableCell align="right">Archive</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, index) => (
            <TableRow
              key={row.allGroupsOfUsers}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.allGroupsOfUsers}
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  name="surveillance"
                  checked={Boolean(row.surveillance)}
                  onChange={(e) =>
                    handleChange(e.target.name, e.target.checked, index)
                  }
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  name="archive"
                  checked={Boolean(row.archive)}
                  onChange={(e) =>
                    handleChange(e.target.name, e.target.checked, index)
                  }
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default BasicTable;
