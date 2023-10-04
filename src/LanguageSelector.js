import React from "react";

const LanguageSelector = ({ lang, setLang, isSelected }) => {
  const label = lang === "ko" ? "한" : "A";

  const onClick = () => {
    if (isSelected) return;
    setLang(lang);
  };

  const selector = "lang-selector" + (isSelected ? " selected" : "");
  return (
    <div role="button" className={selector} onClick={onClick}>
      {label}
    </div>
  );
};

export default LanguageSelector;
