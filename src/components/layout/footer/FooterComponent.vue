<script setup>

</script>

<template>
  <footer class="footer">
    <div class="social-icons">
      <a href="https://github.com/GabrielLima2803/" target="_blank">
        <i class="mdi mdi-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/gabriel-limadev/" target="_blank">
        <i class="mdi mdi-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/_.lima1/" target="_blank">
        <i class="mdi mdi-instagram"></i>
      </a>
    </div>

    <p class="copyright">
      © 2025 GabrielLima2803: Github
    </p>


  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #5f4cd6;
  padding: 2rem 1rem;
  font-family: 'Poppins', sans-serif;
  position: relative;
}

.social-icons {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.social-icons i {
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-icons i:hover {
  color: #d4c3fc;
}

.footer p {
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 500;
}


</style>
