import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { navbar } from "./utils/data";
import "materialize-css";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route>
          {navbar.map(({ path, Element, id, hidden, useParams }) => {
            return (
              !useParams &&
              hidden && <Route key={id} path={path} element={Element} />
            );
          })}
        </Route>
        <Route element={<Navbar />}>
          {navbar.map(({ path, Element, id, hidden, useParams }) => {
            return (
              (useParams || !hidden) && (
                <Route key={id} path={path} element={Element} />
              )
            );
          })}
        </Route>
      </Routes>
    </>
  );
};

export default App;
