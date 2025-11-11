<template>
  <section class="max-w-4xl mx-auto py-16 px-6">
    <!-- Page Title -->
    <div class="text-center mb-10">
      <h1 class="text-4xl font-bold text-[#7A5CFA] mb-3">
        Frequently Asked Questions
      </h1>
      <p class="text-gray-600 text-base">
        Find quick answers to common questions about RewardsPlus.
      </p>
    </div>

    <!-- Accordion FAQs -->
    <Accordion type="single" collapsible class="space-y-4">
      <AccordionItem
        v-for="(faq, index) in faqs"
        :key="index"
        :value="`item-${index}`"
        class="border rounded-2xl shadow-sm"
      >
        <AccordionTrigger
          class="px-6 py-4 text-lg font-medium text-gray-800 hover:text-[#7A5CFA] transition flex justify-between items-center"
        >
          {{ faq.question }}
        </AccordionTrigger>
        <AccordionContent
          class="px-6 pb-5 text-gray-700 leading-relaxed bg-gray-50"
        >
          {{ faq.answer }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
  <section>
    <!-- Footer -->
    <Footer />
  </section>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Footer from "../components/Footer.vue";
const faqs = [
  {
    question: "What is RewardsPlus?",
    answer:
      "RewardsPlus is a customer loyalty platform that helps businesses reward and retain their customers through points, discounts, and bonuses.",
  },
  {
    question: "How can I register as a merchant?",
    answer:
      "Visit our Merchant Registration page and fill out the onboarding form. Once verified, you can start managing rewards and customers through your dashboard.",
  },
  {
    question: "How do customers earn points?",
    answer:
      "Customers earn points by making purchases at participating merchants. Each transaction automatically adds points that can be redeemed for discounts or rewards.",
  },
  {
    question: "Is there a mobile app for RewardsPlus?",
    answer:
      "Yes! The RewardsPlus mobile app lets customers view their points, redeem rewards, and discover nearby merchants effortlessly.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team through the Contact Us page or by emailing support@rewardsplus.io.",
  },
];
</script>

<style scoped>
/* Optional: smooth fade for accordion content */
[data-state="open"] {
  animation: accordion-down 0.25s ease-out;
}
[data-state="closed"] {
  animation: accordion-up 0.2s ease-in;
}

@keyframes accordion-down {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes accordion-up {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-5px);
  }
}
</style>
