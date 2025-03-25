<script setup>
import TalkToMe from './mainContent/TalkToMe.vue';
import WriteMessage from './mainContent/WriteMessage.vue';
</script>

<template>
  <div class="contact-top">
    <p>{{ $t('ContactOne') }}</p>
    <h3>{{ $t('ContactSecond') }}</h3>
  </div>
  <div class="wrapper">
    <TalkToMe />
    <WriteMessage />
  </div>
</template>

<style scoped>
.contact-top {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 5.5rem;
  margin-bottom: 3rem;
}
.contact-top > p {
  color: #888b91;
  font-size: 0.75rem;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 6rem;
  row-gap: 3rem;
  padding-bottom: 3rem;
}
@media (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 2rem;
  }
}
</style>
