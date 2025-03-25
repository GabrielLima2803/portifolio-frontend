<script setup>
import { ref, onMounted } from 'vue'

const experiences = ref([
  {
    id: 1,
    title: 'Desenvolvedor Fullstack - Estágio',
    description: 'Atuação como desenvolvedor fullstack ultilizando Vuejs3 e Django DRF, além de versionamento com Git.',
    date: '2024 - 2025'
  },
])

const timelineItems = ref([])

onMounted(() => {
  timelineItems.value = document.querySelectorAll('.timeline-item')
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      } else {
        entry.target.classList.remove('visible')
      }
    })
  }, {
    threshold: 0.2,
    rootMargin: '0px',
  })
  timelineItems.value.forEach(item => {
    observer.observe(item)
  })
})
</script>

<template>
  <div class="timeline-container">
    <div class="timeline-line"></div>
    <div
      v-for="(experience, index) in experiences"
      :key="experience.id"
      class="timeline-item"
      :class="{ left: index % 2 !== 0, right: index % 2 === 0 }"
    >
      <div class="content">
        <h3>{{ $t('ExperienceEstagio') }}</h3>
        <span class="date">{{ experience.date }}</span>
        <p>{{ $t('DescriptionEstagio') }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline-container {
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 50px 0;
}
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: #a395e9;
}
.timeline-item {
  position: relative;
  width: 45%;
  padding: 20px;
  margin-bottom: 50px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease-out;
}
.timeline-item.visible {
  opacity: 1;
  transform: translateY(0);
}
.timeline-item.left {
  left: 0;
  text-align: right;
}
.timeline-item.right {
  left: 55%;
  text-align: left;
}
.content {
  background: #151c28;
  padding: 1rem;
  width: 400px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
.timeline-item.left .content::after {
  content: '';
  position: absolute;
  top: 15px;
  right: -8px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent transparent #f9f9f9;
}
.timeline-item.right .content::after {
  content: '';
  position: absolute;
  top: 15px;
  left: -8px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent #f9f9f9 transparent transparent;
}
.content > p {
  color: white;
  font-size: 0.8rem;
}
.date {
  font-size: 0.9em;
  color: white;
  display: block;
  margin-bottom: 10px;
}
@media (max-width: 768px) {
  .timeline-container {
    width: 95%;
    padding: 20px 0;
  }
  .timeline-item {
    width: 100%;
    margin-bottom: 30px;
  }
  .timeline-item.left,
  .timeline-item.right {
    left: 0 !important;
    text-align: center;
  }
  .content {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }
}
</style>
