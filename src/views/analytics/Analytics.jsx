import { Box } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import { state } from "src/data/data";
import MapView from "src/map/core/MapView";
import MapDefaultCamera from "src/map/main/MapDefaultCamera";
import MapPositions from "src/map/MapPositions";

const Analytics = () => {
  return (
    <PageContainer title="Analytics" description="Analytics">
      <Box sx={{height: "300px", width: "100%"}}>
        <MapView>
          <MapPositions positions={Object.values(state.session.positions)} showStatus/>
          <MapDefaultCamera />
        </MapView>
      </Box>
    </PageContainer>
  );
};

export default Analytics;
