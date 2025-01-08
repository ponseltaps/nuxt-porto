<template>
  <div class="min-[1105px]:px-[133px] md:px-16 px-8 mt-28 mb-28">
    <div>
      <h2 class="text-3xl text-center text-sky-800 mont-bold uppercase">
        PROFESSIONAL EXPERIENCE & EDUCATION duhh
      </h2>

      <!-- Tab buttons -->
      <div class="btn-header-tabs flex mt-12">
        <button
          @click="setActiveTab('experience')"
          :class="{
            'bg-sky-950 border-b-4 border-sky-400': activeTab === 'experience',
            'border-b-2 border-sky-200': activeTab !== 'experience'
          }"
          class="flex justify-center rounded-t-2xl w-full sm:py-4 py-2"
        >
          <p
            :class="{
              'text-sky-400': activeTab !== 'experience',
              'text-white': activeTab === 'experience',
              'sm:text-xl': true,
              'text-base': activeTab !== 'experience'
            }"
            class="mont-bold"
          >
            Experience
          </p>
        </button>

        <button
          @click="setActiveTab('education')"
          :class="{
            'bg-sky-950 border-b-4 border-sky-400': activeTab === 'education',
            'border-b-2 border-sky-200': activeTab !== 'education'
          }"
          class="flex justify-center rounded-t-2xl w-full sm:py-4 py-2"
        >
          <p
            :class="{
              'text-sky-400': activeTab !== 'education',
              'text-white': activeTab === 'education',
              'sm:text-xl': true,
              'text-base': activeTab !== 'education'
            }"
            class="mont-bold"
          >
            Education
          </p>
        </button>
      </div>

      <!-- Content experience tab -->
      <div
        v-if="activeTab === 'experience'"
        id="experience-tab"
        class="flex md:flex-row flex-col bg-sky-950 rounded-b-2xl py-12 mt-6 max-[767px]:border-b-2 max-[767px]:border-sky-400"
      >
        <p>Ini adalah konten untuk pengalaman kerja dari tab.</p>
      </div>

      <!-- Content education tab -->
      <div
        v-if="activeTab === 'education'"
        id="education-tab"
        class="flex md:flex-row flex-col bg-sky-950 rounded-b-2xl py-12 mt-6 max-[767px]:border-b-2 max-[767px]:border-sky-400"
      >
        <p>Ini adalah konten untuk pendidikan.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Ambil parameter tab dari URL
const route = useRoute()
const router = useRouter()

// Set default tab jika tidak ada parameter di URL
const activeTab = ref(route.params.tab || 'experience')

// Watch perubahan URL dan update activeTab
watch(
  () => route.params.tab,
  (newTab) => {
    activeTab.value = newTab || 'experience'
  }
)

// Fungsi untuk mengubah tab dan URL
const setActiveTab = (tab) => {
  // Mengubah URL menggunakan router.push
  router.push({ path: `/about-me/${tab}` }) // Perbarui URL dan tampilkan tab yang dipilih
}
</script>

<style scoped>
/* CSS tambahan bisa ditambahkan di sini */
</style>
