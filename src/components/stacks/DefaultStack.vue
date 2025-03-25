<script setup>
import HardStacks from './mainContent/HardStacks.vue'
import ToolsStacks from './mainContent/ToolsStacks.vue'
</script>

<template>
  <div class="about-top">
    <p>{{ $t('habiliaddeOne') }}</p>
    <h3>{{ $t('habiliaddeSecond') }}</h3>
  </div>
  <div class="wrapper">
    <div class="component left">
      <HardStacks />
    </div>
    <div class="component right">
      <ToolsStacks />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 3rem;
  flex-wrap: wrap;
  margin: 0 auto;
}

.about-top {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 5.5em;
  margin-bottom: 3rem;
}

.about-top > p {
  color: #888b91;
  font-size: 0.75rem;
}

.component {
  opacity: 0;
  transition: all 0.6s ease-out;
}

.component.left {
  transform: translateX(-50px);
}

.component.right {
  transform: translateX(50px);
}

.component.visible {
  opacity: 1;
  transform: translateY(0) translateX(0);
}
</style>
