import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const Settings = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const handleChange = (value) => {
    i18n.changeLanguage(value.target.value);
    document.getElementById("root").dir = i18n.dir();
    window.localStorage.setItem("lang", value.target.value);
    navigate(0);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="select-lang">{t("globals.language")}</InputLabel>
      <Select
        labelId="select-lang"
        id="select-lang-label"
        value={i18n.language}
        label={t("globals.language")}
        onChange={handleChange}
      >
        <MenuItem value="ar">{t("languages.ar")}</MenuItem>
        <MenuItem value="en">{t("languages.en")}</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Settings;
