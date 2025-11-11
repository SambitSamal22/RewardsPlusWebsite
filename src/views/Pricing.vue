<template>
  <div class="min-h-screen bg-[#0b0c2a] text-white font-inter">
    <!-- Header Section -->
    <div
      class="relative bg-gradient-to-r from-[#a3f9d6] via-[#d1e8f6] to-[#d5a9f7] pt-24 pb-36 text-center text-black"
    >
      <div class="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold">
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
      <div
        class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] -mb-px"
      >
        <svg
          class="relative block w-full h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] 2xl:h-[360px]"
          preserveAspectRatio="none"
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
        <p v-if="plan.desc" class="text-3xl font-extrabold text-sm mb-4">
          {{ plan.desc }}
        </p>
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
    price: "€29/Month",
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
        text: "Advanced Dashboard → Real-time Business Dashboard (all KPIs in one place)",
        available: true,
      },
      {
        text: "Back-office Automation Suite → Admin tools like debit/credit adjustment",
        available: true,
      },
      {
        text: "Real-time Online Reporting → On-demand Reports (export & share anytime, anywhere)",
        available: true,
      },
      { text: "Bonus point sharing", available: true },
    ],
  },
  {
    title: "Growth Plan",
    desc: "Everything in Starter, plus advance growth tools like",
    price: "€49/Month",
    features: [
      {
        text: "POS integration for seamless in-store + online sync",
        available: true,
      },
      {
        text: "Digital marketing & promotions toolkit (email, coupons, campaigns)",
        available: true,
      },
      {
        text: "Advanced merchant dashboard",
        available: true,
      },
    ],
  },
  {
    title: "Scale Plan",
    price: "Pay-As-You-Go",
    desc: "Everything in Growth Plan, plus advance features like",
    features: [
      {
        text: "Marketplace to sell merchant products",
        available: true,
      },
      {
        text: "Reward partners and affiliates to drive more sales",
        available: true,
      },
      {
        text: "Coalition Loyalty Program",
        available: true,
      },
      {
        text: "Multi-country Implementation",
        available: true,
      },
      {
        text: "Multi-branch management",
        available: true,
      },
    ],
  },
];
</script>

<style scoped></style>
