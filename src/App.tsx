import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutStyle from "./components/Layoutstyle";
import i18n from "./i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Home from "./components/Home";
import FormTable from "./components/FormTable";
import useSelection from "antd/es/table/hooks/useSelection";
import { slice1Selector } from "./store/slices/slice1";
import { useSelector } from "react-redux";

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage("en");
  },[]);

  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Layout&Style" element={<LayoutStyle/>} />
        <Route path="/FormTable" element={<FormTable/>} />
      </Routes>
      
    </div>
  );
}

export default App;
