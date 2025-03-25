<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n'; 

const { locale } = useI18n(); 
const language = ref('br'); 

watch(language, (newLanguage) => {
  locale.value = newLanguage; 
});
</script>

<template>
  <div>
    <div class="social-links">
      <a class="social-link" href="https://www.linkedin.com/in/gabriel-limadev/" target="_blank" rel="noopener noreferrer">
        <i class="mdi mdi-linkedin"></i>
      </a>
      <a class="social-link" href="https://github.com/GabrielLima2803/" target="_blank" rel="noopener noreferrer">
        <i class="mdi mdi-github"></i>
      </a>
      <a class="social-link" href="/src/assets/CV_Gabriel_Lima.pdf" download>
        <i class="mdi mdi-download"></i>
      </a>
    </div>
    <div class="select-container">
      <div class="select-wrapper">
        <select v-model="language" class="select">
          <option value="en">en</option>
          <option value="br">pt-br</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}
.social-link {
  width: max-content;
  background-color: #151c28;
  color: #a395e9;
  border-radius: 0.4rem;
  padding: 0.25rem;
  transition: all 0.4s ease;
  text-decoration: none;
  font-size: 1.25rem;
}
.social-link:hover {
  background-color: #a395e9;
}
.social-link:hover i {
  color: #151c28;
}
.social-link i {
  background-color: transparent;
  transition: all 0.4s ease;
}
.select-wrapper {
  position: relative;
  display: inline-block;
  margin-top: 5px;
}
.select {
  width: max-content;
  min-width: max-content;
  background-color: #151c28;
  color: #a395e9;
  border-radius: 0.4rem;
  padding: 0.15rem 0.25rem;
  padding-right: 1.5rem;
  transition: all 0.4s ease;
  border: 1px solid white;
  font-size: 0.875rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.select-wrapper::after {
  content: '>';
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  pointer-events: none;
  color: #a395e9;
}
@media (max-width: 768px) {
  .social-links {
    flex-direction: row;
    justify-content: center;
  }
  .social-link {
    font-size: 1rem;
    padding: 0.2rem;
  }
  .select {
    font-size: 0.8rem;
  }
}
</style>
