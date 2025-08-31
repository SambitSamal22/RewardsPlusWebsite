<template>
  <div
    class="min-h-auto py-16 px-4 sm:px-6 lg:px-8 font-inter rounded-2xl bg-gradient-to-br from-indigo-800 to-indigo-900"
  >
    <div
      class="max-w-xl mx-auto bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg"
    >
      <h2
        class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8"
      >
        Contact Us
      </h2>

      <form @submit="onSubmit" class="space-y-6 w-full">
        <div class="flex flex-col md:flex-row gap-4">
          <!-- First Name -->
          <FormField v-slot="{ componentField }" name="firstname">
            <FormItem class="w-full">
              <FormLabel
                class="text-sm font-medium text-gray-700 dark:text-gray-200"
                >First Name <span class="text-red-500">*</span></FormLabel
              >
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your first name"
                  class="mt-1"
                  v-bind="componentField"
                  aria-required="true"
                />
              </FormControl>
              <FormMessage class="text-red-500 text-sm mt-1" />
            </FormItem>
          </FormField>

          <!-- Last Name -->
          <FormField v-slot="{ componentField }" name="lastname">
            <FormItem class="w-full">
              <FormLabel
                class="text-sm font-medium text-gray-700 dark:text-gray-200"
                >Last Name</FormLabel
              >
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your last name"
                  class="mt-1"
                  v-bind="componentField"
                  aria-required="true"
                />
              </FormControl>
              <FormMessage class="text-red-500 text-sm mt-1" />
            </FormItem>
          </FormField>
        </div>

        <!-- Email + Phone -->
        <div class="flex flex-col md:flex-row gap-4 w-full">
          <FormField v-slot="{ componentField }" name="email">
            <FormItem class="w-full">
              <FormLabel
                class="text-sm font-medium text-gray-700 dark:text-gray-200"
                >Email <span class="text-red-500">*</span></FormLabel
              >
              <FormControl>
                <Input
                  type="tel"
                  class="mt-1"
                  placeholder="Enter your email"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage class="text-red-500 text-sm mt-1" />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="phone">
            <FormItem class="w-full">
              <FormLabel
                class="text-sm font-medium text-gray-700 dark:text-gray-200"
                >Phone Number</FormLabel
              >
              <FormControl>
                <Input
                  type="tel"
                  class="mt-1"
                  placeholder="Enter your phone"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage class="text-red-500 text-sm mt-1" />
            </FormItem>
          </FormField>
        </div>
        <!-- Organization -->
        <FormField v-slot="{ componentField }" name="organization">
          <FormItem>
            <FormLabel
              class="text-sm font-medium text-gray-700 dark:text-gray-200"
              >Organization <span class="text-red-500">*</span></FormLabel
            >
            <FormControl>
              <Input
                type="text"
                placeholder="Your company or organization"
                class="mt-1"
                v-bind="componentField"
                aria-required="true"
              />
            </FormControl>
            <FormMessage class="text-red-500 text-sm mt-1" />
          </FormItem>
        </FormField>
        <!-- Message -->
        <FormField v-slot="{ componentField }" name="message">
          <FormItem>
            <FormLabel
              class="text-sm font-medium text-gray-700 dark:text-gray-200"
              >Message <span class="text-red-500">*</span></FormLabel
            >
            <FormControl>
              <Textarea
                id="message-2"
                v-bind="componentField"
                class="mt-1"
                placeholder="Type your message here."
              />
            </FormControl>
            <FormMessage class="text-red-500 text-sm mt-1" />
          </FormItem>
        </FormField>
        <!-- Submit Button -->
        <Button
          type="submit"
          class="w-full bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-md transition duration-200"
        >
          Submit
        </Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = toTypedSchema(
  z.object({
    firstname: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" }),
    lastname: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters" })
      .optional(),
    organization: z
      .string()
      .min(2, { message: "Organization name is required" }),

    email: z
      .string()
      .email({ message: "Invalid email address" })
      .nonempty({ message: "Email is required" }),

    phone: z
      .string()
      .regex(/^[0-9+\-\s()]*$/, { message: "Invalid phone number" })
      .optional(),
    message: z
      .string()
      .min(2, {
        message: "Message must be at least 2 characters.",
      })
      .max(500, {
        message: "Message must not be longer than 500 characters.",
      }),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>
