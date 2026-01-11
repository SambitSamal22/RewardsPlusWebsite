<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";

import { posIntegrationApi } from "@/data/api/posIntegration";
import ApiSidebar from "@/components/api-reference/ApiSidebar.vue";
import ApiSection from "@/components/api-reference/ApiSection.vue";

const route = useRoute();
const apiParam = ref((route.params.api as string) || "pos-integration");

watch(
  () => route.params.api,
  (newVal) => {
    apiParam.value = (newVal as string) || "pos-integration";
  }
);

const apiData = computed(() => {
  // For now only posIntegrationApi exists
  if (apiParam.value === "pos-integration") return posIntegrationApi;
  // Later, add more APIs here
  return posIntegrationApi;
});
</script>

<template>
  <section
    class="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10"
  >
    <ApiSidebar :api="apiData" class="w-full lg:w-1/4" />
    <ApiSection :api="apiData" class="w-full lg:w-3/4" />
  </section>
</template>
