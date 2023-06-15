import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { camerasReducer as cameras } from "./cameras";
import { serversReducer as servers } from "./servers";
import { usersReducer as users } from "./users";
import { analyticsReducer as analytics } from "./analytics";
import { authReducer as auth } from "./auth";
import { tokenAuth } from "src/services/tokenAuth";
import { getCameras, getAnalyticModules, getServers, getUsers } from "src/services/dataInitialization";

const reducer = combineReducers({
  cameras,
  servers,
  users,
  analytics,
  auth,
  [tokenAuth.reducerPath]: tokenAuth.reducer,
  [getCameras.reducerPath]: getCameras.reducer,
  [getAnalyticModules.reducerPath]: getAnalyticModules.reducer,
  [getServers.reducerPath]: getServers.reducer,
  [getUsers.reducerPath]: getUsers.reducer
});

export { camerasActions } from "./cameras";
export { serversActions } from "./servers";
export { usersActions } from "./users";
export { analyticsActions } from "./analytics";
export { authActions } from "./auth";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenAuth.middleware, getCameras.middleware,getAnalyticModules.middleware, getServers.middleware, getUsers.middleware),
});

export default store;
