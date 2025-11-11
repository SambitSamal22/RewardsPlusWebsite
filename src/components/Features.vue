<template>
  <section
    class="py-20 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 font-['Open_Sans',sans-serif]"
  >
    <!-- Section Header -->
    <div class="text-center mb-20 px-6 max-w-4xl mx-auto">
      <h2 class="text-5xl font-extrabold text-gray-900 mb-6">Our Features</h2>
      <p class="text-lg text-gray-700 leading-relaxed">
        RewardsPlus offers a modern digital loyalty platform with powerful
        features to help businesses grow and engage customers effectively.
      </p>
    </div>

    <!-- Features Grid -->
    <div class="space-y-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="grid md:grid-cols-2 gap-10 items-center"
      >
        <!-- Image -->
        <div
          :class="[
            index % 2 === 1 ? 'order-1 md:order-2' : '',
            'flex justify-center',
          ]"
        >
          <img
            :src="feature.image"
            :alt="feature.title"
            class="rounded-2xl shadow-2xl w-full max-w-md transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <!-- Text -->
        <div
          :class="[
            'space-y-4',
            index % 2 === 1 ? 'order-2 md:order-1 md:pl-12' : 'md:pr-12',
          ]"
        >
          <!-- Title -->
          <h3 class="text-2xl font-semibold text-[#1E3A8A]">
            {{ feature.title }}
          </h3>

          <!-- Description -->
          <p class="text-[18.7px] italic text-gray-600 leading-[1.6] max-w-xl">
            {{ feature.description }}
          </p>

          <!-- Points (optional) -->
          <ul
            v-if="feature.points.length"
            class="list-disc list-inside text-gray-600 text-base leading-relaxed space-y-1"
          >
            <li v-for="(point, i) in feature.points" :key="i">
              {{ point }}
            </li>
          </ul>

          <!-- Extra paragraph -->
          <p
            v-if="feature.extra"
            class="text-base italic text-gray-600 leading-relaxed max-w-xl"
          >
            {{ feature.extra }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import feature1 from "@/assets/images/loyality.png";
import feature2 from "@/assets/images/security.png";
import feature3 from "@/assets/images/agileEngine.png";
import feature4 from "@/assets/images/bonuscard.png";
import Bonus from "@/assets/images/bonuspoint.jpeg";
import MultiPatner from "@/assets/images/multipatner.png";

const features = [
  {
    title: "Go paperless with a fully digital bonus card",
    description: `No more paper stamp cards — your loyalty rewards are now fully digital.
The bonus card lives inside the mobile app, so it’s always with you when you shop. 
No risk of losing or forgetting it, and tracking your rewards is effortless. 
Every purchase is recorded instantly, making it simple to collect and redeem your bonuses.`,
    points: [],
    image: feature4,
  },
  {
    title: "Bonus Point Sharing",
    description: `RewardsPlus stands out with its exclusive bonus point sharing feature, allowing customers to instantly share their points with family and friends.
Whether it’s a single-merchant or a multi-partner loyalty program, this feature brings flexibility, connection, and real-time rewards like never before.`,
    points: [],
    image: Bonus,
  },
  {
    title: "Multi-Partner Loyalty System",
    description: `RewardsPlus offers a powerful multi-partner loyalty system that enables small and medium-sized businesses to collaborate and grow together through a shared rewards network. With this feature, customers can earn and redeem loyalty points across multiple participating merchants — for example, earning points at a café and spending them at a nearby boutique or salon. Each business maintains control over its own rewards rules and promotions while benefiting from shared customer engagement, cross-promotion, and increased foot traffic. By connecting local merchants into one cohesive loyalty ecosystem, RewardsPlus helps create stronger community relationships, enhance customer retention, and deliver more value to shoppers through a convenient, unified rewards experience.`,
    points: [],
    image: MultiPatner, // you can change this to another relevant image if available
  },
  {
    title: "Unified Loyalty Platform",
    description:
      "A single loyalty or rewards system designed to work seamlessly across multiple merchants. Users can earn and redeem points at different businesses through a single app, enjoying a consistent and convenient experience. Each participating merchant can maintain their own unique discount or reward structure, while the platform ensures a unified interface and streamlined user experience across all types of merchants.",
    points: [],
    image: feature1,
  },

  {
    title: "Fraud Prevention & Trust Safeguards",
    description: `The system proactively monitors and prevents fraudulent activities, ensuring that loyalty points and rewards are redeemed legitimately. 
It incorporates multiple protective layers such as:`,
    points: [
      "Merchant Approval Controls – Certain redemptions or high-value transactions require merchant confirmation before completion.",
      "Daily Redemption Limits – Caps on the number or value of redemptions per day to reduce abuse.",
      "Proximity Verification – Location-based checks to ensure the customer is physically near the merchant when redeeming rewards.",
    ],
    extra: `These safeguards build trust, transparency, and fairness for both customers and merchants while keeping the platform secure.`,
    image: feature2,
  },
  {
    title: "Agile & Configurable Rewards Engine",
    description: `The loyalty system is designed to be highly flexible, allowing merchants to quickly adapt and launch new offers without complex setup. 
This agility enables businesses to delight customers with a variety of engaging benefits such as:`,
    points: [
      "Welcome Bonuses – Instant rewards for new customers to boost first-time engagement.",
      "Referral Bonuses – Incentives for bringing in friends and growing the customer base organically.",
      "Birthday Surprises & Special Occasions – Personalized perks that strengthen emotional connection.",
      "Seasonal & Flash Campaigns – Limited-time rewards to create excitement and urgency.",
    ],
    image: feature3,
  },
];
</script>
