// app/services/auth/authService.js
// React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getAnalyticModules = createApi({
  reducerPath: "getAnalyticModules",
  baseQuery: fetchBaseQuery({
    // base url of backend API
    baseUrl: "",
    // prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.userToken;
      if (token) {
        // include token in req header
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (builder) => ({
    getAnalyticModules: builder.query({
      query: () => ({
        url: "api/analytics",
        method: "GET",
      }),
    }),
  }),
});

// export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAnalyticModulesQuery } = getAnalyticModules;
