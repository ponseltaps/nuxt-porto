<template>
    <div class="flex justify-center items-center h-[250px] bg-top bg-contain" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <h3 class="text-4xl text-white font-bold">{{ title }}</h3>
    </div>
  </template>
  
  <script setup>
  // Mengimpor gambar dari folder assets
  import imageUrl from '@/assets/images/web-desain-bg.png'; // Menggunakan import untuk gambar
  import { defineProps } from 'vue';
  
  // Menerima props untuk gambar dan judul
  defineProps({
    title: {
      type: String,
      required: true,
    }
  });
  </script>
  