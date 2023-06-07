import React, { FC, useState } from "react";
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
  CleaningServicesOutlinedIcon,
} from "../../../common/components/Icons";
import { useAppDispatch, useAppSelector } from "../../../common/util/hooks";

import { analyticsActions } from "../../../store";
import { module } from "../../../common/util/type";

interface serverListProps {}
interface MenuItemProps {
  title: string;
  icon: any;
  selected: boolean;
  onClick: () => {};
}
const MenuItem = ({ title, icon, selected, onClick }: MenuItemProps) => (
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

const AnalyticsList: FC<serverListProps> = ({}) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const allModules = useAppSelector((state) => state.analytics.items);

  const selectedModule = useAppSelector<module | null>(
    (state) => state.analytics.selectedModule
  );

  const icons: any = {
    0: <ScanFace />,
    1: <CleaningServicesOutlinedIcon />,
    2: <Trash2 />,
  };

  return (
    <List>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={"Video Analytics"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {allModules.map(({ name, id }: { name: string; id: number }) => {
            return (
              <MenuItem
                key={`${id}-${name}}`}
                title={name}
                icon={icons[id]}
                selected={id === selectedModule?.id}
                onClick={() => dispatch(analyticsActions.setSelectedModule(id))}
              />
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default AnalyticsList;
