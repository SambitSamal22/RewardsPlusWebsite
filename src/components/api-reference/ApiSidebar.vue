<script setup lang="ts">
defineProps<{ api: any }>();
</script>

<template>
  <aside class="w-64 sticky top-24 hidden lg:block">
    <div class="rounded-xl border bg-white p-4 space-y-4 shadow-sm">
      <h3 class="text-sm font-semibold text-gray-500 uppercase">
        API Reference
      </h3>

      <ul class="space-y-2 text-sm">
        <li class="font-medium text-[#7A5CFA]">
          {{ api.title }}
        </li>
        <li class="text-gray-600">How it works</li>
        <li class="text-gray-600">Endpoint</li>
        <li class="text-gray-600">Request Fields</li>
        <li class="text-gray-600">Examples</li>
      </ul>
    </div>
  </aside>
</template>
