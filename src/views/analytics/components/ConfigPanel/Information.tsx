import { FC } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  TableContainer,
  Table,
  TableBody,
  Typography,
  Paper,
} from "@mui/material";
import {
  StyledTableCell,
  StyledTableRow,
} from "../../../common/components/ui/StyledComponents";
import { useAppDispatch, useAppSelector } from "../../../common/util/hooks";
import useConfigPanelStyle from "../../../styles/useConfigPanelStyle";
import { camera, module } from "../../../common/util/type";
import { camerasActions } from "../../../store";

interface InformationProps {}

const Information: FC<InformationProps> = ({}) => {
  const dispatch = useAppDispatch();
  const selectedModule = useAppSelector<module | null>(
    (state) => state.analytics.selectedModule
  );
  const classes = useConfigPanelStyle();

  const allCameras = useAppSelector<camera[]>((state) => state.cameras.items);

  function createData(key: string, value: any) {
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
                      allCameras.filter((camera: camera) => camera.id === id)[0]
                        .name
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
      <Typography className={classes.inputsLabel}>Information</Typography>
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
