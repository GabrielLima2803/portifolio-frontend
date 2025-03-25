<script setup>
import FormationComponent from './mainContent/FormationComponent.vue';
</script>

<template>
  <div class="contact-top">
    <p>{{ $t('FormationOne') }}</p>
    <h3>{{ $t('FormationSecond') }}</h3>
  </div>
  <FormationComponent />
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
@media (max-width: 768px) {
  .contact-top {
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
}
</style>
