<template>
  <footer
    class="text-white bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 relative"
  >
    <!-- Slanted Top Edge with Gradient Match -->
    <div class="absolute -top-12 left-0 w-full h-12 overflow-hidden">
      <svg
        class="w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#6B21A8" />
            <!-- from-purple-700 -->
            <stop offset="50%" stop-color="#4F46E5" />
            <!-- via-indigo-600 -->
            <stop offset="100%" stop-color="#3B82F6" />
            <!-- to-blue-500 -->
          </linearGradient>
        </defs>
        <polygon
          fill="url(#footerGradient)"
          points="0,100 1440,0 1440,100 0,100"
        />
      </svg>
    </div>

    <!-- Footer Content -->
    <div
      class="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-10"
    >
      <div>
        <router-link to="/" class="flex items-center text-2xl font-bold">
          <img
            src="../assets/logo.png"
            alt="RewardsPlus Logo"
            class="h-10 w-auto md:h-12"
          />
        </router-link>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-3">Company</h3>
        <ul class="space-y-2 text-sm text-gray-200">
          <li><router-link to="#">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-3">Support</h3>
        <ul class="space-y-2 text-sm text-gray-200">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Conditions</a></li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-semibold mb-3">Follow Us</h3>
        <div class="flex space-x-4 text-white text-xl">
          <a
            href="https://instagram.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-pink-500 transition duration-300"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-blue-500 transition duration-300"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-blue-400 transition duration-300"
          >
            <i class="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/@Rewardsplusapp"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-red-500 transition duration-300"
          >
            <i class="fab fa-youtube"></i>
          </a>
          <a
            href="https://linkedin.com/in/youraccount"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-blue-300 transition duration-300"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="pb-4 text-center text-sm text-gray-200 px-6">
      © 2025 RewardsPlus, Inc. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
/* Optional: FontAwesome hover effect */
.fab {
  transition: color 0.3s;
}
.fab:hover {
  color: #ffffff;
}
</style>
