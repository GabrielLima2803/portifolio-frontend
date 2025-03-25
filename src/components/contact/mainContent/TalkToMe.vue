<script setup>
const email = "gabriellima2803@gmail.com";
const instagram = "https://www.instagram.com/_.lima1/";
const linkedin = "https://www.linkedin.com/in/gabriel-limadev/";
</script>

<template>
  <div class="container">
    <h3 class="title">{{ $t('TalkToMe') }}</h3>
    <div class="container-info">
      <div class="card">
        <i class="mdi mdi-email icon"></i>
        <h3 class="title-card">Email</h3>
        <span class="text-card">{{ email }}</span>
        <a :href="'mailto:' + email" class="button-contact">
          Write Me <i class="mdi mdi-arrow-right"></i>
        </a>
      </div>
      <div class="card">
        <i class="mdi mdi-instagram icon"></i>
        <h3 class="title-card">Instagram</h3>
        <span class="text-card">_.lima1</span>
        <a :href="instagram" target="_blank" class="button-contact">
          Write Me <i class="mdi mdi-arrow-right"></i>
        </a>
      </div>
      <div class="card">
        <i class="mdi mdi-linkedin icon"></i>
        <h3 class="title-card">LinkedIn</h3>
        <span class="text-card">gabriel-limadev</span>
        <a :href="linkedin" target="_blank" class="button-contact">
          Write Me <i class="mdi mdi-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  border-radius: 1rem;
  padding: 1rem;
}
.title {
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #f0f2f4;
  font-weight: 600;
}
.container-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.card {
  background-color: #151c28;
  width: 384px;
  height: 160px;
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
}
.icon {
  font-size: 2rem;
  color: #f0f2f4;
  margin-bottom: -5px;
}
.title-card {
  font-weight: 500;
  font-size: 0.875rem;
  color: #f0f2f4;
}
.text-card {
  display: block;
  margin-bottom: 0.6rem;
  font-size: 0.75rem;
  color: #babec4;
}
.button-contact {
  color: #a395e9;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  text-decoration: none;
}
.button-contact i {
  font-size: 1rem;
}
@media (max-width: 768px) {
  .card {
    width: 100%;
    max-width: 300px;
    height: auto;
    padding: 1rem;
  }
}
</style>


<style scoped>
.container {
  border-radius: 1rem;
  padding: 1rem;
}
.title {
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #f0f2f4;
  font-weight: 600;
}
.container-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.card {
  background-color: #151c28;
  width: 384px;
  height: 160px;
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-5px);
}
.icon {
  font-size: 2rem;
  color: #f0f2f4;
  margin-bottom: -5px;
}
.title-card {
  font-weight: 500;
  font-size: 0.875rem;
  color: #f0f2f4;
}
.text-card {
  display: block;
  margin-bottom: 0.6rem;
  font-size: 0.75rem;
  color: #babec4;
}
.button-contact {
  color: #a395e9;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  text-decoration: none;
}
.button-contact i {
  font-size: 1rem;
}
@media (max-width: 768px) {
  .card {
    width: 100%;
    max-width: 300px;
    height: auto;
    padding: 1rem;
  }
}
</style>
