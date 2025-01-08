<template>
  <div>
    <div
      class="absolute -z-40 md:h-screen w-full lg:pt-0 pt-24 min-[1105px]:px-[133px] md:px-16 px-8 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500">
    </div>
    <div class="flex justify-center items-center md:h-[200px] h-[100px] max-[768px]:mt-[65px] bg-top bg-cover"
      :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <h1 class="text-4xl text-white font-bold md:mt-14">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Menerima props untuk gambar dan judul
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  }
});
</script>