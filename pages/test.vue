<template>
    <div class="hero mt-24">
      <h1>{{ language === 'id' ? heroData[0]?.hero_greeting_id : heroData[0]?.hero_greeting_en }}</h1>
      <h2>{{ language === 'id' ? heroData[0]?.hero_title_id : heroData[0]?.hero_title_en }}</h2>
      <p>{{ language === 'id' ? heroData[0]?.hero_desc_id : heroData[0]?.hero_desc_en }}</p>
      <img :src="getImageUrl(heroData[0]?.hero_img)" class="text-gray-200/50" alt="Hero Image" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useI18n } from 'vue-i18n';
  
  // Mengambil apiFetch dari context
  const { $apiFetch } = useNuxtApp();
  const { locale } = useI18n();
  const language = ref(locale.value);
  
  const heroData = ref([]);
  const error = ref(null);
  
  // Fungsi untuk mengambil data dari API
  const fetchHeroData = async () => {
    try {
      const response = await $apiFetch("/api/home/hero");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      heroData.value = await response.json();
    } catch (err) {
      error.value = err;
      console.error("Error fetching hero data:", error.value);
    }
  };
  
  // Memanggil fetchHeroData saat komponen di-mount
  onMounted(fetchHeroData);
  
  const getImageUrl = (imagePath) => {
    return `${useRuntimeConfig().public.apiBaseUrl}/storage/${imagePath}`;
  };
  
  useHead({
    title: "Kamareza: My Journey, My Work",
  });
  </script>
  
  <style scoped>
  .hero {
    text-align: center;
  }
  .hero img {
    max-width: 100%;
    height: auto;
  }
  </style>