import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { deleteProject } from './../../../store/slices/projectsSlice';

const ProjectsTable = ({ projects }) => {
  const dispatch = useDispatch()

  const deleteProjectHandler = (id) => {
    dispatch(deleteProject(id))
  };
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-white">Projects List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg text-white">
          <thead>
            <tr className="bg-gray-800 text-center underline">
              <th className="p-3 border border-gray-700">Heading</th>
              <th className="p-3 border border-gray-700">Technology</th>
              <th className="p-3 border border-gray-700">Live Link</th>
              <th className="p-3 border border-gray-700">GitHub Link</th>
              <th className="p-3 border border-gray-700"></th>
            </tr>
          </thead>
          <tbody className="">
            {projects.map((project) => (
              <tr key={project.id} className="bg-gray-900 hover:bg-gray-800 ">
                <td className=" p-3 border border-gray-700">{project.heading}</td>
                <td className="p-3 border text-left border-gray-700">{project.technology}</td>
                <td className="p-3 border border-gray-700">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {project.liveLink}
                  </a>
                </td>
                <td className="p-3 border border-gray-700 ">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 break-all hover:underline"
                  >
                    {project.githubLink}
                  </a>
                </td>
                <td className="p-3 border border-gray-700">
                <div className="flex justify-around">
                    <Link to={`/admin/projectsComp/projects_editform/${project.id}`}
                      className="text-amber-500 hover:text-white px-2 py-1 rounded-full"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      className="text-red-500 hover:text-white px-2 py-1 rounded-full cursor-pointer"
                      onClick={() =>deleteProjectHandler(project.id)}
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;
