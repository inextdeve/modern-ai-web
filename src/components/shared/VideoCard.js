import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import BlankCard from "./BlankCard";

const VideoCard = ({ camera }) => {
  const serverFilter = useSelector((state) =>
    state.servers.items.filter(
      (server) => parseInt(server.id) === parseInt(camera.streamServer)
    )
  );

  if (serverFilter.length < 1) {
    toast.warning(`Please choose a server for ${camera.name}`);
    return <></>;
  } else {
    const server = serverFilter[0];
    return (
      <BlankCard>
        <iframe
          style={{ minWidth: "100%", aspectRatio: "16/9" }}
          frameBorder="0"
          src={`${server.protocol}://${server.address}:${server.port}/camera/stream/${camera.id}/0`}
          title="video-stream"
        ></iframe>
      </BlankCard>
    );
  }
};

export default VideoCard;
