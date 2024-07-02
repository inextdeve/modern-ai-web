import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import BlankCard from "./BlankCard";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVerticalIcon, Video } from "lucide-react";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { camerasActions } from "src/store";

const CameraMenu = ({ cameraId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (prop) => {
    if (prop == "settings") {
      dispatch(camerasActions.setSelectedCamera(cameraId));
      navigate("/cameras");
    }

    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-label="settings" onClick={handleClick}>
        <MoreVerticalIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleClose("settings")}>
          {t("globals.settings")}
        </MenuItem>
      </Menu>
    </>
  );
};

const VideoCard = ({ camera }) => {
  const serverFilter = useSelector((state) =>
    state.servers.items.filter(
      (server) => parseInt(server.id) === parseInt(camera.streamServer)
    )
  );

  if (serverFilter.length < 1) {
    toast.warning(`Please choose a server for ${camera.name}`);
    return <></>;
  }
  const server = serverFilter[0];
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <Video />
          </Avatar>
        }
        action={<CameraMenu cameraId={camera.id} />}
        title={camera.name}
        subheader={camera.type}
      />
      <CardContent>
        <iframe
          style={{ minWidth: "100%", aspectRatio: "16/9", display: "block" }}
          frameBorder="0"
          src={`${server.protocol}://${server.address}:${server.port}/stream/${camera.id}/0`}
          title="video-stream"
        ></iframe>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
