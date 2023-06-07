import {
  Stack,
  FormGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

import CSwitch from "src/components/shared/CSwitch";

const ModuleCard = ({ icon, text, checked, name, onChange }) => {
  return (
    <Card>
      <CardActions>
        <FormGroup sx={{ mb: 2 }} onChange={(e) => onChange(e)}>
          <CSwitch name={name} checked={checked} />
        </FormGroup>
      </CardActions>
      <CardContent>
        <Stack direction="row" sx={{ gap: 1 }}>
          <Box component={icon}></Box>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {text}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
