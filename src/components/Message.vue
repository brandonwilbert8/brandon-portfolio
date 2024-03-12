<script setup>
import { AutoTyperVue } from 'auto-typer-vue3';
const message = ['Problem Solving', 'User Interface/User Experience', 'Cloud Development'];
</script>

<script>
export default {
  components: 'Message',
};
</script>

<template>
  <div class="mt-2">
    <AutoTyperVue class="auto-typer-vue text-lg md:text-xl lg:text-xl" :text="message" :typingDelay="50" :deletingDelay="50" style="color: rgb(107 114 128); font-family: 'Circular Spotify Text Book'" />
  </div>
</template>

<style scoped>
@import 'auto-typer-vue3/dist/style.css';
.auto-typer-vue::after {
  border-color: #0b0b0b;
  border-width: thin;
  opacity: 0.7;
}
</style>
