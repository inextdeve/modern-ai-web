import React, { FC, useEffect, useState } from "react";
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
  HardDrive,
  User,
} from "../../../common/components/Icons";
import { useAppDispatch, useAppSelector } from "../../../common/util/hooks";
import { usersActions } from "../../../store";
import type { user, group } from "../../../common/util/type";

interface userListProps {}
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

const UsersList: FC<userListProps> = ({}) => {
  const dispatch = useAppDispatch();
  const [listOpen, setListOpen] = useState<any>({}); //Use group name and the true or false expanded list

  const handleClick = (name: string, id: number) => {
    dispatch(usersActions.setSelectedUser({ type: "groups", id }));
    setListOpen((prev: any) => {
      prev[name] = !prev[name];
      return { ...prev };
    });
  };

  const [allGroups, allUsers, selectedUser] = useAppSelector<
    [group[], user[], user | null]
  >((state) => [
    state.users.groups,
    state.users.users,
    state.users.selectedUser,
  ]);

  useEffect(() => {
    allGroups.forEach((group) => {
      setListOpen((prev: any) => {
        prev[group.name] = false;
        return prev;
      });
    });
  }, [allGroups]);

  return (
    <>
      {allGroups.map((group, index) => {
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
                  .map(({ name, id }: { name: string; id: number }) => {
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
