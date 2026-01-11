<template>
  <section
    class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16"
  >
    <!-- Page Title -->
    <div class="text-center mb-8 sm:mb-10">
      <h1
        class="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7A5CFA] mb-2 sm:mb-3"
      >
        Frequently Asked Questions
      </h1>
      <p class="text-sm sm:text-base text-gray-600">
        Find quick answers to common questions about RewardsPlus.
      </p>
    </div>

    <!-- Accordion FAQs -->
    <Accordion type="single" collapsible class="space-y-3 sm:space-y-4">
      <AccordionItem
        v-for="(faq, index) in faqs"
        :key="index"
        :value="`item-${index}`"
        class="border rounded-xl sm:rounded-2xl shadow-sm bg-white"
      >
        <AccordionTrigger
          class="px-4 sm:px-6 py-4 text-base sm:text-lg lg:text-xl font-semibold text-gray-800 hover:text-[#7A5CFA] transition text-left"
        >
          {{ faq.question }}
        </AccordionTrigger>

        <AccordionContent class="px-4 sm:px-6 pb-4 sm:pb-5 bg-gray-50">
          <div
            class="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed"
          >
            <template v-for="(node, i) in faq.answer" :key="i">
              <!-- Section heading -->
              <h3
                v-if="node.type === 'section'"
                class="mt-4 mb-2 text-base sm:text-lg font-semibold text-[#7A5CFA]"
              >
                {{ node.text }}
              </h3>

              <!-- Paragraph -->
              <p v-else-if="node.type === 'paragraph'">
                <template v-for="(part, k) in node.parts" :key="k">
                  <span v-if="part.type === 'text'">
                    {{ part.value }}
                  </span>

                  <a
                    v-else-if="part.type === 'email'"
                    :href="`mailto:${part.value}`"
                    class="text-[#7A5CFA] font-medium underline break-all"
                  >
                    {{ part.value }}
                  </a>

                  <a
                    v-else-if="part.type === 'phone'"
                    :href="`tel:${part.value}`"
                    class="text-[#7A5CFA] font-medium underline"
                  >
                    {{ part.value }}
                  </a>
                </template>
              </p>

              <!-- Bullet list -->
              <ul
                v-else-if="node.type === 'list'"
                class="list-disc pl-5 sm:pl-6 space-y-1 sm:space-y-2"
              >
                <li v-for="(item, j) in node.items" :key="j">
                  <span v-if="item.bold" class="font-semibold text-gray-900">
                    {{ item.bold }}:
                  </span>
                  <span>{{ item.text }}</span>

                  <RouterLink
                    v-if="item.link"
                    :to="item.link"
                    class="text-[#7A5CFA] font-medium underline ml-1"
                  >
                    {{ item.linkText }}
                  </RouterLink>
                </li>
              </ul>
            </template>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>

  <Footer />
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Footer from "../components/Footer.vue";

/* -------------------------------------------------------
   Types
------------------------------------------------------- */
type TextPart =
  | { type: "text"; value: string }
  | { type: "email"; value: string }
  | { type: "phone"; value: string };

type AnswerNode =
  | { type: "section"; text: string }
  | { type: "paragraph"; parts: TextPart[] }
  | {
      type: "list";
      items: {
        bold?: string;
        text: string;
        link?: string;
        linkText?: string;
      }[];
    };

/* -------------------------------------------------------
   FAQ Data (Structured)
------------------------------------------------------- */
const faqs: { question: string; answer: AnswerNode[] }[] = [
  {
    question: "What is RewardsPlus and how does it work?",
    answer: [
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "RewardsPlus is a digital loyalty platform designed to help merchants increase customer retention by rewarding repeat engagement and purchases. It is a modern, efficient, and cost-effective solution tailored for small and medium-sized businesses, supporting various industries including food service, retail, salons, and grocery stores.",
          },
        ],
      },
    ],
  },
  {
    question:
      "What are the benefits of using RewardsPlus for customers and merchants?",
    answer: [
      { type: "section", text: "For Customers" },
      {
        type: "list",
        items: [
          {
            bold: "Convenience",
            text: "All loyalty cards are stored digitally on the customer’s mobile phone, eliminating the need for paper stamp cards that can be lost or forgotten.",
          },
          {
            text: "Customers can easily track and redeem their rewards anytime.",
          },
        ],
      },
      { type: "section", text: "For Merchants" },
      {
        type: "list",
        items: [
          {
            bold: "Easy Setup & Usage",
            text: "No POS integration or expensive hardware is required. Merchants can quickly onboard with minimal setup.",
          },
          {
            bold: "Built-In Digital Marketing",
            text: "Engage customers through push notifications to promote offers, rewards, and updates.",
          },
          {
            bold: "Analytics & Dashboard",
            text: "Dashboards and statistics to monitor customer behavior and performance.",
          },
          {
            bold: "Reports",
            text: "Monthly transaction summary and monthly total bonus point credit/debit reports.",
          },
          {
            bold: "Advanced Features",
            text: "Point sharing among family and friends and coalition programs within a community.",
          },
          {
            bold: "Tailored Services",
            text: "Domain-specific services such as table reservation and takeaway for restaurants.",
          },
        ],
      },
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "RewardsPlus is a convenient, cost-effective loyalty solution that enhances customer engagement and supports business growth.",
          },
        ],
      },
    ],
  },
  {
    question: "What kind of businesses is RewardsPlus suitable for?",
    answer: [
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "RewardsPlus is suitable for any business or organization that wants to encourage repeat engagement, whether from customers, students, or other stakeholders. It can be used by businesses of all sizes and is especially recommended for small and medium-sized businesses. RewardsPlus can also be integrated with online shops.",
          },
        ],
      },
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "Popular industries include beauty parlors and salons, fast food outlets, retail stores, service-based businesses, gaming and entertainment venues, kiosks, and fitness and well-being studios.",
          },
        ],
      },
    ],
  },
  {
    question: "How much does RewardsPlus cost?",
    answer: [
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value: "For end customers, RewardsPlus is completely free to use.",
          },
        ],
      },
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "For merchants, RewardsPlus is offered as a monthly subscription with no setup fees and no POS hardware requirement. There are three pricing plans available: Basic, Growth, Pay-As-You-Go.",
          },
        ],
      },
      {
        type: "list",
        items: [
          {
            text: "Please visit our pricing page for more details",
            link: "/pricing",
            linkText: "Click here",
          },
        ],
      },
    ],
  },
  {
    question: "Do you offer a free trial?",
    answer: [
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value: "Yes, RewardsPlus offers a 30-day free trial for all plans.",
          },
        ],
      },
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "This allows merchants to review and customize their stamp card, train staff, and introduce the program to customers. After the free trial ends, the account automatically rolls over to a paid plan with no interruption to the loyalty program.",
          },
        ],
      },
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "If you cancel before the trial ends, there are no cancellation fees and no setup costs.",
          },
        ],
      },
    ],
  },
  {
    question: "Does RewardsPlus integrate with POS systems?",
    answer: [
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "Yes, RewardsPlus can be used both with and without POS integration. Small and medium-sized merchants can start immediately without extra hardware or complex setup.",
          },
        ],
      },
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "For businesses that require POS integration, RewardsPlus provides APIs to connect with POS systems and automatically calculate reward points, provided the POS system supports integration.",
          },
        ],
      },
    ],
  },
  {
    question: "How can I update company and personal account information?",
    answer: [
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "Merchants can update personal contact details, login credentials, and company information directly from the Merchant Console.",
          },
        ],
      },
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "When onboarding, merchants receive credentials to access the back-office portal where all updates can be managed easily.",
          },
        ],
      },
    ],
  },
  {
    question: "How can I earn reward points?",
    answer: [
      { type: "section", text: "Offline Shopping" },
      {
        type: "list",
        items: [
          {
            text: "Scan the merchant’s QR code using the RewardsPlus app to earn bonus points.",
          },
        ],
      },
      { type: "section", text: "Online Shopping" },
      {
        type: "list",
        items: [
          {
            text: "Select the RewardsPlus member option on participating online shopping sites to accumulate bonus points.",
          },
        ],
      },
    ],
  },
  {
    question: "What are the different types of balances?",
    answer: [
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "Customers can view their bonus points balance on the RewardsPlus dashboard. The total balance is the sum of points from all merchants.",
          },
        ],
      },
      {
        type: "list",
        items: [
          {
            bold: "Passive Balance",
            text: "Points earned from a purchase remain inactive until approved by the merchant. These cannot be redeemed.",
          },
          {
            bold: "Active Balance",
            text: "Once approved, points move to active balance and can be redeemed.",
          },
        ],
      },
    ],
  },
  {
    question: "How are reward points calculated?",
    answer: [
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "Merchants decide the discount percentage, which RewardsPlus converts into bonus points.",
          },
        ],
      },
      {
        type: "list",
        items: [
          { text: "Stamp Card – BUY X, GET 1 FREE model." },
          {
            text: "Flat Discount – Fixed percentage discount converted into points.",
          },
          {
            text: "Up-Selling – Higher discounts for higher purchase amounts.",
          },
          {
            text: "Article-Based Discount – Discounts applied to specific items.",
          },
        ],
      },
    ],
  },
  {
    question: "How can I redeem bonus points?",
    answer: [
      { type: "section", text: "Offline Shopping" },
      {
        type: "list",
        items: [
          { text: "Scan the merchant’s QR code using the RewardsPlus app." },
        ],
      },
      { type: "section", text: "Online Shopping" },
      {
        type: "list",
        items: [
          {
            text: "Choose the RewardsPlus member option during checkout on participating sites.",
          },
        ],
      },
    ],
  },
  {
    question:
      "Can I use bonus points collected from one merchant at other merchants?",
    answer: [
      {
        type: "list",
        items: [
          {
            bold: "Single Merchant Loyalty",
            text: " Points can only be redeemed with the same merchant.",
          },
          {
            bold: "Multi-Partner Loyalty",
            text: "Points can be redeemed across participating merchants.",
          },
        ],
      },
    ],
  },
  {
    question:
      "How does RewardsPlus prevent misuse of stamping and reward redemptions?",
    answer: [
      {
        type: "list",
        items: [
          {
            bold: "Merchant Approval",
            text: "Points are credited only after merchant approval.",
          },
          {
            bold: "Proximity Check",
            text: "Customers must be physically present at the store.",
          },
          {
            bold: "Activity Monitoring",
            text: "Suspicious activity is detected and reported.",
          },
        ],
      },
      {
        type: "paragraph",
        parts: [
          {
            type: "text",
            value:
              "These measures ensure fair usage while maintaining customer convenience.",
          },
        ],
      },
    ],
  },
  {
    question: "How can I contact customer support?",
    answer: [
      {
        type: "list",
        items: [
          { bold: "Phone", text: "+49 (0)89-45249066" },
          { bold: "Email", text: "support@rewardsplus.io" },
        ],
      },
    ],
  },
];
</script>

<style scoped>
[data-state="open"] {
  animation: accordion-down 0.25s ease-out;
}
[data-state="closed"] {
  animation: accordion-up 0.2s ease-in;
}

@keyframes accordion-down {
  from {
    opacity: 0;
    transform: translateY(-4px);
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
    transform: translateY(-4px);
  }
}
</style>
