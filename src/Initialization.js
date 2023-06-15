import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { analyticsActions } from "./store/analytics";
import {
  camerasActions,
  serversActions,
  usersActions,
  authActions,
} from "./store";
import { cameras, servers, groups, users, analytics } from "./data/data";

const Init = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(camerasActions.add(cameras));
    dispatch(serversActions.add(servers));
    dispatch(usersActions.add({ users, groups }));
    dispatch(analyticsActions.add(analytics));
  }, []);

  return null;
};

export default Init;
