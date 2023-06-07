import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  User,
} from "src/components/shared/Icons";
import { usersActions } from "src/store";


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

const UsersList = () => {
  const dispatch = useDispatch();
  const [listOpen, setListOpen] = useState({}); //Use group name and the true or false expanded list

  const handleClick = (name, id) => {
    dispatch(usersActions.setSelectedUser({ type: "groups", id }));
    setListOpen((prev) => {
      prev[name] = !prev[name];
      return { ...prev };
    });
  };

  const [allGroups, allUsers, selectedUser] = useSelector((state) => [
    state.users.groups,
    state.users.users,
    state.users.selectedUser,
  ]);

  useEffect(() => {
    allGroups.forEach((group) => {
      setListOpen((prev) => {
        prev[group.name] = false;
        return prev;
      });
    });
  }, [allGroups]);

  return (
    <>
      {allGroups.map((group) => {
        return (
          <List>
            <ListItemButton onClick={() => handleClick(group.name, group.id)}>
              <ListItemText primary={group.name} />
              {listOpen[group.name] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={listOpen[group.name]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {allUsers
                  .filter((user) => user.group.includes(group.id))
                  .map(({ name, id }) => {
                    return (
                      <MenuItem
                        key={`${id}-${name}}`}
                        title={name}
                        icon={<User />}
                        selected={id === selectedUser?.id}
                        onClick={() =>
                          dispatch(
                            usersActions.setSelectedUser({ type: "users", id })
                          )
                        }
                      />
                    );
                  })}
              </List>
            </Collapse>
          </List>
        );
      })}
    </>
  );
};

export default UsersList;
