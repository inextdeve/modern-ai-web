import { styled } from "@mui/material";
const Typography = styled("p")(() => ({
  margin: "1.3rem 0 1.3rem 0",
  fontSize: "0.9rem",
  fontWeight: 600,
}));

const Title = ({ children }) => {
  return <Typography>{children}</Typography>;
};

export default Title;
