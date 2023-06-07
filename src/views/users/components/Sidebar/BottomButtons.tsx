import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useAppDispatch } from "../../../common/util/hooks";
import { usersActions } from "../../../store";
import { UserPlus, Users } from "../../../common/components/Icons";
import { Stack } from "@mui/material";

export default function VariantButtonGroup() {
  const dispatch = useAppDispatch();
  const openDialog = () => {
    dispatch(usersActions.setOpenCreateUserDialog());
  };
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between">
        <Button size="large" onClick={openDialog}>
          <UserPlus />
        </Button>
        <Button size="large" onClick={openDialog}>
          <Users />
        </Button>
      </Stack>
    </Box>
  );
}
