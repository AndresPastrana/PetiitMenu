import React from "react";
import { Routes, Route } from "react-router-dom";
import MenuNav from "../components/MenuNav";
import Main from "../components/Main";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/menu" element={<MenuNav />} />

      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default AppRoutes;
