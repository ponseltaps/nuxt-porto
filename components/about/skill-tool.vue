<template>
  <div v-if="loading" class="my-20 animate-pulse gap-4">
    <div class="flex justify-center mb-12">
      <div class="h-16 w-1/2 bg-sky-400 rounded-xl">
      </div>
    </div>
    <div
      class="flex flex-wrap justify-center items-center content-center md:px-0 px-4 md:gap-x-4 gap-x-6 md:gap-y-6 gap-y-8">
      <div class="h-32 w-32 bg-sky-400 rounded-xl"></div>
      <div class="h-32 w-32 bg-sky-400 rounded-xl"></div>
      <div class="h-32 w-32 bg-sky-400 rounded-xl"></div>
      <div class="max-[615px]:hidden h-32 w-32 bg-sky-400 rounded-xl"></div>
      <div class="max-[767px]:hidden h-32 w-32 bg-sky-400 rounded-xl"></div>
      <div class="max-[767px]:hidden h-32 w-32 bg-sky-400 rounded-xl"></div>
      <div class="max-[767px]:hidden h-32 w-32 bg-sky-400 rounded-xl"></div>
      <div class="max-[767px]:hidden h-32 w-32 bg-sky-400 rounded-xl"></div>
      <div class="md:hidden flex mt-4">
      </div>
    </div>
  </div>

  <div v-else class="my-20">
    <h2 class="text-3xl text-center text-sky-800 mont-bold uppercase mb-11">
      {{ $t("about.tool") }}
    </h2>
    <div
      class="flex flex-wrap justify-center items-center content-center md:px-0 px-4 md:gap-x-4 gap-x-6 md:gap-y-6 gap-y-8">
      <div v-for="tool in toolData" :key="tool.id" class="flex flex-col items-center">
        <div
          class="relative md:p-6 p-0 md:hover:bg-sky-400/50 hover:shadow-md hover:rounded-md backdrop-blur-sm group transition-colors duration-500">
          <NuxtImg :src="getImageUrl(tool.post_img)" format="webp" class="h-10 md:h-16 w-auto" alt="image-carousel" />
          <div
            class="absolute hidden md:group-hover:block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-200/30 backdrop-blur-sm p-2">
            <p class="text-center popp-bold text-sm text-sky-800">
              {{ tool.tech_title }}
            </p>
          </div>
        </div>
        <div class="md:hidden flex mt-4">
          <p class="text-center popp-bold text-sm text-sky-800">
            {{ tool.tech_title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const toolData = ref([]);
const loading = ref(true);

const { $apiFetch } = useNuxtApp();
onMounted(async () => {
  try {
    const response = await $apiFetch("/api/about/tool");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    toolData.value = await response.json();
  } catch (err) {
    console.error("Error fetching hero data:", err);
  } finally {
    loading.value = false;
  }
});

const getImageUrl = (imagePath) => {
  return `${useRuntimeConfig().public.apiBaseUrl}/storage/${imagePath}`;
};
</script>
