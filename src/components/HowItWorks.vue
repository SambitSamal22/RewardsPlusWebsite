<template>
  <section
    class="bg-gradient-to-r from-[#a7f3d0] via-[#d1e8f6] to-[#d5a9f7] py-16 px-6"
  >
    <div class="max-w-6xl mx-auto text-center">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>

      <!-- Toggle Buttons -->
      <div class="flex justify-center gap-2 mb-12">
        <button
          @click="activeTab = 'customer'"
          :class="[
            'px-4 py-2 rounded-lg shadow',
            activeTab === 'customer'
              ? 'text-white bg-gradient-to-r from-purple-500 to-blue-500'
              : 'border border-gray-300 bg-white text-gray-700 shadow-sm',
          ]"
        >
          Customer
        </button>
        <button
          @click="activeTab = 'merchant'"
          :class="[
            'px-4 py-2 rounded-lg shadow',
            activeTab === 'merchant'
              ? 'text-white bg-gradient-to-r from-purple-500 to-blue-500'
              : 'border border-gray-300 bg-white text-gray-700 shadow-sm',
          ]"
        >
          Merchant
        </button>
      </div>

      <!-- Steps Container -->
      <div
        class="flex flex-wrap lg:flex-nowrap items-start justify-center gap-6 w-full max-w-6xl mx-auto"
      >
        <template v-for="(step, index) in steps[activeTab]" :key="index">
          <!-- Card and Arrow Wrapper -->
          <div class="flex items-center gap-4">
            <!-- Step Card -->
            <div
              class="relative bg-white pt-12 p-6 rounded-xl border border-gray-200 shadow-sm w-60 min-h-[340px] flex flex-col justify-start"
            >
              <!-- Number Badge -->
              <div
                class="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-red-500 text-white font-bold rounded-full"
              >
                {{ index + 1 }}
              </div>

              <!-- Icon -->
              <img
                :src="step.icon"
                :alt="step.title"
                class="w-24 h-24 mx-auto my-6"
              />

              <!-- Title & Desc -->
              <h3 class="font-semibold text-center">{{ step.title }}</h3>
              <p class="text-sm text-gray-600 text-center">{{ step.desc }}</p>
            </div>

            <!-- Arrow -->
            <div
              v-if="index < steps[activeTab].length - 1"
              class="hidden lg:flex items-center justify-center"
            >
              <svg
                class="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconAccount from "../assets/icons/account.png";
import IconStamp from "../assets/icons/card.png";
import IconPlan from "../assets/icons/stamp.png";
import IconRocket from "../assets/icons/rocket.png";
import IconDownload from "../assets/icons/down.png";

const activeTab = ref<"customer" | "merchant">("customer");

const steps = {
  customer: [
    {
      icon: IconDownload,
      title: "Download the App",
      desc: "Your customers download the Rewardsplus App, register their details and join your loyalty program.",
    },
    {
      icon: IconAccount,
      title: "Sign Up",
      desc: "Register in the app to start earning rewards.",
    },
    {
      icon: IconStamp,
      title: "Collect",
      desc: "Earn stamps every time you shop.",
    },
    {
      icon: IconPlan,
      title: "Redeem",
      desc: "Redeem your rewards easily.",
    },
  ],
  merchant: [
    {
      icon: IconAccount,
      title: "Create",
      desc: "Create an account for your business.",
    },
    {
      icon: IconStamp,
      title: "Build",
      desc: "Build your Stamp Card(s).",
    },
    {
      icon: IconPlan,
      title: "Select",
      desc: "Choose a plan & start free trial.",
    },
    {
      icon: IconRocket,
      title: "Implement",
      desc: "Launch your customer retention tool.",
    },
  ],
};
</script>
