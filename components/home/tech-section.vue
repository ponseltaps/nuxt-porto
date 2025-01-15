<template>
  <div class="min-[1105px]:px-[133px] md:px-16 px-8 mb-16">
    <h3 class="text-3xl mont-bold text-sky-800 text-center">
      {{ $t("tech.tech-behind") }}
    </h3>
    <div class="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
      <div v-for="(tech, index) in techList" :key="index" class="card flex flex-col bg-sky-950 rounded-md p-7">
        <NuxtImg :src="tech.image" format="webp" alt="tech-icon" class="h-20 object-contain" />
        <div class="mt-7">
          <!-- Title dan Deskripsi berdasarkan tech.title dan tech.description -->
          <h3 class="text-left text-xl text-white mont-bold mb-2">{{ tech.title }}</h3>
          <p class="text-left text-sm font-popp text-slate-300 line-clamp-4">
            {{ tech.description }}
          </p>
        </div>
        <div class="mt-7 flex flex-row items-center">
          <p class="text-left text-xs font-popp text-slate-300 grow">27 Desember 2024</p>
          <!-- Link ke halaman post berdasarkan slug -->
          <NuxtLink :to="`/post/${tech.slug}`"
            class="flex flex-row items-center text-left text-xs font-popp text-white gap-2 group">
            {{ $t("tech.read") }}
            <span class="transition-transform duration-300 group-hover:translate-x-1">
              <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n'; // Impor useI18n

const { t, locale } = useI18n(); // Mendapatkan fungsi t dan locale

// Daftar teknologi dengan slug, title, dan image
const techList = ref([
  { title: 'Nuxt 3', slug: 'nuxt-3', image: '/nuxt-logo.svg' },
  { title: 'Tailwind', slug: 'tailwind', image: '/tailwind-logo.svg' },
  { title: 'Sweet Alert 2', slug: 'sweetalert', image: '/sweetalert-logo.svg' },
]);

// Fungsi untuk memperbarui deskripsi ketika bahasa berubah
const updateDescriptions = () => {
  techList.value.forEach(tech => {
    tech.description = t(`tech.${tech.slug}.description`); // Mengambil deskripsi dari i18n
  });
};

// Menggunakan watch untuk memantau perubahan bahasa
watch(
  () => locale.value,  // Memantau perubahan bahasa
  () => {
    updateDescriptions(); // Memperbarui deskripsi ketika bahasa berubah
  },
  { immediate: true }  // Langsung panggil saat komponen pertama kali dimuat
);

</script>
