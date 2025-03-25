<script setup>
import ExperiencesComponent from './mainContent/ExperiencesComponent.vue';
</script>

<template>
  <div class="contact-top">
    <p>{{ $t('ExperienceOne') }}</p>
    <h3>{{ $t('ExperienceSecond') }}</h3>
  </div>
  <div class="wrapper">
    <ExperiencesComponent />
  </div>
</template>

<style scoped>
.contact-top {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 5.5rem;
  margin-bottom: 3rem;
}
.contact-top > p {
  color: #888b91;
  font-size: 0.75rem;
}
.wrapper {
  width: 100%;
}
@media (max-width: 768px) {
  .contact-top {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
}
</style>
