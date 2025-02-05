<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const activeFilter = ref("all");
const setFilter = (filter) => {
  activeFilter.value = filter;
};

const windowWidth = ref(0);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", updateWindowWidth);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateWindowWidth);
  }
});

const displayedTagsCount = computed(() => {
  return windowWidth.value < 890 ? 2 : 3;
});

const getDisplayedTags = (tags) => {
  if (Array.isArray(tags)) {
    return tags.slice(0, displayedTagsCount.value);
  }
  return [];  // Kembalikan array kosong jika tags bukan array
};

const getHiddenTags = (tags) => {
  if (Array.isArray(tags)) {
    return tags.slice(displayedTagsCount.value);
  }
  return [];  // Kembalikan array kosong jika tags bukan array
};

const portfolioData = ref([]);
const loading = ref(true);
const { $apiFetch } = useNuxtApp();
onMounted(async () => {
  try {
    const response = await $apiFetch("/api/portfolio");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    portfolioData.value = await response.json();
  } catch (err) {
    console.error("Error fetching portfolio data:", err);
  } finally {
    loading.value = false;
  }
});

const getImageUrl = (imagePath) => {
  return `${useRuntimeConfig().public.apiBaseUrl}/storage/${imagePath}`;
};
</script>


<template>
  <div v-if="loading" class="pt-0 min-[1105px]:px-[133px] md:px-16 px-8 mt-2 mb-16 animate-pulse">
    <div class="h-16 w-full bg-sky-400 rounded-xl"></div>
    <div class="mt-14">
      <div class="flex justify-center">
        <div class="h-10 w-1/2 bg-sky-400 rounded-xl"></div>
      </div>
      <div class="grid content-center md:grid-cols-2 grid-cols-1 gap-12 mt-14">
        <div class="flex flex-col items-center justify-center h-min w-full bg-sky-400 rounded-xl px-10 py-8">
          <div class="h-32 w-full bg-sky-300 rounded"></div>
          <div class="flex flex-row w-full justify-between mt-6 gap-4">
            <div class="grow h-8 bg-sky-300 rounded"></div>
            <div class="h-8 w-1/4 bg-sky-300 rounded"></div>
          </div>
        </div>
        <div class="md:flex hidden flex-col items-center justify-center h-min w-full bg-sky-400 rounded-xl px-10 py-8">
          <div class="h-32 w-full bg-sky-300 rounded"></div>
          <div class="flex flex-row w-full justify-between mt-6 gap-4">
            <div class="grow h-8 bg-sky-300 rounded"></div>
            <div class="h-8 w-1/4 bg-sky-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="pt-0 min-[1105px]:px-[133px] md:px-16 px-8 mt-2 mb-16">
    <!-- Filter button -->
    <div class="flex md:flex-row flex-col justify-center gap-4 px-4 py-4 border-b-2 border-b-white text-white">
      <button @click="setFilter('all')" :class="[
        'md:text-xl text-base popp-bold rounded-2xl px-7 py-2',
        activeFilter === 'all' ? 'bg-sky-950 text-white' : 'hover:scale-90 hover:text-sky-600 duration-200',
      ]">
        {{ $t("porto.all") }}
      </button>
      <button @click="setFilter('web-dev')" :class="[
        'md:text-xl text-base popp-bold rounded-2xl px-7 py-2',
        activeFilter === 'web-dev' ? 'bg-sky-950 text-white' : 'hover:scale-90 hover:text-sky-600 duration-200',
      ]">
        {{ $t("porto.wd") }}
      </button>
      <button @click="setFilter('ui-des')" :class="[
        'md:text-xl text-base popp-bold rounded-2xl px-7 py-2',
        activeFilter === 'ui-des' ? 'bg-sky-950 text-white' : 'hover:scale-90 hover:text-sky-600 duration-200',
      ]">
        {{ $t("porto.ui") }}
      </button>
      <button @click="setFilter('graphic-des')" :class="[
        'md:text-xl text-base popp-bold rounded-2xl px-7 py-2',
        activeFilter === 'graphic-des' ? 'bg-sky-950 text-white' : 'hover:scale-90 hover:text-sky-600 duration-200',
      ]">
        {{ $t("porto.gd") }}
      </button>
    </div>

    <div class="mt-14">
      <h2 class="text-center popp-bold text-3xl text-sky-800">{{ $t("porto.my-work") }}</h2>
      <div class="grid content-center md:grid-cols-2 grid-cols-1 gap-12 mt-14">
        <div v-for="portfolio in portfolioData" :key="portfolio.id"
          v-show="activeFilter === 'all' || activeFilter === portfolio.project_category"
          class="flex flex-col items-center justify-center bg-sky-950 rounded-xl px-4 py-6 gap-4">
          <a :href="portfolio.project_link" class="flex flex-col items-center" target="_blank">
            <NuxtImg :src="getImageUrl(portfolio.project_img)" format="webp"
              class="h-40 hover:scale-125 transition-transform duration-300" />
            <h3 class="text-sky-400 text-xl popp-bold mt-2">{{ portfolio.project_name }}</h3>
          </a>

          <div class="flex flex-row w-full justify-between">
            <p class="grow flex space-x-2 text-sky-800">
              <span v-for="(tag, index) in getDisplayedTags(portfolio.project_tags)" :key="index"
                class="font-popp text-xs bg-sky-200 px-3 py-1 rounded">
                {{ tag }}
              </span>
              <span v-if="getHiddenTags(portfolio.project_tags).length > 0"
                class="font-popp text-xs bg-sky-200 px-3 py-1 rounded">
                <span
                  class="inline-flex items-center justify-center w-4 h-4 me-1 text-[10px] font-semibold text-blue-800 bg-white rounded-full">
                  {{ getHiddenTags(portfolio.project_tags).length }}
                </span>
                More
              </span>
            </p>

            <a :href="portfolio.project_link" class="hover:rotate-45 hover:scale-125 duration-200" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor" class="size-6 text-sky-200">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
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
