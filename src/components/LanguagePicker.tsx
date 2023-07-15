import React, { useState } from "react";
import "./LanguagePicker.css";
import { useTranslation } from "react-i18next";

const LanguagePicker: React.FC = () => {

  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="dropdown">
        <select onChange={(e) => handleLanguageChange(e.target.value)}>
          <option value="en">EN</option>
          <option value="th">TH</option>
        </select>
      </div>
    </>
  );
};

export default LanguagePicker;
