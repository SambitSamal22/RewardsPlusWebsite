export const posIntegrationApi = {
  title: "Rewards+ POS Integration",
  intro:
    "RewardsPlus is a modern loyalty solution built for small and medium-sized merchants. It can operate as a standalone system or integrate directly with a merchant’s Point of Sale (POS). Through POS integration, RewardsPlus delivers a seamless, frictionless experience for both merchants and customers.",

  howItWorks: [
    "Merchants must be onboarded by contacting support@rewardsplus.io.",
    "Each POS device must be onboarded individually.",
    "Onboarding is a one-time process per POS device.",
    "After onboarding, POS devices can issue, redeem, and refund bonus points.",
  ],

  endpoint: {
    method: "POST",
    url: "/Neoteric/V1/PosOnboard",
    purpose:
      "Registers a merchant POS terminal and returns a unique posSystemId.",
  },

  requestFields: [
    {
      name: "sourceSystem",
      type: "String",
      valid: "POS",
      required: true,
    },
    {
      name: "merchantId",
      type: "Numeric",
      valid: "Non-zero",
      required: true,
    },
    {
      name: "storeId",
      type: "Alphanumeric",
      valid: "No special characters",
      required: true,
    },
    {
      name: "posDeviceId",
      type: "Alphanumeric",
      valid: "No special characters",
      required: true,
    },
  ],

  sampleRequest: `{
  "sourceSystem": "POS",
  "merchantId": "1028",
  "storeId": "STR-88412",
  "posDeviceId": "POS-AX200397",
  "location": {
    "streetName": "GautingerStr",
    "houseNr": "24a",
    "pincode": "82152",
    "country": "Germany",
    "city": "Krailling"
  }
}`,

  sampleResponse: `{
  "posSystemId": "13",
  "registeredAt": "2025-12-29 23:06:30",
  "result": {
    "code": "0000",
    "description": "Success"
  },
  "transactionRefId": "9711"
}`,
};
