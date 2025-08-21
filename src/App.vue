<template>
  <div class="font-sans">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>
