<script setup>
import { ref, defineProps, computed } from 'vue';
import ModalDescription from './ModalDescription.vue';

const showModal = ref(false);

const props = defineProps({
  name: String,
  imageUrl: String,
  description: String,
  skills: Array,
  githubLink: String,
  demoLink: String
});

const computedImageUrl = computed(() =>
  props.imageUrl ? props.imageUrl : "https://placehold.co/600x400"
);
</script>

<template>
  <div class="card">
    <div class="wrapper">
      <div class="description" @click="showModal = true">DESCRIÇÃO DO PROJETO</div>
    </div>

    <img :src="computedImageUrl" :alt="name" class="project-image" />

    <h3>{{ name }}</h3>

    <hr />

    <div class="skills">
      <span v-for="tag in skills" :key="tag" class="tag">{{ tag.name }}</span>
    </div>

    <hr />

    <div class="links">
      <a :href="githubLink" target="_blank" class="github-link">
        Github Link <i class="mdi mdi-github"></i>
      </a>
      <a v-if="demoLink" :href="demoLink" target="_blank" class="demo-link">Demo ▶</a>
    </div>
  </div>

  <ModalDescription v-model="showModal" :name="name" :description="description" />
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: #151c28;
  border-radius: 1rem;
  padding: 2rem;
  margin: 1rem;
  width: 100%;
  max-width: 350px;
  height: auto;
  margin: auto 0;
  height: 450px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  transition: transform 0.3s ease;
}

.description {
  background-color: #888b91;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  width: fit-content;
  align-self: flex-start;
  display: flex;
  cursor: pointer;
  transition: .7s;
  margin-bottom: 10px;
}
.description:hover {
  background-color: #666769;
}

.project-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
}

hr {
  border: none;
  height: 1px;
  background-color: #888b91;
  margin: 10px 0;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}

.tag {
  background-color: #202a40;
  color: #888b91;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
}

.links {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  margin-top: 5px;
  font-weight: 600;
}

.demo-link,
.github-link {
  color: #888b91;
}

.github-link {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
</style>
