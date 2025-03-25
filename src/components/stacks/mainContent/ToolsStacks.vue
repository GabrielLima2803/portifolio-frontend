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
    <div class="container-header">
      <h3>Tools</h3>
    </div>
    <div class="grid">
      <div v-for="tool in skillStore.skillTools" :key="tool.id" class="item">
        <span class="dot"></span> {{ tool.name }}
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

.container-header {
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

h3 {
  color: #a395e9;
  margin: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

.item {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem;
  color: white;
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
.item {
  background-color: transparent;
  transition: all 0.4s ease;
}
</style>
