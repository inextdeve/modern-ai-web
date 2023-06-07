import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
} from "@mui/material";

import { Video, ExpandMore, ExpandLess } from "src/components/shared/Icons";
import { camerasActions } from "src/store";

const MenuItem = ({ title, icon, selected, onClick }) => (
  <ListItemButton
    onClick={onClick}
    key={""}
    component={Box}
    selected={selected}
    sx={{ pl: 4 }}
  >
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={title} />
  </ListItemButton>
);

const CamerasList = () => {
  const dispatch = useDispatch();

  const allCameras = useSelector((state) => state.cameras.items);
  const selectedCamera = useSelector((state) => state.cameras.selectedCamera);

  const [camerasOpen, setCameraOpen] = useState(false);

  const handleClick = () => {
    setCameraOpen((prev) => !prev);
  };


  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={"Cameras"} />
        {camerasOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={camerasOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {allCameras.map(({ name, id }) => {
            return (
              <MenuItem
                key={`${id}-${name}}`}
                title={name}
                icon={<Video />}
                selected={id === selectedCamera?.id}
                onClick={() => dispatch(camerasActions.setSelectedCamera(id))}
              />
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default CamerasList;
