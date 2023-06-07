import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { analyticsActions } from "./store/analytics";
import { camerasActions, serversActions, usersActions } from "./store";
import { cameras, servers, groups, users, analytics } from "./data/data";

const Init = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(camerasActions.add(cameras));
    dispatch(serversActions.add(servers));
    dispatch(usersActions.add({ users, groups }));
    dispatch(analyticsActions.add(analytics));
  }, []);

  return null;
};

export default Init;
