<!-- This page is for downloading the RewardsPlus app with Qr code  -->

<template>
  <div
    class="flex flex-col min-h-screen bg-gradient-to-b from-purple-400 via-purple-300 to-blue-200 font-['Open_Sans',sans-serif]"
  >
    <!-- Main Content -->
    <main
      class="flex-grow flex flex-col items-center justify-center text-center py-16 px-4"
    >
      <h1
        class="whitespace-nowrap text-3xl md:text-4xl font-bold text-gray-900 mb-6"
      >
        Download Our App
      </h1>
      <p
        class="text-base sm:text-lg md:text-xl text-gray-800/90 mb-10 max-w-2xl leading-relaxed"
      >
        Experience the best of RewardsPlus — download now and start earning
        rewards instantly!
      </p>

      <!-- Store Buttons -->
      <div class="flex flex-wrap justify-center gap-6">
        <a
          href="https://play.google.com/store/apps/details?id=com.wtm.rewardsplus.rewards.more"
          target="_blank"
          rel="noopener"
        >
          <img
            :src="googlePlay"
            alt="Get it on Google Play"
            class="h-14 transition-transform duration-300 hover:scale-105"
          />
        </a>
        <a
          href="https://apps.apple.com/in/app/rewardsplus-rewards-more/id6737422630"
          target="_blank"
          rel="noopener"
        >
          <img
            :src="appStore"
            alt="Download on the App Store"
            class="h-14 transition-transform duration-300 hover:scale-105"
          />
        </a>
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Footer from "../components/Footer.vue";
import googlePlay from "@/assets/images/google-play-badge.png";
import appStore from "@/assets/images/app-store-badge.png";
</script>
