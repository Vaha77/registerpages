import React from "react";
import { navbar } from "../utils/data";
import { NavLink, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      {navbar.map(({ title, id, path, hidden }) => {
        return (
          !hidden && (
            <NavLink key={id} to={path}>
              {title}
            </NavLink>
          )
        );
      })}

      <div>
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
