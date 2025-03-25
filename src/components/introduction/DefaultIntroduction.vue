<script setup>
import { ref, onMounted } from 'vue'
import IconsComponents from './mainContent/IconsComponents.vue'
import IntroductionComponent from './mainContent/IntroductionComponent.vue'
import ScrollImage from './mainContent/ScrollImage.vue'

const components = ref([])

onMounted(() => {
  components.value = document.querySelectorAll('.component')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    })
  }, { threshold: 0.2 })
  components.value.forEach(component => {
    observer.observe(component)
  })
})
</script>

<template>
  <div class="display-flex">
    <div class="component left">
      <IconsComponents />
    </div>
    <div class="component top">
      <IntroductionComponent />
    </div>
    <div class="component right">
      <ScrollImage />
    </div>
  </div>
</template>

<style scoped>
.display-flex {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.component {
  opacity: 0;
  transition: all 0.6s ease-out;
}
.component.left { transform: translateX(-50px); }
.component.top { transform: translateY(-50px); }
.component.right { transform: translateX(50px); }
.component.visible {
  opacity: 1;
  transform: translateY(0) translateX(0);
}
@media (max-width: 768px) {
  .display-flex {
    flex-direction: column;
    align-items: center;
  }
  .component {
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
  }
  .component.left,
  .component.top,
  .component.right {
    transform: translateY(-50px);
  }
}
</style>
