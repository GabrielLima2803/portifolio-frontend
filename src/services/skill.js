import axios from "axios";

class SkillService {
  async getAllSkills(type = null) {
    let url = "/skills";
    if (type) {
      url += `?type=${encodeURIComponent(type)}`;
    }
    const response = await axios.get(url);
    return response;
  }
}

export default SkillService;
