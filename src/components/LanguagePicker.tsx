import React, { useState } from "react";
import "./LanguagePicker.css";
import { useTranslation } from "react-i18next";
import { Select } from "antd";

const LanguagePicker: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <div className="dropdown">
        <Select onChange={(e) => handleLanguageChange(e)} style={{width:70}}>
          <Select.Option value="en" selected>EN</Select.Option>
          <Select.Option value="th">TH</Select.Option>
        </Select>
      </div>
    </>
  );
};

export default LanguagePicker;
