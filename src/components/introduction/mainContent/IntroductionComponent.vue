<script setup>
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <div class="wrapper">
    <span class="badge">{{ $t('hello') }}</span>
    <h1 class="name">Gabriel Lima</h1>
    <p class="role">{{ $t('role') }}</p>
    <div class="buttons">
      <a href="/src/assets/CV_Gabriel_Lima.pdf" download>
        <button class="btn outlined">Download CV</button>
      </a>      <button class="btn filled" @click="scrollToSection('projects')">{{ $t('projects') }}</button>
      <a href="https://github.com/GabrielLima2803/" target="_blank" rel="noopener noreferrer">
        <button class="btn outlined">
          Github
</button>
      </a>

    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #c2a8fa;
  font-family: 'Poppins', sans-serif;
  padding: 0 1rem;
}
.badge {
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.875rem;
  font-weight: bold;
}
.name {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;
}
.role {
  font-size: 1.2rem;
  margin-top: -5px;
  color: #b0a5d8;
  text-align: center;
}
.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 20px;
}
.btn {
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
}
.outlined {
  background: transparent;
  color: #c2a8fa;
  text-decoration: none;
  border: 2px solid #c2a8fa;
}
.outlined:hover {
  background: #c2a8fa;
  color: #0b111e;
}

.filled {
  background: #c2a8fa;
  color: #0b111e;
  border: none;
}
.filled:hover {
  background: #a395e9;
}
@media (max-width: 768px) {
  .name {
    font-size: 2rem;
  }
  .role {
    font-size: 1rem;
  }
  .btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
  .buttons {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    align-items: center;
  }
}
</style>
