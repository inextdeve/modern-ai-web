import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Card,
  Stack,
  Typography,
  LinearProgress,
} from "@mui/material";
import { authActions } from "src/store";
import { useGetUserDetailsQuery } from "../../services/tokenAuth";

// components
import PageContainer from "src/components/container/PageContainer";
import Logo from "src/layouts/full/shared/logo/Logo";
import AuthLogin from "./auth/AuthLogin";

const Login2 = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetUserDetailsQuery("userDetails", {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });

  useEffect(() => {
    if (data) {
      dispatch(authActions.setCredentials(data));
    }
  }, [data, dispatch]);

  // redirect authenticated user to profile screen
  if (userInfo) {
    return <Navigate to="/" />;
  }

  if (isFetching) {
    return <LinearProgress />;
  }

  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
                subtext={
                  <Typography
                    variant="subtitle1"
                    textAlign="center"
                    color="textSecondary"
                    mb={1}
                  >
                    Balady Ai
                  </Typography>
                }
                subtitle={
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="center"
                    mt={3}
                  >
                    {/* <Typography color="textSecondary" variant="h6" fontWeight="500">
                      New to Balady Ai?
                    </Typography>
                    <Typography
                      component={Link}
                      to="/auth/register"
                      fontWeight="500"
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Create an account
                    </Typography> */}
                  </Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Login2;
