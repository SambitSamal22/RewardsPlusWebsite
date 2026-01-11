<script setup lang="ts">
defineProps<{ title: string; code: string }>();
</script>

<template>
  <div class="rounded-xl border bg-[#0f172a] text-white">
    <div class="px-4 py-2 border-b border-white/10 text-sm font-medium">
      {{ title }}
    </div>
    <pre class="p-4 text-sm overflow-x-auto"><code>{{ code }}</code></pre>
  </div>
</template>
