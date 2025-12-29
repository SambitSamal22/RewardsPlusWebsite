import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Pricing from "../views/Pricing.vue";
import Contact from "../views/Contact.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import Features from "../components/Features.vue";
import HowItWorks from "../components/HowItWorks.vue";
import Faqs from "../views/FaqPage.vue";
import ChatWithUs from "../views/ChatWithUs.vue";
import Downloads from "../views/Download.vue";
import Activation from "../views/Activation.vue";
import ForgotPassword from "../views/ForgotPassword.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/pricing", name: "Pricing", component: Pricing },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/privacy-policy", name: "PrivacyPolicy", component: PrivacyPolicy },
  { path: "/feature", name: "Features", component: Features },
  { path: "/how-it-works", name: "HowItWorks", component: HowItWorks },
  { path: "/faqs", name: "Faqs", component: Faqs },
  { path: "/chat", name: "ChatWithUs", component: ChatWithUs },
  { path: "/downloads", name: "Downloads", component: Downloads },
  { path: "/activation", name: "Activation", component: Activation },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If user clicks back/forward, restore scroll
    if (savedPosition) {
      return savedPosition;
    }
    // Otherwise, always scroll to top
    return { top: 0 };
  },
});

export default router;
