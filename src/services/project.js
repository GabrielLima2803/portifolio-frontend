import axios from "axios";

class ProjectService {
  async getAllProjects() {
    const response = await axios.get("/projects")
    return response
  }
}

export default ProjectService