import "./Home.css";
import { Link } from "react-router-dom";
import LanguagePicker from "./LanguagePicker";
import { useTranslation } from "react-i18next";
import React from "react";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <LanguagePicker />
      <div className="container">
        <Link to="/Layout&Style">
          <div className="card">
            <h3>{t("HOMEPAGE.TEST1")}</h3>
            <p>{t("HOMEPAGE.CONTENT1")}</p>
          </div>
        </Link>
        <div className="card">
          <h3>{t("HOMEPAGE.TEST2")}</h3>
          <p>{t("HOMEPAGE.CONTENT2")}</p>
        </div>
        <Link to="/FormTable">
        <div className="card">
          <h3>{t("HOMEPAGE.TEST3")}</h3>
          <p>{t("HOMEPAGE.CONTENT3")}</p>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
