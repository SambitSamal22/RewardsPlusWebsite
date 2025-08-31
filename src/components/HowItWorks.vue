<template>
  <div class="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 py-16">
    <div class="container mx-auto px-6 text-center">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        How It Works
      </h2>

      <!-- Steps -->
      <div
        class="flex flex-col md:flex-row items-center justify-center gap-10 relative"
      >
        <!-- Step 1 -->
        <div
          class="relative bg-white shadow-md rounded-xl p-6 w-64 text-center"
        >
          <div
            class="absolute -top-4 -left-4 bg-red-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center"
          >
            1
          </div>
          <img
            src="@/assets/icons/account.png"
            alt="Account"
            class="h-12 mx-auto mb-4"
          />
          <p class="text-gray-700"><strong>Create</strong> an account</p>
        </div>

        <!-- Connector Line -->
        <div class="hidden md:block h-0.5 w-10 bg-gray-400"></div>

        <!-- Step 2 -->
        <div
          class="relative bg-white shadow-md rounded-xl p-6 w-64 text-center"
        >
          <div
            class="absolute -top-4 -left-4 bg-red-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center"
          >
            2
          </div>
          <img src="" alt="Stamp" class="h-12 mx-auto mb-4" />
          <p class="text-gray-700"><strong>Build</strong> your Stamp Card(s)</p>
        </div>

        <!-- Connector Line -->
        <div class="hidden md:block h-0.5 w-10 bg-gray-400"></div>

        <!-- Step 3 -->
        <div
          class="relative bg-white shadow-md rounded-xl p-6 w-64 text-center"
        >
          <div
            class="absolute -top-4 -left-4 bg-red-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center"
          >
            3
          </div>
          <img src="" alt="Plan" class="h-12 mx-auto mb-4" />
          <p class="text-gray-700">
            <strong>Select</strong> plan to publish card & begin your free trial
          </p>
        </div>

        <!-- Connector Line -->
        <div class="hidden md:block h-0.5 w-10 bg-gray-400"></div>

        <!-- Step 4 -->
        <div
          class="relative bg-white shadow-md rounded-xl p-6 w-64 text-center"
        >
          <div
            class="absolute -top-4 -left-4 bg-red-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center"
          >
            4
          </div>
          <img src="" alt="Rocket" class="h-12 mx-auto mb-4" />
          <p class="text-gray-700">
            <strong>Implement</strong> your awesome new retention tool!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
