import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
// import Cameras from "../../Cameras";
import { cameras } from "src/data/data";
// import { useAppSelector, useAppDispatch } from "../../../../common/util/hooks";
// import { camerasActions } from "../../../../store/index";

function createData(allGroupsOfUsers, surveillance, archive) {
  return { allGroupsOfUsers, surveillance, archive };
}

const BasicTable = () => {
  //   const dispatch = useAppDispatch();

  const selectedCamera = cameras[0];

  const rows = selectedCamera?.rights.map((item) =>
    createData(item.group, item.surveillance, item.archive)
  );

  //   const handleChange = (prop, value, index) => {
  //     const newSelectedCamera = JSON.parse(JSON.stringify(selectedCamera));

  //     newSelectedCamera.rights[index][prop] = value;

  //     dispatch(camerasActions.modifyCamera(newSelectedCamera));
  //   };

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
                  checked={row.surveillance}
                  //   onChange={(e) =>
                  //     handleChange(e.target.name, e.target.checked, index)
                  //   }
                />
              </TableCell>
              <TableCell align="right">
                <Checkbox
                  name="archive"
                  checked={row.archive}
                  //   onChange={(e) =>
                  //     handleChange(e.target.name, e.target.checked, index)
                  //   }
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
