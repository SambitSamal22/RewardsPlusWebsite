<template>
  <section
    class="w-full py-16 px-6 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300"
  >
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">Our UseCases</h2>

      <!-- Carousel Wrapper -->
      <div class="relative overflow-hidden">
        <!-- Slides -->
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
          }"
        >
          <div
            v-for="(useCase, index) in useCases"
            :key="index"
            class="w-full sm:w-1/2 md:w-1/4 flex-shrink-0 px-2"
          >
            <div
              class="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl h-full"
            >
              <!-- Image -->
              <img
                :src="useCase.image"
                :alt="useCase.title"
                class="w-full h-48 object-cover"
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

        <!-- Prev Button -->
        <button
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ‹
        </button>

        <!-- Next Button -->
        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          ›
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

import salonImg from "@/assets/images/salon.png";
import restaurantImg from "@/assets/images/restaurant.png";
import retailImg from "@/assets/images/retail.png";
import fitnessImg from "@/assets/images/gym.png";
import donerImg from "@/assets/images/doner.png";
import coffeeImg from "@/assets/images/coffeshop.png";

const useCases = ref([
  {
    title: "Haircut Salon",
    image: salonImg,
    description:
      "Digital loyalty cards for Haircut/Salon boost customer retention and keep them coming back. Easy scheduling, rewards, and special offers improve customer experience.",
    color: "text-red-500",
  },
  {
    title: "Döner Kebab",
    image: donerImg,
    description:
      "Loyalty programs for doner kebab shops boost repeat visits, reward food lovers with exclusive deals, and build a stronger bond with your brand.",
    color: "text-orange-500",
  },
  {
    title: "Coffee Shops",
    image: coffeeImg,
    description:
      "Loyalty programs for coffee shops encourage daily visits, reward regulars with free drinks, and create a cozy connection with your brand.",
    color: "text-yellow-500",
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

const currentIndex = ref(0);
const itemsPerPage = ref(4);

const updateItemsPerPage = () => {
  const width = window.innerWidth;
  if (width < 640) itemsPerPage.value = 1; // mobile
  else if (width < 1024) itemsPerPage.value = 2; // tablet
  else itemsPerPage.value = 4; // desktop
};

onMounted(() => {
  updateItemsPerPage();
  window.addEventListener("resize", updateItemsPerPage);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateItemsPerPage);
});

const maxIndex = computed(() => useCases.value.length - itemsPerPage.value);

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>
