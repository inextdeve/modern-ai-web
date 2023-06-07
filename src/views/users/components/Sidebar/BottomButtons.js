import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { usersActions } from "src/store";
import { UserPlus, Users } from "src/components/shared/Icons";
import { Stack } from "@mui/material";

export default function VariantButtonGroup() {
  const dispatch = useDispatch();
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
