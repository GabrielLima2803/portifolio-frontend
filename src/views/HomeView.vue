<script setup>
import {
  HeaderComponent,
  DefaultIntroduction,
  DefaultAbout,
  DefaultStack,
  DefaultContact,
  DefaultProjects,
  DefaultExperience,
  DefaultFormation,
  BubbleIcons,
} from '@/components/'
</script>

<template>
  <div class="z-index">
    <div id="header">
      <HeaderComponent />
    </div>
    <div id="introduction">
      <DefaultIntroduction />
    </div>
    <div id="about">
      <DefaultAbout />
    </div>
    <div id="stack">
      <DefaultStack />
    </div>
    <div id="projects">
      <DefaultProjects />
    </div>
    <div id="experience">
      <DefaultExperience />
    </div>
    <div id="formation">
      <DefaultFormation />
    </div>
    <div id="contact">
      <DefaultContact />
    </div>
    <BubbleIcons />
  </div>
</template>


<style scoped>
.z-index {
  z-index: 2;
}
</style>
