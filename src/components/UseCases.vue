<template>
  <section
    class="w-full py-16 px-6 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300"
  >
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">Our UseCases</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <!-- Loop through useCases -->
        <div
          v-for="(useCase, index) in useCases"
          :key="index"
          class="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          <!-- Image -->
          <img
            :src="useCase.image"
            :alt="useCase.title"
            class="w-full h-36 object-cover"
          />

          <!-- Content -->
          <div class="p-4">
            <h3 class="text-lg font-semibold mb-2" :class="useCase.color">
              {{ useCase.title }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ useCase.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

import salonImg from "@/assets/images/salon.png";
import restaurantImg from "@/assets/images/restaurant.png";
import retailImg from "@/assets/images/retail.png";
import fitnessImg from "@/assets/images/gym.png";

const useCases = ref([
  {
    title: "Haircut Salon",
    image: salonImg,
    description:
      "Digital loyalty cards for Haircut/Salon boost customer retention and keep them coming back. Easy scheduling, rewards, and special offers improve customer experience.",
    color: "text-red-500",
  },
  {
    title: "Restaurants",
    image: restaurantImg,
    description:
      "Reward customers with points and discounts on their favorite meals. Build stronger relationships and increase repeat visits.",
    color: "text-green-500",
  },
  {
    title: "Grocery Stores",
    image: retailImg,
    description:
      "Loyalty programs for grocery stores increase customer engagement, encourage repeat purchases, and provide valuable insights into shopping habits.",
    color: "text-blue-500",
  },
  {
    title: "Fitness Centers",
    image: fitnessImg,
    description:
      "Reward gym members for their consistency and motivate them with exclusive deals, making workouts more engaging.",
    color: "text-purple-500",
  },
]);
</script>
