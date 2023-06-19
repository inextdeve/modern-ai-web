import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Box, TableContainer, Table, TableBody, Paper } from "@mui/material";
import {
  StyledTableCell,
  StyledTableRow,
} from "src/components/shared/StyledTable";

import { camerasActions } from "src/store";
import Title from "src/components/shared/Title";

const Information = () => {
  const dispatch = useDispatch();
  const selectedModule = useSelector((state) => state.analytics.selected);

  const allCameras = useSelector((state) => state.cameras.items);

  const enabledCameras = allCameras.filter((camera) => Boolean(camera.enabled));

  function createData(key, value) {
    return { key, value };
  }

  const rowsGen = () => {
    if (selectedModule !== null) {
      return [
        createData(
          "Camera with module",
          enabledCameras.filter(({ analytics }) =>
            Boolean(analytics[selectedModule.id])
          ).length
        ),
        createData(
          "Enabled Cameras",
          <>
            {/* GHadi ital3o kamlat filtri 3la hsab li mactivi fiha had lmodule */}
            {enabledCameras
              .filter(({ analytics }) => Boolean(analytics[selectedModule.id]))
              .map(({ id, name }) => (
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
                      {name}
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
