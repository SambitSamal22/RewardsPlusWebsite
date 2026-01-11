<template>
  <div class="font-sans">
    <Navbar />
    <NewYearBanner />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import NewYearBanner from "@/components/global/NewYearBanner.vue";
</script>
