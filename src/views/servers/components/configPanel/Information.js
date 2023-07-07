import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  Stack,
  InputLabel,
  Select,
  MenuItem,
  TableContainer,
  Table,
  TableBody,
  Paper,
} from "@mui/material";
import {
  StyledTableCell,
  StyledTableRow,
} from "src/components/shared/StyledTable";
import { serversActions, camerasActions } from "src/store";
import Title from "src/components/shared/Title";
import ServerTest from "./ServerTest";

const Information = () => {
  const dispatch = useDispatch();

  const selectedServer = useSelector((state) => state.servers.selected);

  const cameras = useSelector((state) => state.cameras.items);

  const handleChange = (property, value) => {
    dispatch(serversActions.editCurrent({ [property]: value }));
  };

  function createData(key, value) {
    return { key, value };
  }

  const rowsGen = () => {
    if (selectedServer !== null) {
      return cameras
        .filter(
          ({ streamServer }) =>
            parseInt(streamServer) === parseInt(selectedServer.id)
        )
        .map(({ id, name }) =>
          createData(
            <Link
              to="/cameras"
              onClick={() => dispatch(camerasActions.setSelectedCamera(id))}
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                color: "#5D87FF",
              }}
            >
              {name}
            </Link>
          )
        );
    }
    return [];
  };

  return (
    <Box>
      <Title>Network address for accessing server</Title>
      <FormControl sx={{ my: 4 }}>
        <Stack direction="row" gap={3}>
          <Box>
            <TextField
              name="address"
              size="small"
              label="Adress"
              value={selectedServer?.address}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              helperText="IPv4 or Host"
            />
          </Box>
          <Box>
            <TextField
              name="port"
              size="small"
              label="Port"
              value={selectedServer?.port}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              sx={{ width: "100px" }}
            />
            <FormHelperText id="my-helper-text">
              Ex: 8080, 80, 90
            </FormHelperText>
          </Box>
          <FormControl sx={{ width: "100px" }}>
            <InputLabel>Protocol</InputLabel>
            <Select
              labelId="protocol-lb-id"
              label="Protocol"
              id="protocol"
              name="protocol"
              value={selectedServer?.protocol}
              size="small"
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            >
              <MenuItem value="http">http</MenuItem>
              <MenuItem value="https">https</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </FormControl>
      <Title>Linked Devices</Title>
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
      <Box sx={{ mt: 3 }}>
        <ServerTest server={selectedServer} />
      </Box>
    </Box>
  );
};

export default Information;
