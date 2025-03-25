<script setup>
import { ref, onMounted, nextTick } from "vue";

const showMenu = ref(false);
const activeSection = ref(null);
const bubbleMenuRef = ref(null);

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

onMounted(() => {
  setTimeout(() => {
    showMenu.value = true;
    nextTick(() => {
      // Observer para animação de entrada
      const menuObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            } else {
              entry.target.classList.remove("visible");
            }
          });
        },
        { threshold: 0.2 }
      );

      if (bubbleMenuRef.value) {
        menuObserver.observe(bubbleMenuRef.value);
      }
    });
  }, 3000);

  // Observer para detectar a seção ativa
  const sectionIds = ["introduction", "about", "projects", "experience", "contact"];
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      let visibleSection = null;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id;
        }
      });
      if (visibleSection) {
        activeSection.value = visibleSection;
      }
    },
    { threshold: 0.5, rootMargin: "-50% 0px -50% 0px" }
  );

  sectionIds.forEach((id) => {
    const sectionEl = document.getElementById(id);
    if (sectionEl) {
      sectionObserver.observe(sectionEl);
    }
  });
});
</script>

<template>
  <div v-if="showMenu" ref="bubbleMenuRef" class="bubble-menu">
    <ul>
      <li>
        <a
          @click="scrollToSection('introduction')"
          :class="{ active: activeSection === 'introduction' }"
        >
          <i class="mdi mdi-home"></i>
        </a>
      </li>
      <li>
        <a
          @click="scrollToSection('about')"
          :class="{ active: activeSection === 'about' }"
        >
          <i class="mdi mdi-account"></i>
        </a>
      </li>
      <li>
        <a
          @click="scrollToSection('projects')"
          :class="{ active: activeSection === 'projects' }"
        >
          <i class="mdi mdi-hammer-wrench"></i>
        </a>
      </li>
      <li>
        <a
          @click="scrollToSection('experience')"
          :class="{ active: activeSection === 'experience' }"
        >
          <i class="mdi mdi-medal"></i>
        </a>
      </li>
      <li>
        <a
          @click="scrollToSection('contact')"
          :class="{ active: activeSection === 'contact' }"
        >
          <i class="mdi mdi-email"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.bubble-menu {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background-color: #151c28; 
  backdrop-filter: blur(10px); 
  width: 300px;
  height: 60px;
  border-radius: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0;
}


.bubble-menu.visible {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}

.bubble-menu ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.bubble-menu a {
  color: #fff;
  font-size: 1.25rem;
  transition: color 0.3s;
}

.bubble-menu a:hover {
  color: #d4c3fc;
}

i {
  cursor: pointer;
}

.bubble-menu a.active {
  color: #ffd700;
}
</style>
