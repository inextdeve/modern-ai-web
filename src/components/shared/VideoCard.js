import ReactPlayer from "react-player";
import BlankCard from "./BlankCard";
import { Play } from "./Icons";
const VideoCard = ({ url }) => {
  return (
    <BlankCard>
      {/* <ReactPlayer
        playIcon={<Play />}
        url={"http://localhost:3000/streams/output.m3u8"}
        width="100%"
        
      /> */}
      <iframe
        style={{ minWidth: "100%", aspectRatio: 16 / 9 }}
        frameborder="0"
        src="http://localhost:3000/"
        title="video-stream"
      ></iframe>
    </BlankCard>
  );
};

export default VideoCard;
