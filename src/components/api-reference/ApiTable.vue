<script setup lang="ts">
defineProps<{ rows: any[] }>();
</script>

<template>
  <div class="overflow-x-auto rounded-lg border">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-100 text-gray-700">
        <tr>
          <th class="px-4 py-3 text-left">Field</th>
          <th class="px-4 py-3 text-left">Type</th>
          <th class="px-4 py-3 text-left">Valid Value</th>
          <th class="px-4 py-3 text-left">Required</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in rows" :key="i" class="border-t">
          <td class="px-4 py-3 font-medium">
            {{ row.name }}
          </td>
          <td class="px-4 py-3">{{ row.type }}</td>
          <td class="px-4 py-3">{{ row.valid }}</td>
          <td class="px-4 py-3">
            <span
              class="px-2 py-1 rounded text-xs font-semibold"
              :class="
                row.required
                  ? 'bg-red-100 text-red-600'
                  : 'bg-gray-100 text-gray-600'
              "
            >
              {{ row.required ? "Yes" : "No" }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
