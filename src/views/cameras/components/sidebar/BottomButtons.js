import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import { useAppDispatch, useAppSelector } from "../../../common/util/hooks";
// import { camerasActions } from "../../../store";
// import { FolderPlus, PlusCircle } from "../../../common/components/Icons";

import { Stack } from "@mui/material";
import { IconCameraPlus,IconFolderPlus } from "@tabler/icons";

export default function VariantButtonGroup() {
//   const dispatch = useAppDispatch();
//   const openDialog = () => {
//     dispatch(camerasActions.setOpenCreateCameraDialog());
//   };
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button size="large" >
          <IconCameraPlus />
        </Button>
        <Button size="large">
          <IconFolderPlus />
        </Button>
      </Stack>
    </Box>
  );
}
