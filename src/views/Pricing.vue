<template>
  <div class="min-h-screen bg-[#0b0c2a] text-white font-inter">
    <!-- Header Section -->
    <div
      class="relative bg-gradient-to-r from-[#a3f9d6] via-[#d1e8f6] to-[#d5a9f7] pt-24 pb-36 text-center text-black"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold lg:whitespace-nowrap">
          Choose the plan that's suitable for you
        </h1>
        <p class="text-xl sm:text-2xl mt-4">
          Setup your Loyalty System and<br />
          Test it for free for 30 days
        </p>

        <!-- Feature Badges -->
        <div
          class="flex flex-wrap justify-center mt-6 gap-3 sm:gap-4 text-sm font-medium"
        >
          <div
            class="flex items-center gap-2 bg-white px-4 py-2 rounded shadow text-xs sm:text-sm"
          >
            <span class="text-emerald-500">✔</span> 30-Day Free Trial
          </div>
          <div
            class="flex items-center gap-2 bg-white px-4 py-2 rounded shadow text-xs sm:text-sm"
          >
            <span class="text-emerald-500">✔</span> Cancel Any Time
          </div>
          <div
            class="flex items-center gap-2 bg-white px-4 py-2 rounded shadow text-xs sm:text-sm"
          >
            <span class="text-emerald-500">✔</span> No Lock-In Contract
          </div>
        </div>
      </div>

      <!-- Curve Transition -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          class="relative block w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0b0c2a"
            fill-opacity="1"
            d="M0,240 C480,120 960,360 1440,200 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div
      class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
    >
      <div
        v-for="(plan, index) in plans"
        :key="index"
        class="bg-[#101235] border-2 border-purple-600 rounded-2xl p-6 sm:p-8 shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <h2 class="text-xl sm:text-2xl font-bold mb-4">{{ plan.title }}</h2>
        <p class="text-3xl sm:text-4xl font-extrabold mb-6">{{ plan.price }}</p>
        <ul class="mb-6 space-y-3 text-sm sm:text-base">
          <li
            v-for="(feature, i) in plan.features"
            :key="i"
            class="flex items-center"
          >
            <span
              :class="feature.available ? 'text-green-400' : 'text-red-500'"
              class="font-bold mr-2"
            >
              {{ feature.available ? "✔" : "✘" }}
            </span>
            {{ feature.text }}
          </li>
        </ul>
        <button
          class="w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-xl transition duration-300"
        >
          Choose Plan
        </button>
      </div>
    </div>
    <AppDownload />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from "../components/Footer.vue";
import AppDownload from "../components/AppDownload.vue";
const plans = [
  {
    title: "Starter",
    price: "€0/Month",
    features: [
      {
        text: "Mobile app for customer(Android & ios) i.e RewardsPlus: Rewards & More",
        available: true,
      },
      {
        text: "Mobile app for merchant(Android & ios) i.e RewardsPlus for Merchant",
        available: true,
      },
      { text: "Merchant dashboard", available: true },
      {
        text: "Merchant themed white level RewardsPlus App for both customers & Merchant",
        available: false,
      },
      { text: "Rewards Gateway Integration", available: false },
      { text: "End of the day settlement", available: true },
    ],
  },
  {
    title: "Growth Plan",
    price: "€49/Month",
    features: [
      {
        text: "Mobile app for customer(Android & ios) i.e RewardsPlus: Rewards & More",
        available: true,
      },
      {
        text: "Mobile app for merchant(Android & ios) i.e RewardsPlus for Merchant",
        available: true,
      },
      {
        text: "Advanced merchant dashboard",
        available: true,
      },
      {
        text: "Merchant themed white level RewardsPlus App for both Customers & Merchant",
        available: true,
      },
      {
        text: "Rewards Gateway Integration",
        available: true,
      },
      {
        text: "Real-time settlement",
        available: true,
      },
      {
        text: "Digital Marketing",
        available: false,
      },
      {
        text: "POS Integration",
        available: false,
      },
    ],
  },
  {
    title: "Scale Plan",
    price: "€99/Month",
    features: [
      {
        text: "Mobile app for customer(Android & ios) i.e RewardsPlus: Rewards & More",
        available: true,
      },
      {
        text: "Mobile app for merchant(Android & ios) i.e RewardsPlus for merchant",
        available: true,
      },
      {
        text: "Advanced merchant dashboard",
        available: true,
      },
      {
        text: "Merchant themed white level RewardsPlus App for both customers & Merchant",
        available: true,
      },
      {
        text: "Rewards Gateway Integration",
        available: true,
      },
      {
        text: "Real-time settlement",
        available: true,
      },
      {
        text: "Digital Marketing",
        available: true,
      },
      {
        text: "POS Integration",
        available: true,
      },
      {
        text: "Multiple branch support for merchant in domestic or international market",
        available: true,
      },
      {
        text: "Merchant coupon",
        available: true,
      },
      {
        text: "Merchant online shopping",
        available: true,
      },
    ],
  },
];
</script>

<style scoped></style>
