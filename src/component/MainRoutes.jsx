import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Admin } from "../pages/Admin";
import { Login } from "../pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import { EditProduct } from "../pages/EditProduct";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/add-product"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <PrivateRoute>
            <EditProduct />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};
