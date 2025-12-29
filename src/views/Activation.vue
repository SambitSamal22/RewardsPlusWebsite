<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-r from-[#a3f9d6] via-[#d1e8f6] to-[#d5a9f7]"
  >
    <!-- Main Content -->
    <div class="flex-grow flex items-center justify-center px-4 py-16 sm:py-20">
      <div class="w-full max-w-lg text-center">
        <!-- Loading -->
        <div v-if="state === 'loading'">
          <div class="p-8 sm:p-10 bg-white rounded-2xl shadow-lg">
            <h2
              class="text-xl sm:text-2xl font-semibold animate-pulse text-gray-700 whitespace-nowrap"
            >
              Validating your activation link...
            </h2>
          </div>
        </div>

        <!-- Success -->
        <div v-if="state === 'success'">
          <div class="p-8 sm:p-10 bg-white rounded-2xl shadow-lg">
            <h2
              class="text-2xl sm:text-3xl font-bold text-green-600 whitespace-nowrap"
            >
              Account Activated
            </h2>

            <p class="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
              Your account has been successfully activated.<br />
              Open the RewardsPlus App to start earning rewards.
            </p>
          </div>
        </div>

        <!-- Already Activated -->
        <div v-if="state === 'already'">
          <div class="p-8 sm:p-10 bg-white rounded-2xl shadow-lg">
            <h2
              class="text-2xl sm:text-3xl font-bold text-blue-700 whitespace-nowrap"
            >
              Already Activated
            </h2>
            <p class="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
              Your account is already activated.<br />
              Please log in using the RewardsPlus App.
            </p>
          </div>
        </div>

        <!-- Expired -->
        <div v-if="state === 'expired'">
          <div class="p-8 sm:p-10 bg-white rounded-2xl shadow-lg">
            <h2
              class="text-2xl sm:text-3xl font-bold text-yellow-600 whitespace-nowrap"
            >
              Activation Link Expired
            </h2>
            <p class="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
              Your activation link has expired.<br />
              A new activation link has been sent to your email.
            </p>
          </div>
        </div>

        <!-- Error -->
        <div v-if="state === 'error'">
          <div class="p-8 sm:p-10 bg-white rounded-2xl shadow-lg">
            <h2
              class="text-2xl sm:text-3xl font-bold text-red-600 whitespace-nowrap"
            >
              Server Error
            </h2>
            <p class="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
              We’re facing an issue validating your account.<br />
              Please try again later.
            </p>
          </div>
        </div>

        <!-- Invalid -->
        <div v-if="state === 'invalid'">
          <div class="p-8 sm:p-10 bg-white rounded-2xl shadow-lg">
            <h2
              class="text-2xl sm:text-3xl font-bold text-red-600 whitespace-nowrap"
            >
              Invalid Link
            </h2>
            <p class="text-gray-700 mt-3 text-sm sm:text-base leading-relaxed">
              The activation link appears to be invalid.<br />
              Please contact support or request a new one.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<!-- 
<script setup lang="ts">
import { ref, onMounted } from "vue";
import ApiService from "@/services/api";
import Footer from "@/components/Footer.vue";

// Response type based on backend structure
interface ActivationResponse {
  result?: {
    code?: string;
    message?: string;
  };
}

const state = ref("loading"); // loading, success, already, expired, error, invalid

const validateCode = async () => {
  const params = new URLSearchParams(window.location.search);
  const value = params.get("code");

  const payload = {
    validationCode: value,
    channelName: "WEB",
  };

  try {
    const res = await ApiService.post<ActivationResponse>(
      "/ValidateAuthCode",
      payload
    );

    const code = res.result?.code;

    switch (code) {
      case "0000":
        state.value = "success";
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

        // Try to open mobile app using deep link
        setTimeout(() => {
          window.location.href =
            "com.wtm.rewardsplus.rewards.more://activation";
        }, 1500);

        //  Fallback to correct store
        setTimeout(() => {
          if (isIOS) {
            // iOS fallback → App Store
            window.location.href =
              "https://apps.apple.com/in/app/rewardsplus-rewards-more/id6737422630";
          } else {
            // Android fallback → Play Store
            window.location.href =
              "https://play.google.com/store/apps/details?id=com.wtm.rewardsplus.rewards.more";
          }
        }, 3000);
        break;
      case "1000":
        state.value = "already";
        break;
      case "1001":
        state.value = "expired";
        break;
      case "52":
        state.value = "error";
        break;
      default:
        state.value = "invalid";
        break;
    }
  } catch (err) {
    console.error(err);
    state.value = "error";
  }
};

onMounted(() => validateCode());
</script>-->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import ApiService from "@/services/api";
import Footer from "@/components/Footer.vue";

interface ActivationResponse {
  result?: {
    code?: string;
    message?: string;
  };
}

const state = ref("loading");
// loading, success, already, expired, error, invalid

const validateCode = async () => {
  const params = new URLSearchParams(window.location.search);
  const codeParam = params.get("code");
  const payload = {
    validationCode: codeParam,
    channelName: "WEB",
  };

  try {
    const res = await ApiService.post<ActivationResponse>(
      "/ValidateAuthCode",
      payload
    );

    const code: string = res.result?.code || "";
    applyState(code);
  } catch (err) {
    console.error(err);
    state.value = "error";
  }
};

// Convert API code → UI state
const applyState = (code: string) => {
  switch (code) {
    case "0000":
      state.value = "success";
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

      // Try to open mobile app using deep link
      setTimeout(() => {
        window.location.href = "com.wtm.rewardsplus.rewards.more://activation";
      }, 1500);

      //  Fallback to correct store
      setTimeout(() => {
        if (isIOS) {
          // iOS fallback → App Store
          window.location.href =
            "https://apps.apple.com/in/app/rewardsplus-rewards-more/id6737422630";
        } else {
          // Android fallback → Play Store
          window.location.href =
            "https://play.google.com/store/apps/details?id=com.wtm.rewardsplus.rewards.more";
        }
      }, 30000);
      break;
    case "1000":
      state.value = "already";
      break;
    case "1001":
      state.value = "expired";
      break;
    case "52":
      state.value = "error";
      break;
    default:
      state.value = "invalid";
      break;
  }
};

onMounted(() => validateCode());
</script>

<style scoped>
/* Extra smooth gradient */
</style>
