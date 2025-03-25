<script setup>
import { ref, onMounted, computed } from 'vue';
import CardProject from './CardProject.vue';
import { useProjectStore } from '@/stores/project';

const projectStore = useProjectStore();

const currentPage = ref(1);
const projectsPerPage = 6;

onMounted(projectStore.getProjects);

const totalPages = computed(() => {
  return Math.ceil(projectStore.projects.length / projectsPerPage);
});

const displayedProjects = computed(() => {
  const startIndex = (currentPage.value - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  return projectStore.projects.slice(startIndex, endIndex);
});

const goToPrevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const goToNextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};
</script>

<template>
  <div class="container">
    <div class="pagination-buttons">
      <div id="prev-button" class="button" @click="goToPrevPage" :disabled="currentPage === 1">
        <i class="mdi mdi-chevron-left"></i>
      </div>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <div id="next-button" class="button" @click="goToNextPage" :disabled="currentPage === totalPages">
        <i class="mdi mdi-chevron-right"></i>
      </div>
    </div>

    <div class="cards">
      <CardProject
        v-for="project in displayedProjects"
        :key="project.id"
        :name="project.name"
        :imageUrl="project.imageUrl"
        :description="project.description"
        :skills="project.skills"
        :githubLink="project.urlGithub"
        :demoLink="project.urlProject"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.pagination-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
}

.button {
  cursor: pointer;
  background-color: #151c28;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #a395e9;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
  margin: 0 1rem;
}

.button:hover {
  background-color: #a395e9;
  color: #151c28;
}

.button:disabled {
  background-color: #aaa;
  color: #333;
  cursor: not-allowed;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 480px) {
  .cards {
    grid-template-columns: 1fr;
  }

  .button {
    padding: 0.8rem;
    margin: 1rem 0;
  }

  .pagination-buttons {
    max-width: 150px;
  }
}
</style>
