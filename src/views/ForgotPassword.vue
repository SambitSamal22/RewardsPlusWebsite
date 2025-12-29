<template>
  <div
    class="min-h-screen flex flex-col bg-gradient-to-br from-[#e0f7fa] to-[#ede7f6]"
  >
    <!-- Main Content -->
    <div class="flex-grow flex items-center justify-center p-6 pb-32">
      <div class="w-full max-w-md bg-white shadow-xl p-6 sm:p-8 rounded-2xl">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-bold text-[#5A3EF0]">Change Password</h2>
          <p class="text-sm text-gray-500 mt-2">
            Create a new password for your RewardsPlus account.
          </p>
        </div>

        <!-- Form -->
        <Form :validation-schema="schema" @submit="onSubmit" class="space-y-4">
          <!-- New Password -->
          <FormField name="newPassword">
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <div class="relative">
                  <Field
                    name="newPassword"
                    :type="showNewPassword ? 'text' : 'password'"
                    placeholder="Enter new password"
                    class="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#5A3EF0]"
                  />

                  <button
                    type="button"
                    @click="showNewPassword = !showNewPassword"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    <EyeOff v-if="showNewPassword" class="w-5 h-5" />
                    <Eye v-else class="w-5 h-5" />
                  </button>
                </div>
              </FormControl>
              <FormMessage
                name="newPassword"
                class="text-sm text-red-600 mt-1"
              />
              <p class="text-xs text-gray-400 mt-1">
                8–16 characters, at least 1 letter, 1 number & 1 special symbol.
              </p>
            </FormItem>
          </FormField>

          <!-- Confirm Password -->
          <FormField name="confirmPassword">
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div class="relative">
                  <Field
                    name="confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    placeholder="Re-enter new password"
                    class="mt-2 w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#5A3EF0]"
                  />

                  <button
                    type="button"
                    @click="showConfirmPassword = !showConfirmPassword"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    <EyeOff v-if="showConfirmPassword" class="w-5 h-5" />
                    <Eye v-else class="w-5 h-5" />
                  </button>
                </div>
              </FormControl>
              <FormMessage
                name="confirmPassword"
                class="text-sm text-red-600 mt-1"
              />
            </FormItem>
          </FormField>

          <!-- Submit Button -->
          <div>
            <Button type="submit" :disabled="loading" class="w-full">
              <span v-if="!loading">Change Password</span>
              <span v-else>Processing…</span>
            </Button>
          </div>
        </Form>

        <!-- Login Link -->
        <p class="text-center text-sm text-gray-600 mt-4">
          Remember your password?
          <RouterLink to="/login" class="text-[#5A3EF0] font-semibold ml-1">
            Log In
          </RouterLink>
        </p>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
/* Vue + Router */
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";

/* API */
import ApiService from "@/services/api";

/* Footer */
import Footer from "@/components/Footer.vue";

/* SweetAlert2 */

import Swal from "sweetalert2";
("sweetalert2/dist/sweetalert2.min.css");

/* VeeValidate & Yup */
import { Form as VeeForm, Field, type SubmissionHandler } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";
/* shadcn-vue form components */
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

/* Icons */
import { Eye, EyeOff } from "lucide-vue-next";

/* Form typing */
interface FormValues {
  newPassword: string;
  confirmPassword: string;
}

interface ApiResponse {
  result?: { code?: string; message?: string };
}

/* Router + Loading */
const router = useRouter();
const loading = ref(false);

/* Password toggles */
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

/* Fix VeeValidate Form typing */
const Form = VeeForm as new () => {
  $props: { onSubmit: SubmissionHandler<FormValues> };
};

/* Validation schema */
const schema = Yup.object({
  newPassword: Yup.string()
    .required("New password is required.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/,
      "Password must be 8–16 characters with 1 letter, 1 number & 1 special symbol."
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password.")
    .oneOf([Yup.ref("newPassword")], "Passwords must match."),
});

/* Submit handler */
const onSubmit: SubmissionHandler<FormValues> = async (values) => {
  loading.value = true;

  try {
    const params = new URLSearchParams(window.location.search);
    const validationCode = params.get("code") || "";

    const payload = {
      validationCode,
      newPassword: values.newPassword,
      confirmnewPassword: values.confirmPassword,
      channelName: "WEB",
    };

    // const res = await ApiService.post<ApiResponse>(
    //   "/ForgotPasswordValidation",
    //   payload
    // );

    const res = await axios.post(
      "https://sit-validator.rewardsplus.io:9082/Neoteric/V1/ForgotPasswordValidation",
      payload
    );

    // const resultCode = res?.result?.code ?? "";
    const resultCode = res?.data?.result?.code ?? "";
    console.log("Result Code:", resultCode);
    /* Handle responses with SweetAlert2 */
    if (resultCode === "0000") {
      Swal.fire({
        icon: "success",
        title: "Password Updated!",
        text: "Your password has been updated successfully.",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => router.push("/login"));
    } else if (resultCode === "1072") {
      Swal.fire({
        icon: "error",
        title: "Invalid Link!",
        text: "Please request a new reset link.",
      });
    } else if (resultCode === "1005") {
      Swal.fire({
        icon: "warning",
        title: "Passwords do not match!",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Server Error!",
      text: "Please try again later.",
    });
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
