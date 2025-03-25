<template>
  <div class="image-container component" ref="container">
    <img src="https://i.ibb.co/XkNW9qpw/Programming-amico.png" alt="Centered Image" class="floating">
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const container = ref(null)
onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    })
  }, { threshold: 0.2 })
  observer.observe(container.value)
})
</script>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  opacity: 0;
  margin-top: 5rem;
  transform: translateY(50px);
  transition: all 0.6s ease-out;
}
.image-container.visible {
  opacity: 1;
  transform: translateY(0);
}

.floating {
  max-width: 300px;
  height: auto;
  animation: floatAnimation 2s ease-in-out infinite;
}

@keyframes floatAnimation {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  img {
    max-width: 80%;
  }
}
</style>
