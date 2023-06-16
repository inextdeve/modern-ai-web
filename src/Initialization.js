import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { analyticsActions } from "./store/analytics";
import {
  camerasActions,
  serversActions,
  usersActions,
  authActions,
} from "./store";
import { servers, groups, users, analytics } from "./data/data";
import { useGetCamerasQuery } from "./services/dataInitialization/getCameras";

const Init = () => {
  const dispatch = useDispatch();
  const { data: cameras, isFetching } = useGetCamerasQuery();
  console.log(cameras);
  useEffect(() => {
    if (cameras) dispatch(camerasActions.add(cameras));
    dispatch(camerasActions.setLoading(isFetching));
  }, [dispatch, cameras, isFetching]);

  // useEffect(() => {
  //   // dispatch(camerasActions.add(cameras));
  //   dispatch(serversActions.add(servers));
  //   dispatch(usersActions.add({ users, groups }));
  //   dispatch(analyticsActions.add(analytics));
  // }, []);

  return null;
};

export default Init;
