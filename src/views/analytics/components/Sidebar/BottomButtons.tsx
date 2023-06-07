import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useAppDispatch } from "../../../common/util/hooks";
import { serversActions } from "../../../store";
import { FolderPlus, PlusCircle } from "../../../common/components/Icons";
import { Stack } from "@mui/material";

export default function VariantButtonGroup() {
  const dispatch = useAppDispatch();
  const openDialog = () => {
    dispatch(serversActions.setOpenCreateServerDialog());
  };
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button size="large" onClick={openDialog}>
          <PlusCircle />
        </Button>
        <Button size="large">
          <FolderPlus />
        </Button>
      </Stack>
    </Box>
  );
}
