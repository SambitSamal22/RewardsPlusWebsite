<template>
  <div class="min-h-screen font-inter">
    <!-- Gradient Background -->
    <div
      class="bg-gradient-to-r from-[#a3f9d6] via-[#d1e8f6] to-[#d5a9f7] py-20"
    >
      <div
        class="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center"
      >
        <!-- Contact Info -->
        <!-- Contact Info -->
        <div class="md:ml-8 lg:ml-12">
          <!-- Heading -->
          <h2
            class="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-6 text-black whitespace-nowrap"
          >
            How Can We Help You ?
          </h2>

          <!-- Address -->
          <div class="flex items-start mb-4 space-x-4">
            <div class="text-blue-600">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <p
              class="text-sm sm:text-base md:text-lg text-black whitespace-nowrap"
            >
              GautingerStr. 24a, 82152, Krailling
            </p>
          </div>

          <!-- LinkedIn -->
          <div class="flex items-start mb-4 space-x-4">
            <div class="text-blue-600">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <a
              href="https://www.linkedin.com"
              class="text-sm sm:text-base md:text-lg text-blue-800 underline break-all"
            >
              www.linkedin.com/company/rewardsplus
            </a>
          </div>

          <!-- Email -->
          <div class="flex items-start mb-4 space-x-4">
            <div class="text-blue-600">
              <i class="fas fa-envelope"></i>
            </div>
            <a
              href="mailto:support@rewardsplus.io"
              class="text-sm sm:text-base md:text-lg text-black"
            >
              support@rewardsplus.io
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
    <AppDownload />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import ContactForm from "../components/ContactForm.vue";
import Footer from "../components/Footer.vue";
import AppDownload from "../components/AppDownload.vue";
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");
</style>
