<template>
  <div
    class="min-h-screen bg-gradient-to-r from-[#3de35e] via-[#b9c9f2] to-[#c966dc]"
  >
    <!-- Hero Section -->
    <section class="relative py-10 px-6 md:py-14">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <!-- Left: Image + Text -->
        <div>
          <!-- Phone Mockup -->
          <div class="flex justify-start mb-4">
            <img
              src="../assets/Mobile-Mockup-1.png"
              alt="RewardsPlus App"
              class="w-52 md:w-72 drop-shadow-2xl rounded-xl"
            />
          </div>

          <!-- Welcome Text -->
          <h1
            class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
          >
            Welcome to <span class="text-purple-600">RewardsPlus</span>
          </h1>
          <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            A modern
            <span class="font-semibold text-purple-600">loyalty system</span>
            tailored for small and medium-sized merchants, designed to
            <span class="font-semibold">boost sales</span> by retaining
            customers. Replace outdated stamp cards with a seamless digital
            solution, powered by
            <strong class="text-purple-700">REWARDS+ Token</strong>.
          </p>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4">
            <a
              href="#"
              class="px-6 py-3 text-lg font-medium bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 hover:shadow-xl transition"
            >
              Get Started
            </a>
          </div>
        </div>

        <!-- Right: Video -->
        <div class="flex justify-center">
          <div
            class="w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-purple-400"
          >
            <iframe
              class="w-full h-full"
              src="https://www.youtube.com/embed/i6eAEWgwdtA"
              title="RewardsPlus Demo Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <!-- App Section -->
    <AppDownload />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/Footer.vue";
import AppDownload from "../components/AppDownload.vue";
</script>
