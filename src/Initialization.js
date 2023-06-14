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
import { useGetUserDetailsQuery } from "./services/tokenAuth";

const Init = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  // automatically authenticate user if token is found
  const { data, isFetching, error } = useGetUserDetailsQuery("userDetails", {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });

  useEffect(() => {
    console.log("data", data);
    console.log("error", error);
    if (data) {
      dispatch(authActions.setCredentials(data));
    }
  }, [data, error, dispatch]);

  useEffect(() => {
    dispatch(camerasActions.add(cameras));
    dispatch(serversActions.add(servers));
    dispatch(usersActions.add({ users, groups }));
    dispatch(analyticsActions.add(analytics));
  }, []);

  return null;
};

export default Init;
