import { Link } from "react-router-dom";
import { ReactComponent as LogoDark } from "src/assets/images/logos/dark-logo.svg";
import { styled, Typography } from "@mui/material";

const LinkStyled = styled("p")(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Logo = () => {
  return (
    <LinkStyled>
      <Typography sx={{ fontSize: "2rem", fontWeight: "900" }}>
        Balady .AI
      </Typography>
    </LinkStyled>
  );
};

export default Logo;
