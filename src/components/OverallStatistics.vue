<template>
  <div
    class="min-h-[300px] bg-gradient-to-r from-[#a7f3d0] via-[#d1e8f6] to-[#d5a9f7] rounded-xl p-8 text-center shadow-lg"
  >
    <h2 class="text-4xl font-semibold mb-10">Where we are today</h2>

    <!-- Loading / Error States -->
    <div v-if="loading" class="text-gray-600">Loading statistics...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>

    <!-- Stats Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Merchants -->
      <div class="flex flex-col items-center">
        <img
          src="@/assets/icons/merchant.svg"
          alt="Merchants"
          class="w-12 h-12 mb-2"
        />
        <p class="text-2xl font-bold text-red-600">
          {{ stats?.merchants ?? 0 }}
        </p>
        <p class="text-sm text-gray-700">Total Number of Merchants</p>
      </div>

      <!-- Customers -->
      <div class="flex flex-col items-center">
        <img
          src="@/assets/icons/customers.png"
          alt="Customers"
          class="w-12 h-12 mb-2"
        />
        <p class="text-2xl font-bold text-red-600">
          {{ stats?.customers ?? 0 }}
        </p>
        <p class="text-sm text-gray-700">Total Number of Customers</p>
      </div>

      <!-- Bonus Points -->
      <div class="flex flex-col items-center">
        <img
          src="@/assets/icons/point.png"
          alt="Points"
          class="w-12 h-12 mb-2"
        />
        <p class="text-2xl font-bold text-red-600">
          {{ stats?.bonus?.toLocaleString() ?? 0 }}
        </p>
        <p class="text-sm text-gray-700">
          Total Number of Bonus Points Distributed
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "@/services/api";

// Type for the UI model
interface Statistics {
  merchants: number;
  customers: number;
  bonus: number;
}

// API response type
interface ApiResponse {
  result: {
    code: string;
    description: string;
  };
  data: {
    totalCustomers: number;
    totalMerchants: number;
    totalPointsDistributed: number;
  };
  transactionRefId: string;
}

const stats = ref<Statistics | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

const fetchStatistics = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await api.get<ApiResponse>("/OverallStatistics");

    // Map API fields → UI model
    stats.value = {
      merchants: response.data.totalMerchants,
      customers: response.data.totalCustomers,
      bonus: response.data.totalPointsDistributed,
    };
  } catch (err: any) {
    console.error("Failed to fetch statistics:", err);
    error.value = err.message || "Something went wrong!";
  } finally {
    loading.value = false;
  }
};

onMounted(fetchStatistics);
</script>
