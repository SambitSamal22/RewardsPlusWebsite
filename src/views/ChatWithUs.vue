<template>
  <div class="bg-gradient-to-r from-[#a3f9d6] via-[#d1e8f6] to-[#d5a9f7]">
    <section class="max-w-3xl mx-auto py-10 px-6">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-[#7A5CFA] mb-2">Chat With Us</h1>
        <p class="text-gray-600 text-base">
          Have a question or need help? We’re here to assist you!
        </p>
      </div>

      <!-- Chat Window -->
      <Card
        class="rounded-2xl shadow-sm overflow-hidden border border-gray-200"
      >
        <CardContent class="p-0 flex flex-col h-[600px] bg-gray-50">
          <!-- Messages -->
          <div class="flex-1 p-4 overflow-y-auto space-y-4">
            <div
              v-for="(msg, i) in messages"
              :key="i"
              :class="[
                'max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed',
                msg.from === 'user'
                  ? 'bg-[#7A5CFA] text-white ml-auto'
                  : 'bg-white border border-gray-200',
              ]"
            >
              {{ msg.text }}
            </div>
          </div>

          <!-- Input Section -->
          <div class="border-t bg-white p-4 flex items-center gap-3">
            <Input
              v-model="input"
              placeholder="Type your message..."
              class="flex-1"
              @keyup.enter="sendMessage"
            />
            <Button
              @click="sendMessage"
              class="bg-[#7A5CFA] hover:bg-[#6c4ff0] text-white"
            >
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  </div>
  <section>
    <!-- Footer -->
    <Footer />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "../components/Footer.vue";

interface Message {
  text: string;
  from: "user" | "bot";
}

const messages = ref<Message[]>([
  { text: "👋 Hi there! How can we help you today?", from: "bot" },
]);

const input = ref("");

const sendMessage = () => {
  if (!input.value.trim()) return;
  messages.value.push({ text: input.value, from: "user" });

  // Simulated auto-response
  setTimeout(() => {
    messages.value.push({
      text: "Thanks for your message! Our support team will respond shortly.",
      from: "bot",
    });
  }, 1000);

  input.value = "";
};
</script>

<style scoped>
.flex-1::-webkit-scrollbar {
  width: 6px;
}
.flex-1::-webkit-scrollbar-thumb {
  background-color: #d1d5db;
  border-radius: 9999px;
}
</style>
