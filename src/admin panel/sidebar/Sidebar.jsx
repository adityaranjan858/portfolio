import React from "react";
import { NavLink, useLocation } from "react-router";

const Sidebar = () => {
  const location = useLocation()
  const currentPath = location.pathname.replace("/admin/", "").split("/")[0];

  const menuItems = [
    { label: "Dashboard", path: "/admin" },
    { label: "Projects", path: "/admin/projectsComp" },
  ]
  return (
    <>
    <div className="text-center">
      <h1 className="text-left font-bold py-2">Admin Panel</h1>
      <ul className="my-2 flex flex-col ">
        {menuItems.map((item, index) =>{
          const itemPath = item.path.replace("/admin/","").split("/")[0]
          const isActive = currentPath === itemPath

          return (
            <NavLink
            key={index}
            to={item.path}
            end
            className={isActive
                ? "border text-primary font-bold rounded-3xl px-4 py-2 w-1/2 sm:w-full my-2 m-auto"
                : "bg-primary text-white rounded-3xl px-4 py-2 my-2 m-auto w-1/2 sm:w-full hover:bg-primary-hover hover:text-black"
            }
          >
            {item.label.toUpperCase()}
          </NavLink>
          )
        } )}
      </ul>
    </div>
    </>
  );
};

export default Sidebar;
