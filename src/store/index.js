import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { camerasReducer as cameras } from "./cameras";
import { serversReducer as servers } from "./servers";
import { usersReducer as users } from "./users";
import { analyticsReducer as analytics } from "./analytics";
import { authReducer as auth } from "./auth";
import { tokenAuth } from "src/services/tokenAuth";

const reducer = combineReducers({
  cameras,
  servers,
  users,
  analytics,
  auth,
  [tokenAuth.reducerPath]: tokenAuth.reducer,
});

export { camerasActions } from "./cameras";
export { serversActions } from "./servers";
export { usersActions } from "./users";
export { analyticsActions } from "./analytics";
export { authActions } from "./auth";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenAuth.middleware),
});

export default store;
