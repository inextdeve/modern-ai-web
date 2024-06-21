import { useDispatch } from "react-redux";
import { Button, Stack } from "@mui/material/";
import { analyticsActions } from "src/store";
import { SquarePlus, FolderPlus } from "src/components/shared/Icons";

export default function VariantButtonGroup() {
  const dispatch = useDispatch();
  const openDialog = () => {
    dispatch(analyticsActions.setCreateAnalyticsDialog());
  };
  return (

    <Stack direction="row" justifyContent="space-between">
      <Button size="large" onClick={openDialog}>
        <SquarePlus />
      </Button>
      <Button size="large">
        <FolderPlus />
      </Button>
    </Stack>

  );
}
