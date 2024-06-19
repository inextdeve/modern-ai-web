import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Play,
  Pause,
  XCircle,
  Volume1,
  Volume2,
} from "src/components/shared/Icons";
import {
  Stack,
  Alert,
  Slider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function OutlinedCard({ camera }) {
  const { t } = useTranslation();
  const [volumeValue, setVolumeValue] = useState(30);
  const [testing, setTesting] = useState(false);
  const [testingMessage, setTestingMessage] = useState(null);

  const startCameraTest = () => {
    setTesting((prev) => !prev);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolumeValue(newValue);
  };
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardActions>
          <Stack direction="column" sx={{ width: "100%" }}>
            {/* <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ width: "100%", marginBottom: "0.50rem" }}
            >
              {testingMessage ? (
                <Alert severity="warning" sx={{ padding: "0 0.5rem" }}>
                  {testingMessage}
                </Alert>
              ) : (
                <Box></Box>
              )}
            </Stack> */}
            <Button
              variant="contained"
              fullWidth
              sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
              onClick={startCameraTest}
            >
              {testing ? <Pause size={20} /> : <Play size={20} />}
              <Typography
                component="span"
                sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                {testing ? t("globals.stopTesting") : t("globals.testCam")}
              </Typography>
            </Button>
          </Stack>
        </CardActions>
        {testing ? (
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {t("globals.mainStream")}
            </Typography>
            <Box sx={{ maxWidth: "300px", aspectRatio: "16/9" }}>
              <iframe
                style={{ minWidth: "100%", aspectRatio: "16/9" }}
                frameBorder="0"
                src={`http://s1.rcj.care:9000/camera/stream/${camera.id}/0`}
                title="video-stream"
              ></iframe>
              {/* <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1, mt: 1 }}
                alignItems="center"
              >
                <Volume1 />
                <Slider
                  aria-label="Volume"
                  value={volumeValue}
                  onChange={handleVolumeChange}
                />
                <Volume2 />
              </Stack> */}
            </Box>
            {/* If you want to add connection status */}
            {/* <Stack direction="row" sx={{ gap: 1 }}>
              <Typography component="span" sx={{ color: "blue" }}>
                Connection status:
              </Typography>
              <Typography component="span" sx={{ color: "green" }}>
                Connected
              </Typography>
            </Stack> */}
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label={t("globals.extensiveTesting")}
            />
          </CardContent>
        ) : null}
      </Card>
    </Box>
  );
}
