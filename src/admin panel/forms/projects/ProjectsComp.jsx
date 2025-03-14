import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { fetchProjects } from "../../../store/slices/projectsSlice";
import ProjectsTable from "./ProjectsTable";

const ProjectsComp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const { projects } = useSelector((state) => state.projects);
  return (
    <>
      <Outlet />
      <ProjectsTable projects={projects} />
    </>
  );
};

export default ProjectsComp;
