<script setup>
import { ref, onMounted } from 'vue'

const experiences = ref([
  {
    id: 1,
    title: 'Informática para internet',
    type: "Curso Profissionalizante intregado ao ensino médio",
    description: 'Instituto Federal Catarinense',
    date: '2022 - 2025'
  },
  {
    id: 2,
    title: 'Bootcamp Bradesco - Java Cloud Native',
    type: "Bootcamp",
    description: 'DIO - 90 horas',
    url: "https://www.dio.me/certificate/C9EGTMA2/share",
    date: '2025'
  },
  {
    id: 3,
    title: 'Microsserviços com Spring e RabbitMQ + AWS',
    type: "Curso",
    description: 'Udemy - 8.5 horas',
    url: 'https://www.udemy.com/certificate/UC-396b9232-9d46-47ca-b178-8fce04f2d92d/',
    date: '2025'
  },
  {
    id: 4,
    title: 'Fundamentals of Backend Engineering',
    type: "Curso",
    description: 'Udemy - 18 horas',
    date: 'Em processo'
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
      :class="{ left: index % 2 !== 0, right: index % 2 === 0, highlight: index === 0 }"
    >
      <div class="content">
        <h3>{{ experience.title }}</h3>
        <span class="date">{{ experience.date }}</span>
        <span class="type">{{ experience.type }}</span>
        <p>{{ experience.description }}</p>
        <a v-if="experience.url" :href="experience.url" target="_blank" class="btn">{{ $t('SeeCertifition') }}</a>
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
  right: 11%;
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
.type {
  font-size: 0.8rem;
  color: #cccccc;
}
.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #a395e9;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;
}
.btn:hover {
  background-color: #7a76d9;
}
.timeline-item.highlight .content {
  border: 2px solid #a395e9;
  box-shadow: 0 4px 10px #a395e9;
  transform: scale(1.05);
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
    right: 0 !important;
    text-align: center;
  }
  .content {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }
}
</style>
