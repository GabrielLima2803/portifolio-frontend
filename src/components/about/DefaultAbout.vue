<template>
  <div class="about-top">
    <p>{{ $t('myIntro') }}</p>
    <h3>{{ $t('aboutMe') }}</h3>
  </div>
  <div class="wrapper">
    <div class="component left">
      <ImageAbout />
    </div>
    <div class="component right">
      <AboutComponent />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AboutComponent from './mainContent/AboutComponent.vue'
import ImageAbout from './mainContent/ImageAbout.vue'
const components = ref([])
onMounted(() => {
  components.value = document.querySelectorAll('.component')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    })
  }, { threshold: 0.2 })
  components.value.forEach(comp => observer.observe(comp))
})
</script>

<style scoped>
.about-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.5rem;
  margin-bottom: 3rem;
}
.about-top > p {
  color: #9a9ca1;
  font-size: 0.75rem;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;
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
@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
  }
  .component {
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
    transform: translateY(-50px);
  }
}
</style>
