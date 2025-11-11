<template>
  <header class="sticky top-0 z-50 bg-[#7A5CFA] shadow text-white">
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between"
    >
      <!-- Logo + Desktop Nav -->
      <div class="flex items-center space-x-10">
        <router-link to="/" class="flex items-center text-2xl font-bold">
          <img
            src="../assets/logo.png"
            alt="RewardsPlus Logo"
            class="h-10 w-auto md:h-12"
          />
        </router-link>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex items-center space-x-6">
          <!-- What We Do -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 hover:text-gray-200 transition-colors"
            >
              <span>What We Do</span>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <!-- Dropdown -->
            <div
              class="absolute left-0 hidden group-hover:block bg-white text-black shadow-md rounded mt-2 z-48 min-w-[220px] whitespace-nowrap"
            >
              <button
                @click="scrollToSection('use-cases')"
                class="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Overview
              </button>
              <button
                @click="scrollToSection('features')"
                class="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                Features
              </button>
              <button
                @click="scrollToSection('how-it-works')"
                class="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                How it works
              </button>
            </div>
          </div>

          <!-- Resources -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 hover:text-gray-200 transition-colors"
            >
              <span>Resources</span>
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 9l-7 7-7-7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div
              class="absolute left-0 hidden group-hover:block bg-white text-black shadow-md rounded mt-2 z-50 w-50 whitespace-nowrap"
            >
              <router-link to="/about" class="block px-4 py-2 hover:bg-gray-100"
                >RewardsPlus: Rewards & More</router-link
              >
              <router-link to="/about" class="block px-4 py-2 hover:bg-gray-100"
                >RewardsPlus for Merchants</router-link
              >
              <router-link to="/about" class="block px-4 py-2 hover:bg-gray-100"
                >API Reference</router-link
              >
            </div>
          </div>

          <router-link to="/pricing" :class="navLinkClass('/pricing')"
            >Pricing</router-link
          >
          <router-link to="/contact" :class="navLinkClass('/contact')"
            >Contact</router-link
          >
        </div>
      </div>

      <!-- Right side: CTA Buttons -->
      <div class="hidden md:flex items-center space-x-4">
        <router-link
          to=""
          @click.prevent="goToMerchantLogin"
          class="font-semibold hover:text-gray-200 transition-colors"
        >
          Merchant Login
        </router-link>
        <router-link
          to="/get-started"
          class="bg-white text-black font-medium py-1 px-4 rounded-full hover:bg-gray-200 transition"
        >
          Get Started
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white focus:outline-none"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path v-if="!isOpen" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Mobile Nav -->
      <div
        v-if="isOpen"
        class="absolute top-full left-0 w-full bg-[#7A5CFA] shadow-md p-4 space-y-4 md:hidden z-50"
      >
        <button
          @click="
            scrollToSection('use-cases');
            closeMenu();
          "
          class="block"
        >
          Overview
        </button>
        <button
          @click="
            scrollToSection('features');
            closeMenu();
          "
          class="block"
        >
          Features
        </button>
        <button
          @click="
            scrollToSection('how-it-works');
            closeMenu();
          "
          class="block"
        >
          How it works
        </button>
        <router-link to="/pricing" class="block" @click="closeMenu"
          >Pricing</router-link
        >
        <router-link to="/contact" class="block" @click="closeMenu"
          >Contact</router-link
        >
        <router-link to="/get-started" class="block" @click="closeMenu"
          >Get Started</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);
const closeMenu = () => (isOpen.value = false);

const route = useRoute();
const router = useRouter();

const navLinkClass = (path: string) => {
  const isActive = route.path === path;
  return [
    "block py-2 md:py-0 transition-colors duration-200",
    isActive ? "text-white font-semibold" : "hover:text-gray-200",
  ];
};

// 🧭 Scroll to section on Home
const scrollToSection = async (id: string) => {
  if (router.currentRoute.value.path !== "/") {
    await router.push("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
};

const goToMerchantLogin = () => {
  window.open("https://merchants.rewardsplus.io/lms/auth/login", "_blank");
};
</script>
