<template>
  <div class="about-section">
    <div class="cards">
      <div class="card component">
        <i class="mdi mdi-medal"></i>
        <h3>{{ $t('experience') }}</h3>
        <p>{{ experienceYears }} {{ $t('years') }}</p>
      </div>
      <div class="card component">
        <i class="mdi mdi-folder"></i>
        <h3>{{ $t('ProjetosCompletados') }}</h3>
        <p>5+ {{ $t('completed') }}</p>
      </div>
      <div class="card component">
        <i class="mdi mdi-headset"></i>
        <h3>{{ $t('support') }}</h3>
        <p>Online 24/7</p>
      </div>
    </div>
    <div class="text-content component">
      <p>
        <b>{{ $t('backEndDeveloper') }}</b> {{ $t('about1') }} <b>{{ $t('technicalFormation') }}</b>,{{ $t('about2') }} <b>Spring Boot</b>, <b>Node.js</b>, <b>Java</b> e <b>TypeScript</b>, {{ $t('about3') }} <b>Docker</b> e <b>RabbitMQ</b>.
      </p>
      <br />
      <p>
        {{ $t('about4') }}
        <b>{{ $t('softwareEngineering') }}</b>.
      </p>
    </div>
    <button class="contact-btn component" @click="scrollToSection('contact')">{{ $t('contactMe') }}</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useExperience } from '@/composables/useExperience'

const components = ref([])
onMounted(() => {
  components.value = document.querySelectorAll('.component')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        } else {
          entry.target.classList.remove('visible')
        }
      })
    },
    { threshold: 0.2 },
  )
  components.value.forEach((comp) => observer.observe(comp))
})

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

const { experienceYears } = useExperience(2022)
</script>

<style scoped>
.about-section {
  display: flex;
  flex-direction: column;
  color: #c2a8fa;
  font-family: 'Poppins', sans-serif;
  padding: 3rem 2rem;
}
.cards {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  justify-content: center;
}
.card {
  background-color: #151c28;
  padding: 1rem 0.95rem;
  border-radius: 0.75rem;
  text-align: center;
  width: 180px;
  height: 100px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease-out;
}
.card.visible {
  opacity: 1;
  transform: translateY(0);
}
.card i {
  font-size: 1.3rem;
  color: #a395e9;
  margin-bottom: 0.5rem;
}
.card h3 {
  font-size: 0.813rem;
  font-weight: 500;
  color: white;
  margin: 0.2rem 0;
}
.card p {
  font-size: 0.625rem;
  color: #b0a5d8;
}
.text-content {
  max-width: 600px;
  line-height: 1.6;
  color: #d8d5d5;
  margin: 0 auto 2rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease-out;
}

.text-content > p {
  color: rgb(212, 212, 212);
}
.text-content.visible {
  opacity: 1;
  transform: translateY(0);
}
.contact-btn {
  background-color: #a395e9;
  color: #0b111e;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: 0.3s ease;
  width: 140px;
  align-self: flex-start;
  opacity: 0;
  transform: translateY(50px);
}
.contact-btn.visible {
  opacity: 1;
  transform: translateY(0);
}
@media (max-width: 768px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }
  .card {
    width: 100%;
    max-width: 300px;
  }
  .text-content {
    padding: 0 1rem;
  }
  .contact-btn {
    align-self: center;
  }
}
</style>
