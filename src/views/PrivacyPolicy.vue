<template>
  <div class="min-h-screen bg-[#0b0c2a] text-white">
    <!-- Header Section -->
    <div
      class="relative bg-gradient-to-r from-[#a3f9d6] via-[#d1e8f6] to-[#d5a9f7] pt-24 pb-32 text-center text-black"
    >
      <div class="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold">Our Privacy Policy</h1>
        <p class="mt-4 text-lg md:text-xl">Last Updated: March 3, 2025</p>
      </div>

      <!-- Curve Transition (same as Pricing page) -->
      <div
        class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] -mb-px"
      >
        <svg
          class="relative block w-full h-[160px] md:h-[200px] lg:h-[240px]"
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

    <!-- Privacy Policy Content -->
    <div class="max-w-6xl mx-auto px-10 py-16 space-y-5">
      <section>
        <p class="mb-8">
          This Privacy Policy explains how we collect, use, and share personal
          information on our website (<a
            href="https://www.rewardsplus.io"
            class="text-blue-600 underline"
            >www.rewardsplus.io</a
          >) and through our mobile applications. Any capitalized terms not
          defined here have the same meaning as in our Terms of Service.
        </p>
      </section>
      <section>
        <h2 class="text-2xl font-semibold mb-4">Overview</h2>
        <p class="text-gray-300">
          Rewardsplus UG is committed to protecting the privacy of its users.
          This Privacy Policy explains how we collect, use, and disclose
          personal information in connection with the Rewardsplus app.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">
          Collection of Personal Information
        </h2>
        <p class="text-gray-300">
          When you register for Rewardsplus app, we collect personal information
          such as your name, email address, and phone number. We may also
          collect information about your transactions, including purchases and
          rewards earned. In addition, we may collect information about your
          device, including device type and operating system.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Use of Personal Information</h2>
        <p class="text-gray-300">
          We use the personal information we collect to provide you with the
          Rewardsplus app and its features. This includes processing your
          transactions, sending you promotional offers, and improving the app's
          functionality. We may also use your personal information for research
          and analysis purposes to improve our products and services.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">
          Disclosure of Personal Information
        </h2>
        <p class="text-gray-300">
          We do not sell, rent, or otherwise disclose your personal information
          to third parties, except as described in this Privacy Policy. We may
          disclose your personal information to our service providers, who help
          us with app development, hosting, and maintenance. We may also
          disclose your personal information to comply with legal requirements
          or to protect our rights and property.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">
          Security of Personal Information
        </h2>
        <p class="text-gray-300">
          We take reasonable steps to protect the personal information we
          collect from unauthorized access, disclosure, or misuse. However, no
          data transmission over the internet or storage system can be
          guaranteed to be 100% secure. We encourage you to take steps to
          protect your personal information, such as using strong passwords and
          not sharing your login credentials.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">
          Retention of Personal Information
        </h2>
        <p class="text-gray-300">
          We retain your personal information for as long as necessary to
          provide you with the Rewardsplus app and its features. We may also
          retain your personal information for research and analysis purposes,
          to comply with legal requirements, or to protect our rights and
          property.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Children's Privacy</h2>
        <p class="text-gray-300">
          Rewardsplus app is not intended for children under the age of 18. We
          do not knowingly collect personal information from children under the
          age of 18.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Changes to Privacy Policy</h2>
        <p class="text-gray-300">
          Rewardsplus UG reserves the right to change this Privacy Policy at any
          time without prior notice. Users are responsible for regularly
          reviewing this Privacy Policy for any changes.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
        <p class="text-gray-300">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at
          <a
            href="mailto:support@rewardsplus.io"
            class="text-purple-400 hover:underline"
            >support@rewardsplus.io</a
          >.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4">Disclaimer</h2>
        <p class="text-gray-300">
          By using Rewardsplus app, you agree to this Privacy Policy. If you
          have concerns about our Privacy Policy or cannot agree to it, we
          kindly ask that you refrain from using the Rewardsplus app. We
          appreciate your understanding and hope to offer you a positive
          experience in the future.
        </p>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Footer from "../components/Footer.vue";
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Oswald:wght@400;600;700&display=swap");

/* Apply Lato to all text by default */

p,
li,
span {
  font-family: "Lato", sans-serif;
  font-size: 1.125rem; /* same as Tailwind text-lg */
  line-height: 1.75rem; /* improves readability */
}
/* Apply Oswald to headings */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald", arial, sans-serif;
}
</style>
