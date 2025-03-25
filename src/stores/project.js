import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import ProjectService from "@/services/project";

export const useProjectStore = defineStore('project', () => {
  const state = reactive({
    projects: []
  })

  const projects = computed(() => state.projects)
  const projectService = new ProjectService

  async function getProjects() {
    try {
      const response = await projectService.getAllProjects()
      console.log("Dados", state.projects)
      console.log("Response", response)
      state.projects = response.data
    } catch (error) {
      console.error(error)
    }
  }
  return {
    projects,
    getProjects
  }
})