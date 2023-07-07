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
import { useGetAnalyticModulesQuery } from "./services/dataInitialization/getAnalyticModules";
import { useGetServersQuery } from "./services/dataInitialization/getServers";

const Init = () => {
  const dispatch = useDispatch();
  const { data: cameras, isFetching } = useGetCamerasQuery();
  const { data: analyticModules } = useGetAnalyticModulesQuery();
  const { data: servers, isFetching: serverIsFetching } = useGetServersQuery();

  useEffect(() => {
    //Cameras
    if (cameras) dispatch(camerasActions.add(cameras));

    dispatch(camerasActions.setLoading(isFetching));
  }, [dispatch, cameras, isFetching]);

  useEffect(() => {
    //Analytic Modules
    if (analyticModules) dispatch(analyticsActions.add(analyticModules));
  }, [dispatch, analyticModules]);

  useEffect(() => {
    //Servers
    if (servers) dispatch(serversActions.add(servers));

    dispatch(serversActions.setLoading(serverIsFetching));
  }, [dispatch, servers]);
  // useEffect(() => {
  //   // dispatch(camerasActions.add(cameras));
  //   dispatch(serversActions.add(servers));
  //   dispatch(usersActions.add({ users, groups }));
  //   dispatch(analyticsActions.add(analytics));
  // }, []);

  return null;
};

export default Init;
