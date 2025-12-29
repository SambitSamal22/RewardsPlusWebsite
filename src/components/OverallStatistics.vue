<template>
  <div
    ref="statsSection"
    class="w-full py-16 bg-gradient-to-r from-[#a7f3d0] via-[#d1e8f6] to-[#d5a9f7]"
  >
    <div
      class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 text-center"
    >
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
        Where we are today
      </h2>

      <!-- Stats Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
      >
        <!-- Merchants -->
        <div class="flex flex-col items-center text-center">
          <img
            src="@/assets/icons/merchant.svg"
            alt="Merchants"
            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2 sm:mb-3"
          />
          <p class="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">
            {{ merchantsCount.toLocaleString() }}
          </p>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-700 max-w-xs sm:max-w-sm md:max-w-md"
          >
            Total Number of Merchants
          </p>
        </div>

        <!-- Customers -->
        <div class="flex flex-col items-center text-center">
          <img
            src="@/assets/icons/customers.png"
            alt="Customers"
            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2 sm:mb-3"
          />
          <p class="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">
            {{ customersCount.toLocaleString() }}
          </p>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-700 max-w-xs sm:max-w-sm md:max-w-md"
          >
            Total Number of Customers
          </p>
        </div>

        <!-- Bonus Points -->
        <div class="flex flex-col items-center text-center">
          <img
            src="@/assets/icons/point.png"
            alt="Points"
            class="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-2 sm:mb-3"
          />
          <p class="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">
            {{ bonusCount.toLocaleString() }}
          </p>
          <p
            class="text-sm sm:text-base md:text-lg text-gray-700 max-w-xs sm:max-w-sm md:max-w-md"
          >
            Total Number of Bonus Points Distributed
          </p>
        </div>
      </div>

      <!-- Error Message (optional, subtle) -->
      <div v-if="error" class="text-base text-red-600 mt-4">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import api from "@/services/api";

interface Statistics {
  merchants: number;
  customers: number;
  bonus: number;
}
interface ApiResponse {
  data: {
    totalCustomers: number;
    totalMerchants: number;
    totalPointsDistributed: number;
  };
}

const merchantsCount = ref(0);
const customersCount = ref(0);
const bonusCount = ref(0);

const statsSection = ref<HTMLElement | null>(null);
const error = ref<string | null>(null);

let hasAnimated = false;

function animateCounter(
  from: number,
  to: number,
  refVar: any,
  duration = 2000
) {
  let start: number | null = null;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percentage = Math.min(progress / duration, 1);

    refVar.value = Math.floor(from + (to - from) * percentage);

    if (progress < duration) {
      requestAnimationFrame(step);
    } else {
      refVar.value = to;
    }
  };

  requestAnimationFrame(step);
}

const fetchStatistics = async () => {
  try {
    const response = await api.get<ApiResponse>("/OverallStatistics");

    const newStats: Statistics = {
      merchants: response.data.totalMerchants,
      customers: response.data.totalCustomers,
      bonus: response.data.totalPointsDistributed,
    };

    // Animate once from 0 → actual values
    animateCounter(0, newStats.merchants, merchantsCount);
    animateCounter(0, newStats.customers, customersCount);
    animateCounter(0, newStats.bonus, bonusCount);
  } catch (err: any) {
    console.error("Failed to fetch statistics:", err);
    error.value = "Could not load live statistics";
  }
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        hasAnimated = true;
        fetchStatistics();
      }
    },
    { threshold: 0.3 }
  );

  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});

onBeforeUnmount(() => {
  if (observer && statsSection.value) {
    observer.unobserve(statsSection.value);
  }
});
</script>
