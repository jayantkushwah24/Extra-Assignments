// 7. Create a React component that calls the projects api and list all the projects when the page
// loads with titles and description. Create buttons saying “Show Details” for each project. On click
// of the button show title, description, technologies, completed of that project only
import { useEffect, useState } from "react";
import { fakeFetch } from "../Data/FakeFetch7";

export function RenderProject() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fakeFetch("https://example.com/api/projects");
        if (response.status === 200) {
          setProjects(response.data.projects);
        } else {
          setError("Failed to fetch projects");
        }
      } catch {
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleShowDetail = (project) => {
    setSelectedProject(project);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <button onClick={() => handleShowDetail(project)}>
            Show Details
          </button>
          <hr />
        </div>
      ))}

      {selectedProject && (
        <div>
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.description}</p>
          <p>Technologies: {selectedProject.technologies.join(", ")}</p>
          <p>Completed: {selectedProject.completed ? "Yes" : "No"}</p>
        </div>
      )}
    </>
  );
}
