<script setup lang="ts">
import ApiTable from "./ApiTable.vue";
import ApiCodeBlock from "./ApiCodeBlock.vue";

defineProps<{ api: any }>();
</script>

<template>
  <main class="flex-1 space-y-12">
    <!-- Title -->
    <header>
      <h1 class="text-4xl font-bold text-gray-900 mb-3">
        {{ api.title }}
      </h1>
      <p class="text-gray-600 leading-relaxed max-w-3xl">
        {{ api.intro }}
      </p>
    </header>

    <!-- How it works -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">How it works</h2>
      <ul class="list-disc pl-6 space-y-2 text-gray-700">
        <li v-for="(item, i) in api.howItWorks" :key="i">
          {{ item }}
        </li>
      </ul>
    </section>

    <!-- Endpoint -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Endpoint</h2>
      <div class="rounded-lg border bg-gray-50 p-4 font-mono text-sm">
        <span class="text-green-600 font-semibold">
          {{ api.endpoint.method }}
        </span>
        {{ api.endpoint.url }}
      </div>
      <p class="text-gray-600 mt-2">
        {{ api.endpoint.purpose }}
      </p>
    </section>

    <!-- Request fields -->
    <section>
      <h2 class="text-2xl font-semibold mb-4">Request Fields</h2>
      <ApiTable :rows="api.requestFields" />
    </section>

    <!-- Examples -->
    <section class="grid md:grid-cols-2 gap-6">
      <ApiCodeBlock title="Sample Request" :code="api.sampleRequest" />
      <ApiCodeBlock title="Sample Response" :code="api.sampleResponse" />
    </section>
  </main>
</template>
