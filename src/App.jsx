import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import { lazy, Suspense } from "react";
import PageNotFound from "./utils/PageNotFound";

function App() {

  // Lazy Admin 
const Admin = lazy(() => import("./admin panel/Admin"));
const Dashboard = lazy(() => import("./admin panel/Dashboard"));
const ProjectsComp = lazy(() => import("./admin panel/forms/projects/ProjectsComp"));
const ProjectsAddForm = lazy(() => import("./admin panel/forms/projects/ProjectsAddForm"));
const ProjectsEditForm = lazy(() => import("./admin panel/forms/projects/ProjectsEditForm"));


// Lazy Pages
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contacts = lazy(() => import("./components/Contacts"));

  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Admin  */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />

          <Route path="projectsComp" element={<Suspense fallback={<div className="text-center mt-10">Loading Projects...</div>}> <ProjectsComp /> </Suspense>} >
            <Route index element={<ProjectsAddForm />} />
            <Route path="projects_editform/:id" element={<ProjectsEditForm />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path="*" element={<PageNotFound /> } />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
