<script setup>
import buttonBOutline from '../button-b-outline.vue';
import buttonSolid from '../button-solid.vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

// Mengambil data dari API Laravel
const { data: heroData, error } = await useFetch('http://localhost:8000/api/home/hero');

if (error.value) {
  console.error('Error fetching data:', error.value);
}
</script>

<template>
  <div
    class="md:h-screen lg:pt-0 pt-24 min-[1105px]:px-[133px] md:px-16 px-8 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500">
    <div class="flex flex-row h-full">
      <div class="flex flex-col justify-center lg:w-1/2 md:w-3/4 w-full">
        <!-- Tampilkan data hero_greeting -->
        {{ locale === 'id' ? heroData?.[0]?.hero_greeting_id : heroData?.[0]?.hero_greeting_en }}
        <!-- <h3 class="text-xl mont-semibold text-sky-800 mb-6">{{ $t("hero.hallo") }}</h3> -->

        <!-- Tampilkan data hero_title -->
        {{ locale === 'id' ? heroData?.[0]?.hero_title_id : heroData?.[0]?.hero_title_en }}
        <!-- <h2 class="text-3xl mont-bold text-sky-800 mb-12 whitespace-pre-line">{{ $t("hero.profession") }}</h2> -->

        <!-- Tampilkan data hero_desc -->
        {{ locale === 'id' ? heroData?.[0]?.hero_desc_id : heroData?.[0]?.hero_desc_en }}
        <!-- <p class="text-base popp-medium text-sky-800 mb-12">{{ $t("hero.subhead") }}</p> -->
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
        <!-- Tampilkan gambar dari hero_img -->
        <NuxtImg src="/images/foto-hero.svg" format="webp" alt="profile-photo"
          class="hover:hover:-translate-y-4 drop-shadow-md lg:w-[400px] max-[1105px]:w-[300px] md:w-[250px] object-contain transition-transform duration-300" />
      </div>
    </div>
  </div>
</template>