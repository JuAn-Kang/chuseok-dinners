import LanguageSelector from "./LanguageSelector";
import ThemeSelector from "./ThemeSelector";
import { FlagComponent, menuEnglish, menuKorean, Doubtful } from "./assets";
import { useState } from "react";
import "./styles.css";

const MenuListItem = ({ name, recipe }) => {
  return (
    <div className="menu-item-wrapper">
      <div className="menu">{name}</div>
      <div className="recipe">{recipe}</div>
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const menu = lang === "ko" ? menuKorean : menuEnglish;

  const languageSelectors = (
    <div className="language-selector-wrapper">
      <LanguageSelector
        lang="ko"
        isSelected={lang === "ko"}
        setLang={setLang}
      />
      <LanguageSelector
        lang="en"
        isSelected={lang === "en"}
        setLang={setLang}
      />
    </div>
  );

  const themeSelectors = (
    <div className="language-selector-wrapper">
      <ThemeSelector
        theme="light"
        isSelected={theme === "light"}
        setTheme={setTheme}
      />
      <ThemeSelector
        theme="dark"
        isSelected={theme === "dark"}
        setTheme={setTheme}
      />
    </div>
  );

  return (
    <div className={theme}>
      <div className="App">
        <div className="header">
          {themeSelectors}
          {languageSelectors}
        </div>
        <div className="doubtful">
          <Doubtful theme={theme} />
        </div>
        <div className="menu-list">
          {menu.map(({ name, recipe }, i) => (
            <MenuListItem key={i} name={name} recipe={recipe} />
          ))}
        </div>
        <div className="flag-wrapper">
          <FlagComponent theme={theme} />
        </div>
      </div>
    </div>
  );
}
