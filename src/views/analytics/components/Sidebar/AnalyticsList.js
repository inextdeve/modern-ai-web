import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  ScanFace,
  Trash2,
  Cleaning,
} from "src/components/shared/Icons";
import { analyticsActions } from "src/store";

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

const AnalyticsList = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const allModules = useSelector((state) => state.analytics.items);

  const selectedModule = useSelector(
    (state) => state.analytics.selected
  );

  const icons = {
    0: <ScanFace />,
    1: <Trash2 />,
    2: <Cleaning />,
  };

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={"Video Analytics"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {allModules.map(({ name, id }) => {
            return (
              <MenuItem
                key={`${id}-${name}}`}
                title={name}
                icon={icons[id]}
                selected={id === selectedModule?.id}
                onClick={() => dispatch(analyticsActions.setSelected(id))}
              />
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default AnalyticsList;
