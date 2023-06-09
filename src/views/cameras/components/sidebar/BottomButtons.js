import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { camerasActions } from "src/store";
// import { FolderPlus, PlusCircle } from "../../../common/components/Icons";

import { Stack } from "@mui/material";
import { CameraPlus, FolderPlus } from "src/components/shared/Icons";

export default function VariantButtonGroup() {
  const dispatch = useDispatch();
  const openDialog = () => {
    dispatch(camerasActions.setCreateCameraDialog());
  };
  return (

    <Stack direction="row" justifyContent="space-between">
      <Button size="large" onClick={openDialog}>
        <CameraPlus />
      </Button>
      <Button size="large">
        <FolderPlus />
      </Button>
    </Stack>

  );
}
