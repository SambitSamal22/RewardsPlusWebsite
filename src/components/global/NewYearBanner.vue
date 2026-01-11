<template>
  <Dialog v-model:open="open">
    <DialogContent class="sm:max-w-md text-center">
      <DialogHeader>
        <DialogTitle class="text-[#7A5CFA] text-center">
          Happy New Year 2026!
        </DialogTitle>
      </DialogHeader>

      <p class="text-muted-foreground mt-2">
        Let’s make this year more rewarding with RewardsPlus ✨
      </p>

      <div class="mt-6 flex justify-center">
        <Button @click="closeDialog"> Continue </Button>
      </div>

      <p class="text-xs text-muted-foreground mt-4">
        Closing automatically in {{ countdown }}s
      </p>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

/* ===== CONFIG ===== */
const END_DATE = "2026-01-07";
const AUTO_CLOSE_SECONDS = 5;
/* ================== */

const open = ref(false);
const countdown = ref(AUTO_CLOSE_SECONDS);

let timer: number;
let interval: number;

/** Date-based auto disable */
const isWithinDate = () => {
  const today = new Date();
  const expiry = new Date(END_DATE);
  expiry.setHours(23, 59, 59, 999);
  return today <= expiry;
};

onMounted(() => {
  if (!isWithinDate()) return;

  open.value = true;

  interval = window.setInterval(() => {
    if (countdown.value > 0) countdown.value--;
  }, 1000);

  timer = window.setTimeout(closeDialog, AUTO_CLOSE_SECONDS * 1000);
});

const closeDialog = () => {
  open.value = false;
  clearTimeout(timer);
  clearInterval(interval);
};

onBeforeUnmount(() => {
  clearTimeout(timer);
  clearInterval(interval);
});
</script>
