import "./Home.css";
import { Link } from "react-router-dom";
import LanguagePicker from "./LanguagePicker";
import { useTranslation } from "react-i18next";
import React from "react";
import { Col, Row } from "antd";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <LanguagePicker />
      <div className="container">
        <Row justify="center" align="middle" style={{minHeight: '90vh'}}>
          <Col span={8}>
            <Link to="/Layout&Style">
              <div className="card">
                <h3>{t("HOMEPAGE.TEST1")}</h3>
                <p>{t("HOMEPAGE.CONTENT1")}</p>
              </div>
            </Link>
          </Col>
          <Col span={8}>
            <div className="card">
              <h3>{t("HOMEPAGE.TEST2")}</h3>
              <p>{t("HOMEPAGE.CONTENT2")}</p>
            </div>
          </Col>
          <Col span={8}>
            <Link to="/FormTable">
              <div className="card">
                <h3>{t("HOMEPAGE.TEST3")}</h3>
                <p>{t("HOMEPAGE.CONTENT3")}</p>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
