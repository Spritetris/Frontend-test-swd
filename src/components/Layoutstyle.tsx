import React, { useState } from "react";
import { Layout, Space, Col, Row, Button } from "antd";
import LanguagePicker from "./LanguagePicker";
import "./Layoutstyle.css";
import { useTranslation } from "react-i18next";
import { shapeList } from "../model";
import { Link } from "react-router-dom";

const { Header } = Layout;

const headerStyle: React.CSSProperties = {
  color: "black",
  fontSize: "20px",
  fontWeight: "bold",
  backgroundColor: "transparent",
};

const LayoutStyle: React.FC = () => {
  const { t } = useTranslation();
  type shapes = {
    shapes: shapeList[];
    setShape: React.Dispatch<React.SetStateAction<shapeList[]>>;
  };

  const [shapes, setShape] = useState<shapeList[]>([
    {
      id: 1,
      shape: "square",
    },
    {
      id: 2,
      shape: "circle",
    },
    {
      id: 3,
      shape: "oval",
    },
    {
      id: 4,
      shape: "trapezoid",
    },
    {
      id: 5,
      shape: "rectangle",
    },
    {
      id: 6,
      shape: "parallelogram",
    },
  ]);
  const [style, setStyle] = useState("center");
  const [style2, setStyle2] = useState("end");

  const moveLeft = () => {
    const shapes_shift = shapes.shift();
    shapes.push(
      shapes_shift || {
        id: 1,
        shape: "square",
      }
    );
    setShape([...shapes]);
  };

  const moveRight = () => {
    const shapes_pop = shapes.pop();
    shapes.unshift(
      shapes_pop || {
        id: 1,
        shape: "square",
      }
    );
    setShape([...shapes]);
  };

  const movePosition = () => {
    if (style === "center") {
      setStyle("end");
    } else {
      setStyle("center");
    }

    if (style2 === "center") {
      setStyle2("end");
    } else {
      setStyle2("center");
    }
  };

  function shuffle(a: any) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  const randomShape = () => {
    const result = shuffle(shapes);
    setShape([...result]);
  };

  return (
    <div>
      <div className="header">
        <Header style={headerStyle}>{t("HOMEPAGE.CONTENT1")}</Header>
        <div className="flexbtn">
          <LanguagePicker />
          <Link to="/">
            <Button>หน้าหลัก</Button>
          </Link>
        </div>
      </div>

      <Row justify="center">
        <Col span={4} className="move-shape" onClick={moveLeft}>
          <div className="arrow-box">
            <div className="triangle-left"></div>
            <div className="label">{t("HOMEPAGE.MOVESHAPE")}</div>
          </div>
        </Col>
        <Col span={8} className="move-position" onClick={movePosition}>
          <div className="arrow-box">
            <div className="triangle-up"></div>
            <div className="triangle-bottom"></div>
            <div className="label">{t("HOMEPAGE.MOVEPOSITION")}</div>
          </div>
        </Col>
        <Col span={4} className="move-shape" onClick={moveRight}>
          <div className="arrow-box">
            <div className="triangle-right"></div>
            <div className="label">{t("HOMEPAGE.MOVESHAPE")}</div>
          </div>
        </Col>
      </Row>
      <hr />
      <div className="box">
        <Row className={style}>
          {shapes.slice(0, 3).map((shape) => {
            return (
              <Col span={4} className="move-shape" onClick={randomShape}>
                <div className="arrow-box">
                  <div className={shape.shape}></div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className={style2}>
          {shapes.slice(3, 6).map((shape) => {
            return (
              <Col span={4} className="move-shape" onClick={randomShape}>
                <div className="arrow-box">
                  <div className={shape.shape}></div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default LayoutStyle;
