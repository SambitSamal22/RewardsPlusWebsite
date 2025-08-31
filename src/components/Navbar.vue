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
          <!-- Our Apps -->
          <div class="relative group">
            <button
              class="flex items-center space-x-1 hover:text-gray-200 transition-colors"
            >
              <span>Our Apps</span>
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
              class="absolute left-0 hidden group-hover:block bg-white text-black shadow-md rounded mt-2 z-50 min-w-[220px] whitespace-nowrap"
            >
              <router-link to="/app1" class="block px-4 py-2 hover:bg-gray-100">
                RewardsPlus: Rewards & More
              </router-link>
              <router-link to="/app2" class="block px-4 py-2 hover:bg-gray-100">
                RewardsPlus for Merchants
              </router-link>
            </div>
          </div>

          <!-- Services -->
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
              class="absolute left-0 hidden group-hover:block bg-white text-black shadow-md rounded mt-2 z-50 w-48"
            >
              <router-link
                to="/web-development"
                class="block px-4 py-2 hover:bg-gray-100"
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

      <!-- Right side: CTA Buttons (Desktop) -->
      <div class="hidden md:flex items-center space-x-4">
        <router-link
          to="/merchant-login"
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

      <!-- Mobile Nav Content -->
      <div
        v-if="isOpen"
        class="absolute top-full left-0 w-full bg-[#7A5CFA] shadow-md p-4 space-y-4 md:hidden z-50"
      >
        <router-link to="/app1" class="block" @click="closeMenu"
          >App 1</router-link
        >
        <router-link to="/app2" class="block" @click="closeMenu"
          >App 2</router-link
        >
        <router-link to="/web-development" class="block" @click="closeMenu"
          >Web Development</router-link
        >
        <router-link to="/mobile-development" class="block" @click="closeMenu"
          >Mobile Development</router-link
        >
        <router-link to="/pricing" class="block" @click="closeMenu"
          >Pricing</router-link
        >
        <router-link to="/contact" class="block" @click="closeMenu"
          >Contact</router-link
        >
        <router-link to="/merchant-login" class="block" @click="closeMenu"
          >Merchant Login</router-link
        >
        <router-link
          to="/get-started"
          class="block bg-white text-black px-4 py-1 rounded-full text-center"
          @click="closeMenu"
        >
          Get Started
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const closeMenu = () => {
  isOpen.value = false;
};

const route = useRoute();
const navLinkClass = (path: string) => {
  const isActive = route.path === path;
  return [
    "block py-2 md:py-0 transition-colors duration-200",
    isActive ? "text-white font-semibold" : "hover:text-gray-200",
  ];
};
</script>
