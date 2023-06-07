import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  FormControl,
  FormHelperText,
  TextField,
  Stack,
} from "@mui/material";
import { serversActions } from "src/store";
import Title from "src/components/shared/Title";

const Information = ({}) => {
  const dispatch = useDispatch();
  const selectedServer = useSelector((state) => state.servers.selectedServer);

  const handleChange = (prop, value) => {
    dispatch(serversActions.editServer({ ...selectedServer, [prop]: value }));
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
            />
            <FormHelperText id="my-helper-text">
              We'll never share your email.
            </FormHelperText>
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
        </Stack>
      </FormControl>
    </Box>
  );
};

export default Information;
