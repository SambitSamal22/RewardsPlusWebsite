<script setup lang="ts">
import googlePlay from "@/assets/images/google-play-badge.png";
import appStore from "@/assets/images/app-store-badge.png";
</script>

<template>
  <section
    class="bg-gradient-to-b from-purple-400 via-purple-300 to-blue-200 py-12 text-center"
  >
    <h2 class="text-2xl md:text-3xl font-bold text-black mb-6">
      Download Our App
    </h2>
    <div class="flex justify-center space-x-6">
      <a
        href="https://play.google.com/store/apps/details?id=com.wtm.rewardsplus.rewards.more"
        target="_blank"
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
      >
        <img
          :src="appStore"
          alt="Download on the App Store"
          class="h-14 transition-transform duration-300 hover:scale-105"
        />
      </a>
    </div>
  </section>
</template>
