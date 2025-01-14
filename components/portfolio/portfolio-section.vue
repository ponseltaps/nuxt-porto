<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

// Filter aktif
const activeFilter = ref("all"); // Default filter
const setFilter = (filter) => {
  activeFilter.value = filter;
};

// Array data kartu
const cards = ref([
  {
    id: 1,
    title: "Personal Website",
    image: "/mockup-laptop.png",
    tags: ["Nuxt 3", "Tailwind", "Flowbite", "Sweet Alert"],
    filter: "web-dev",
  },
  {
    id: 2,
    title: "Travel Onboard Screen",
    image: "/travel-screen.png",
    tags: ["Figma", "UI/UX"],
    filter: "ui-des",
  },
  {
    id: 3,
    title: "Graphic Design Portfolio",
    image: "/mockup-laptop.png",
    tags: ["Illustrator", "Photoshop", "Figma", "Branding"],
    filter: "graphic-des",
  },
  {
    id: 4,
    title: "Personal Website 2",
    image: "/personal-web-2.png",
    tags: ["HTML", "Bootstrap", "JS", "Css"],
    filter: "web-dev",
  },
]);

// Variabel untuk menyimpan lebar layar
const windowWidth = ref(0);

// Fungsi untuk memonitor perubahan ukuran layar
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

// Menggunakan onMounted untuk menambahkan event listener
onMounted(() => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", updateWindowWidth);
  }
});

// Menggunakan onBeforeUnmount untuk membersihkan event listener
onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
  }
});

// Menentukan jumlah elemen yang akan ditampilkan berdasarkan lebar layar
const displayedTagsCount = computed(() => {
  return windowWidth.value < 890 ? 2 : 3; // Menampilkan 2 elemen jika lebar layar < 890px, 3 jika lebih
});

// Menampilkan tag yang sesuai berdasarkan jumlah yang ditentukan
const getDisplayedTags = (tags) => {
  return tags.slice(0, displayedTagsCount.value);
};

// Menampilkan sisa tag
const getHiddenTags = (tags) => {
  return tags.slice(displayedTagsCount.value);
};
</script>

<template>
  <div class="pt-0 min-[1105px]:px-[133px] md:px-16 px-8 mt-2 mb-16">
    <div class="flex md:flex-row flex-col justify-center gap-4 px-4 py-4 border-b-2 border-b-white text-white">
      <!-- Filter Buttons -->
      <button
        @click="setFilter('all')"
        :class="[
          'md:text-xl text-base popp-bold rounded-2xl px-7 py-2',
          activeFilter === 'all' ? 'bg-sky-950 text-white' : 'hover:scale-90 hover:text-sky-600 duration-200',
        ]"
      >
        {{ $t("porto.all") }}
      </button>
      <button
        @click="setFilter('web-dev')"
        :class="[
          'md:text-xl text-base popp-bold rounded-2xl px-7 py-2',
          activeFilter === 'web-dev' ? 'bg-sky-950 text-white' : 'hover:scale-90 hover:text-sky-600 duration-200',
        ]"
      >
        {{ $t("porto.wd") }}
      </button>
      <button
        @click="setFilter('ui-des')"
        :class="[
          'md:text-xl text-base popp-bold rounded-2xl px-7 py-2',
          activeFilter === 'ui-des' ? 'bg-sky-950 text-white' : 'hover:scale-90 hover:text-sky-600 duration-200',
        ]"
      >
        {{ $t("porto.ui") }}
      </button>
      <button
        @click="setFilter('graphic-des')"
        :class="[
          'md:text-xl text-base popp-bold rounded-2xl px-7 py-2',
          activeFilter === 'graphic-des' ? 'bg-sky-950 text-white' : 'hover:scale-90 hover:text-sky-600 duration-200',
        ]"
      >
        {{ $t("porto.gd") }}
      </button>
    </div>

    <div class="mt-14">
      <h2 class="text-center popp-bold text-3xl text-sky-800">{{ $t("porto.my-work") }}</h2>
      <div class="grid content-center md:grid-cols-2 grid-cols-1 gap-12 mt-14">
        <!-- Looping untuk menampilkan kartu berdasarkan filter -->
        <div
          v-for="card in cards"
          :key="card.id"
          v-show="activeFilter === 'all' || activeFilter === card.filter"
          class="flex flex-col items-center justify-center bg-sky-950 rounded-xl px-4 py-6 gap-4"
        >
          <!-- Gambar Kartu -->
          <a href="#">
            <NuxtImg :src="card.image" format="webp" class="h-40 hover:scale-150 transition-transform duration-300" />

            <!-- Judul Kartu -->
            <h3 class="text-sky-400 text-xl popp-bold">{{ card.title }}</h3>
          </a>

          <!-- Menampilkan Tag -->
          <div class="flex flex-row w-full justify-between">
            <p class="grow flex space-x-2 text-sky-800">
              <span
                v-for="(tag, index) in getDisplayedTags(card.tags)"
                :key="index"
                class="font-popp text-xs bg-sky-200 px-3 py-1 rounded"
              >
                {{ tag }}
              </span>
              <!-- Badge "More" -->
              <span v-if="getHiddenTags(card.tags).length > 0" class="font-popp text-xs bg-sky-200 px-3 py-1 rounded">
                <span
                  class="inline-flex items-center justify-center w-4 h-4 me-1 text-[10px] font-semibold text-blue-800 bg-white rounded-full"
                >
                  {{ getHiddenTags(card.tags).length }}
                </span>
                More
              </span>
            </p>

            <!-- Icon Action -->
            <a href="#" class="hover:rotate-45 hover:scale-125 duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-6 text-sky-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
[v-show] {
  transition: all 0.9s ease-in-out;
}
</style>
