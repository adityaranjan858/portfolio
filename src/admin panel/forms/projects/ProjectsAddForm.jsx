import React, { useState } from "react";
import Button from "../../../utils/Button";
import style from "./ProjectsComp.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addProject, toggle } from "../../../store/slices/projectsSlice";
const ProjectsAddForm = () => {
  const [inputVal, setInputVal] = useState({
    heading: "",
    technology: "",
    liveLink: "",
    githubLink: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    heading: "",
    technology: "",
    liveLink: "",
    githubLink: "",
  });
  const { isVisible } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
    setErrorMsg({ ...errorMsg, [e.target.name]: "" });
  };

  const validation = () => {
    let valid = true;
    let errors = {};
    if (inputVal.heading === "") {
      errors.heading = "Heading is required";
      valid = false;
    }
    if (inputVal.technology === "") {
      errors.technology = "Technology is required";
      valid = false;
    }

    if (inputVal.liveLink === "" || (!inputVal.liveLink.startsWith("http://") && !inputVal.liveLink.startsWith("https://"))) {
      errors.liveLink = "Please provide a valid live link (e.g., https://example.com)";
      valid = false;
    }
    
    if (inputVal.githubLink === "" || !inputVal.githubLink.startsWith("https://github.com/")) {
      errors.githubLink = "Please provide a valid GitHub link (e.g., https://github.com/username/repo)";
      valid = false;
    }
    
    setErrorMsg(errors);
    return valid;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (validation() === false) return;
    dispatch(addProject(inputVal));
    dispatch(toggle());
    setInputVal({
      heading: "",
      technology: "",
      liveLink: "",
      githubLink: "",
    });
    setErrorMsg({
      heading: "",
      technology: "",
      liveLink: "",
      githubLink: "",
    });
  };

  const addProjectHandler = () => {
    dispatch(toggle());
    setInputVal({
      heading: "",
      technology: "",
      liveLink: "",
      githubLink: "",
    });
    setErrorMsg({
      heading: "",
      technology: "",
      liveLink: "",
      githubLink: "",
    });
  };
  return (
    <>
      <h1 className="text-2xl font-bold">Projects Add Form</h1>
      {!isVisible && (
        <div className="flex justify-end my-5">
          <Button bgColor="bg-primary text-white" onClick={addProjectHandler}>Add Project +</Button>
        </div>
      )}
      {isVisible && (
        <form onSubmit={submitHandler} noValidate>
          <div className="grid grid-cols mt-10 lg:grid-cols-2">
            <div className={`${style["form-control"]}`}>
              <label htmlFor="heading">Heading:</label>
              <input
                placeholder="Ex: Ecommerce App..."
                className={`border placeholder:text-gray-500 border-gray-500 focus:outline-none  p-2 mx-2 mt-2 rounded-xl ${
                  errorMsg.heading
                    ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500 "
                    : "focus:border-primary focus:ring-primary focus:ring-1 focus:ring-opacity-50"
                }`}
                type="text"
                name="heading"
                value={inputVal.heading}
                onChange={handleInputChange}
                id="heading"
              />
              {errorMsg.heading && (
                <p className="text-left mx-4 text-red-500">
                  {errorMsg.heading}
                </p>
              )}
            </div>

            <div className={`${style["form-control"]}`}>
              <label htmlFor="technology">Technology Used:</label>
              <textarea
                placeholder="Ex: React.js, JavaScript, Html..."
                rows="1"
                className={`border placeholder:text-gray-500 border-gray-500 focus:outline-none  p-2 mx-2 mt-2 rounded-xl ${
                  errorMsg.technology
                    ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500 "
                    : "focus:border-primary focus:ring-primary focus:ring-1 focus:ring-opacity-50"
                }`}
                name="technology"
                value={inputVal.technology}
                onChange={handleInputChange}
                id="technology"
              />
              {errorMsg.technology && (
                <p className="text-left mx-4 text-red-500">
                  {errorMsg.technology}
                </p>
              )}
            </div>

            <div className={`${style["form-control"]}`}>
              <label htmlFor="liveLink">Live Link:</label>
              <input
                placeholder="Ex: https://example.xyz"
                className={`border placeholder:text-gray-500 border-gray-500 focus:outline-none  p-2 mx-2 mt-2 rounded-xl ${
                  errorMsg.liveLink
                    ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500 "
                    : "focus:border-primary focus:ring-primary focus:ring-1 focus:ring-opacity-50"
                }`}
                type="text"
                value={inputVal.liveLink}
                onChange={handleInputChange}
                id="liveLink"
                name="liveLink"
              />
              {errorMsg.liveLink && (
                <p className="text-left mx-4 text-red-500">
                  {errorMsg.liveLink}
                </p>
              )}
            </div>

            <div className={`${style["form-control"]}`}>
              <label htmlFor="githubLink">Github Link:</label>
              <input
placeholder="Ex: https://github.com/username/repo"

                className={`border placeholder:text-gray-500 border-gray-500 focus:outline-none  p-2 mx-2 mt-2 rounded-xl ${
                  errorMsg.githubLink
                    ? "border-red-500 text-red-600 focus:ring-red-500 focus:border-red-500 "
                    : "focus:border-primary focus:ring-primary focus:ring-1 focus:ring-opacity-50"
                }`}
                type="url"
                value={inputVal.githubLink}
                onChange={handleInputChange}
                id="githubLink"
                name="githubLink"
              />
              {errorMsg.githubLink && (
                <p className="text-left mx-4 text-red-500">
                  {errorMsg.githubLink}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-center sm:justify-end">
            <Button
              className="border cursor-pointer border-gray-500 m-2 mt-5"
              bgColor="bg-sky-500 hover:bg-sky-400 text-white"
              type="submit"
            >
              Submit
            </Button>
            <Button
              className="border cursor-pointer border-gray-500 text-white m-2 mt-5"
              onClick={addProjectHandler}
              type="button"
            >
              Close
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default ProjectsAddForm;
