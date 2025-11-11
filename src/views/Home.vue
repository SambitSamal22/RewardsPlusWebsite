<template>
  <div
    class="min-h-screen bg-gradient-to-r from-[#a7f3d0] via-[#d1e8f6] to-[#d5a9f7]"
  >
    <!-- Hero Section -->
    <section class="relative py-10 px-6 md:py-14">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
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
            <span class="font-semibold text-purple-600">RewardsPlus</span> is a
            modern loyalty system tailored for small and medium-sized merchants,
            aimed at <span class="font-semibold">boosting sales</span> by
            retaining existing and potential customers. This innovative platform
            replaces outdated stamp card systems with a seamless digital
            solution. At its core, RewardsPlus uses a digital bonus point called
            <strong class="text-purple-700">REWARDS+ Token</strong> — to reward
            customer loyalty.
          </p>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row items-center gap-4 w-full">
            <!-- Email Input -->
            <input
              type="email"
              placeholder="Enter your email"
              class="px-6 py-3 text-base sm:text-lg rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-80 md:w-96 shadow-sm"
            />

            <!-- Get Started Button -->
            <a
              href="#"
              class="px-6 py-3 text-base sm:text-lg font-medium bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition w-full sm:w-auto text-center"
            >
              Get Started
            </a>
          </div>
        </div>

        <!-- Right: Video -->
        <div class="flex justify-center">
          <div
            class="w-full max-w-lg aspect-video rounded-2xl overflow-hidden shadow-lg border-4 border-purple-400"
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

    <!-- 1 UseCases Section -->
    <section id="use-cases">
      <UseCases />
    </section>

    <!-- 2 How It Works Section -->
    <section id="how-it-works">
      <HowItWorks />
    </section>

    <!-- 3 Features Section -->
    <section id="features">
      <Features />
    </section>

    <!-- 4 Statistics Section -->
    <section id="statistics">
      <Statistics />
    </section>
    <!-- App Section -->
    <AppDownload />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import UseCases from "../components/UseCases.vue";
import HowItWorks from "../components/HowItWorks.vue";
import Statistics from "../components/OverallStatistics.vue";
import Features from "../components/Features.vue";
import Footer from "../components/Footer.vue";
import AppDownload from "../components/AppDownload.vue";
</script>
