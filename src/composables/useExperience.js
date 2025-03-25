import { computed } from "vue";

export function useExperience(startYear = 2022) {
  const experienceYears = computed(() => {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  });

  return { experienceYears };
}
