<script setup>
import { onMounted } from "vue";
import { useSkillStore } from "@/stores/skill";

const skillStore = useSkillStore();

onMounted(() => {
  skillStore.getSkills();
});

</script>

<template>
  <div class="container">
    <div class="title">
      <h3>Frameworks & <br />Linguagens</h3>
    </div>
    <div class="grid">
      <div v-for="skill in skillStore.skillHard" :key="skill.id" class="item">
        <span class="dot"></span> {{ skill.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #151c28;
  padding: 4rem;
  border-radius: 1.25rem;
  max-width: 800px;
  margin: auto;
  text-align: center;
}

h3 {
  color: #a395e9;
  margin-bottom: 1rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.grid > div {
  color: white;
}

.item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem;
  color: #c2a8fa;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background 0.3s;
}

.dot {
  width: 8px;
  height: 8px;
  background-color: #a395e9;
  border-radius: 50%;
}

.container h3,
.grid,
.item,
.title {
  background-color: transparent;
  transition: all 0.4s ease;
}

.title {
  padding-bottom: 1rem;
}

h3 {
  margin: 0;
}

.mb {
  margin-bottom: 1rem;
}
</style>
