<script setup>
import ProjectsList from './mainContent/ProjectsList.vue';
</script>

<template>
  <div class="projects-top">
    <p>{{ $t('ProjectOne') }}</p>
    <h3>{{ $t('ProjectSecond') }}</h3>
  </div>
  <ProjectsList />
</template>

<style scoped>
.projects-top {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 5.5rem;
  margin-bottom: 3rem;
  padding: 0 1rem;
  text-align: center;
}

.projects-top > p {
  color: #888b91;
  font-size: 0.75rem;}



@media (max-width: 480px) {
  .projects-top {
    margin-top: 3rem;
  }

  .projects-top h3 {
    font-size: 1.5rem; 
  }
}
</style>
