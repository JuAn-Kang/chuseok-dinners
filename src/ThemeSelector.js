import React from "react";
import { Moon, Sun } from "./assets";

const ThemeSelector = ({ theme, setTheme, isSelected }) => {
  const label = theme === "light" ? <Sun /> : <Moon />;

  const onClick = () => {
    if (isSelected) return;
    setTheme(theme);
  };

  const selector = "lang-selector" + (isSelected ? " selected" : "");
  return (
    <div role="button" className={selector} onClick={onClick}>
      {label}
    </div>
  );
};

export default ThemeSelector;
