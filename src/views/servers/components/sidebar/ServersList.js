import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ExpandLess, ExpandMore, HardDrive } from "src/components/shared/Icons";

import { serversActions } from "src/store";

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

const ServersList = ({}) => {
  const dispatch = useDispatch();
  const [serversOpen, setServersOpen] = useState(false);

  const handleClick = () => {
    setServersOpen((prev) => !prev);
  };

  const allServers = useSelector((state) => state.servers.items);

  const selectedServer = useSelector((state) => state.servers.selectedServer);

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={"Servers"} />
        {serversOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={serversOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {allServers.map(({ name, id }) => {
            return (
              <MenuItem
                key={`${id}-${name}}`}
                title={name}
                icon={<HardDrive />}
                selected={id === selectedServer?.id}
                onClick={() => dispatch(serversActions.setSelectedServer(id))}
              />
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default ServersList;
