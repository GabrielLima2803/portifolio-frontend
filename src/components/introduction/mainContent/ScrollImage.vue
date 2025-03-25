<template>
  <div class="scroll-container">
    <div class="mouse-icon">
      <i class="mdi mdi-mouse"></i>
    </div>
    <p class="scroll-text">Scroll Down</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.scroll-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 2em;
  color: #a395e9;
}
.mouse-icon {
  font-size: 1rem;
  border: 2px solid #a395e9;
  padding: 5px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scrollBounce 2s infinite ease-in-out;
}
.scroll-text {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  margin-top: 20px;
  font-size: 1rem;
}
@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}
@media (max-width: 768px) {
  .scroll-container { top: 1em; }
  .mouse-icon { font-size: 0.9rem; padding: 4px; }
  .scroll-text { font-size: 0.9rem; margin-top: 15px; }
}
</style>
