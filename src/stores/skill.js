import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import SkillService from "@/services/skill";

export const useSkillStore = defineStore("skill", () => {
  const state = reactive({
    skillHard: [],
    skillTools: []
  });

  const skillService = new SkillService();

  const skillHard = computed(() => state.skillHard);
  const skillTools = computed(() => state.skillTools);

  async function getSkills() {
    try {
      const response = await skillService.getAllSkills();
      state.skillHard = response.data.filter(skill => {
        const type = skill.type?.toLowerCase();
        return type === "frameworks" || type === "languages";
      });
      state.skillTools = response.data.filter(skill => {
        const type = skill.type?.toLowerCase();
        return type === "tools";
      });
    } catch (error) {
      console.error("Erro ao buscar skills:", error);
    }
  }

  return {
    skillHard,
    skillTools,
    getSkills
  };
});
