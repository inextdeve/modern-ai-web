import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

export default function CustomizedInputBase() {
  const { t } = useTranslation();
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      elevation={0}
    >
      {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      {/* Menu Icon You Can Check It In Mui : Beut */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={t("globals.search")}
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
    </Paper>
  );
}
