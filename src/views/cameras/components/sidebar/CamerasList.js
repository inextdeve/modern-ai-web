import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
// import { useAppDispatch, useAppSelector } from "../../../common/util/hooks";
// import { camerasActions } from "../../../store";
import { cameras } from "src/data/data";

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

const CamerasList = ({}) => {
  const [camerasOpen, setCameraOpen] = useState(false);

  const handleClick = () => {
    setCameraOpen((prev) => !prev);
  };

//   const allCameras = useAppSelector((state) => state.cameras.items);

//   const selectedCamera = useAppSelector<camera | null>(
//     (state) => state.cameras.selectedCamera
//   );

//   const dispatch = useAppDispatch();

  const allCameras = cameras;

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
                icon={<ExpandMore />}
                // selected={id === selectedCamera?.id}
                // onClick={() => dispatch(camerasActions.setSelectedCamera(id))}
              />
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default CamerasList;
