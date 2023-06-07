import { Box, Stack, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { serversActions } from "src/store";
import { FolderPlus, SquarePlus } from "src/components/shared/Icons";

export default function VariantButtonGroup() {
  const dispatch = useDispatch();

  const openDialog = () => {
    dispatch(serversActions.setOpenCreateServerDialog());
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button size="large" onClick={openDialog}>
          <SquarePlus />
        </Button>
        <Button size="large">
          <FolderPlus />
        </Button>
      </Stack>
    </Box>
  );
}
