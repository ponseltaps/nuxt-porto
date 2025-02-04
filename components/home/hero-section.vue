<template>
  <div
    v-if="loading"
    class="md:h-screen lg:pt-0 pt-24 min-[1105px]:px-[133px] md:px-16 px-8 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500"
  >
    <!-- Skeleton Loader for Hero Section -->
    <div class="flex flex-row h-full animate-pulse">
      <div class="flex flex-col justify-center lg:w-1/2 md:w-3/4 w-full">
        <div class="h-8 bg-sky-300 rounded mb-6"></div>
        <div class="h-10 bg-sky-300 rounded mb-12"></div>
        <div class="h-8 bg-sky-300 rounded mb-12"></div>
        <div class="mb-4 flex sm:flex-none flex-col sm:flex-row">
          <div class="h-10 w-32 bg-sky-300 rounded mr-4 mb-5 sm:mb-0"></div>
          <div class="h-10 w-32 bg-sky-300 rounded sm:ml-7 ml-0"></div>
        </div>
      </div>
      <div class="md:flex hidden -mr-10 justify-end items-end md:w-1/2 w-1/4">
        <div class="h-96 lg:w-[400px] max-[1105px]:w-[300px] md:w-[250px] bg-sky-300 rounded-lg"></div>
      </div>
    </div>
  </div>

  <!-- Actual Content -->
  <div
    v-else
    class="md:h-screen lg:pt-0 pt-24 min-[1105px]:px-[133px] md:px-16 px-8 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500"
  >
    <div class="flex flex-row h-full">
      <div class="flex flex-col justify-center lg:w-1/2 md:w-3/4 w-full">
        <h3 class="text-xl mont-semibold text-sky-800 mb-6">
          {{ language === "en" ? heroData[0]?.hero_greeting_en : heroData[0]?.hero_greeting_id }}
        </h3>
        <h2 class="text-3xl mont-bold text-sky-800 mb-12 whitespace-pre-line">
          {{ language === "en" ? heroData[0]?.hero_title_en : heroData[0]?.hero_title_id }}
        </h2>
        <p class="text-base popp-medium text-sky-800 mb-12">
          {{ language === "en" ? heroData[0]?.hero_desc_en : heroData[0]?.hero_desc_id }}
        </p>
        <div class="mb-4 flex sm:flex-none flex-col sm:flex-row">
          <buttonSolid href="/portfolio" class="w-fit mb-5 sm:mb-0">
            {{ $t("hero.btn-porto") }}
          </buttonSolid>
          <buttonBOutline href="/contact" class="lg:ms-12 sm:ms-7 ms-0 w-fit">
            {{ $t("hero.btn-git") }}
          </buttonBOutline>
        </div>
      </div>
      <div class="md:flex hidden -mr-10 justify-end items-end md:w-1/2 w-1/4">
        <NuxtImg
          :src="getImageUrl(heroData[0]?.hero_img)"
          format="webp"
          alt="profile-photo"
          class="hover:hover:-translate-y-4 drop-shadow-md text-gray-200/25 lg:w-[400px] max-[1105px]:w-[300px] md:w-[250px] object-contain transition-transform duration-300"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import buttonBOutline from "../button-b-outline.vue";
import buttonSolid from "../button-solid.vue";

import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const language = ref(locale.value);

const { $apiFetch } = useNuxtApp();
const heroData = ref([]);
const loading = ref(true);

// Mengambil data dari API setelah komponen dimuat di sisi klien
onMounted(async () => {
  try {
    const response = await $apiFetch("/api/home/hero");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    heroData.value = await response.json();
  } catch (err) {
    console.error("Error fetching hero data:", err);
  } finally {
    loading.value = false; // Setelah data selesai atau error, ubah loading ke false
  }
});

const getImageUrl = (imagePath) => {
  return `${useRuntimeConfig().public.apiBaseUrl}/storage/${imagePath}`;
};
</script>
