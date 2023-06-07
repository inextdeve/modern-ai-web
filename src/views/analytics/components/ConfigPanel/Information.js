import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  TableContainer,
  Table,
  TableBody,
  Paper,
} from "@mui/material";
import {
  StyledTableCell,
  StyledTableRow,
} from "src/components/shared/StyledTable";

import { camerasActions } from "src/store";
import Title from "src/components/shared/Title";


const Information = () => {
  const dispatch = useDispatch();
  const selectedModule = useSelector(
    (state) => state.analytics.selectedModule
  );


  const allCameras = useSelector((state) => state.cameras.items);

  function createData(key, value) {
    return { key, value };
  }

  const rowsGen = () => {
    if (selectedModule !== null) {
      return [
        createData(
          "Camera with module",
          selectedModule.camerasWithModule.length
        ),
        createData(
          "Enabled Cameras",
          <>
            {selectedModule.enabledCameras.map((id) => (
              <StyledTableRow key={id}>
                <StyledTableCell component="th" scope="row">
                  <Link
                    to="/cameras"
                    onClick={() =>
                      dispatch(camerasActions.setSelectedCamera(id))
                    }
                    style={{
                      textDecoration: "underline",
                      fontWeight: "bold",
                      color: "#f3581b",
                    }}
                  >
                    {
                      allCameras.filter((camera) => camera.id === id)[0].name
                    }
                  </Link>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </>
        ),
      ];
    }
    return [];
  };

  return (
    <Box>
      <Title>Information</Title>
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
    </Box>
  );
};

export default Information;
