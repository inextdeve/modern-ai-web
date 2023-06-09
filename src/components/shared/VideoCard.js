import ReactPlayer from 'react-player'
import BlankCard from './BlankCard';
import { Play } from "./Icons"
const VideoCard = ({ url }) => {
    return <BlankCard><ReactPlayer playIcon={<Play />} url={url} width="100%" /></BlankCard>

}

export default VideoCard;