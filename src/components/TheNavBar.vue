<script setup>
import { useUserStore } from '../stores/user';
const userStore = useUserStore();
</script>

<template>
  <nav class="navbar">
    <div class="navbar__logo">TD-Certificación</div>
    <div class="navbar__user">Hola, <strong>{{ userStore.name }}</strong></div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: #2c3e50;
  color: white;
  margin-bottom: 2rem;
}
</style>