<template>
    <div class="flex justify-center items-center md:h-[200px] h-[100px] max-[768px]:mt-[65px] bg-top bg-contain" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <h1 class="text-4xl text-white font-bold md:mt-14">{{ title }}</h1>
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
    imageUrl:{
      type: String,
      required: true,
    }
  });
  </script>
  