import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Play, Pause } from "src/components/shared/Icons";
import { Stack, CircularProgress } from "@mui/material";

export default function OutlinedCard({ server }) {
  const [testing, setTesting] = useState(false);
  const [testingMessage, setTestingMessage] = useState(null);
  const [loading, setLoading] = useState(true);

  const startServerTest = async () => {
    setTesting((prev) => !prev);
    try {
      setLoading(true);
      const response = await fetch(
        `${server.protocol}://${server.address}:${server.port}/stream/test`
      );
      const data = await response.json();

      if (data.success) return setTestingMessage("Success");

      throw new Error("Fail");
    } catch (error) {
      setTestingMessage("Fail");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTesting(false);
    setTestingMessage("");
    setLoading(true);
  }, [server]);

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardActions>
          <Stack direction="column" sx={{ width: "100%" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
              onClick={startServerTest}
            >
              {testing ? <Pause size={20} /> : <Play size={20} />}
              <Typography
                component="span"
                sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
              >
                {testing ? "Stop testing" : "Test Server"}
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
              Sending test request
            </Typography>
            {/* If you want to add connection status */}
            <Stack direction="row" sx={{ gap: 1 }}>
              <Typography component="span" sx={{ color: "#5d87ff" }}>
                Connection status:
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: `${
                    testingMessage === "Success" ? "#13deb9" : "#fa896b"
                  }`,
                }}
              >
                {loading ? (
                  <CircularProgress
                    size={15}
                    disableShrink
                    color="warning"
                    sx={{ mt: 0.5 }}
                  />
                ) : (
                  testingMessage
                )}
              </Typography>
            </Stack>
          </CardContent>
        ) : null}
      </Card>
    </Box>
  );
}
