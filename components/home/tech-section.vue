<template>
  <!-- Skeleton Loader -->
  <div v-if="loading" class="min-[1105px]:px-[133px] md:px-16 px-8 mb-16">
    <div class="animate-pulse">
      <div class="flex justify-center">
        <div class="h-10 w-1/2 bg-sky-400 rounded-xl">
        </div>
      </div>
      <div class="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        <div class="card flex flex-col bg-sky-400 rounded-xl p-7">
          <div class="h-32 bg-sky-300 rounded"></div>
          <div class="mt-7">
            <div class="h-10 w-full bg-sky-300 rounded mb-3"></div>
            <div class="h-16 w-full bg-sky-300 rounded"></div>
          </div>
          <div class="mt-7 flex flex-row items-center gap-3">
            <p class="h-6 w-full bg-sky-300 rounded grow"></p>
            <p class="h-6 w-1/4 bg-sky-300 rounded"></p>
          </div>
        </div>
        <div class="card md:flex hidden flex-col bg-sky-400 rounded-xl p-7">
          <div class="h-32 bg-sky-300 rounded"></div>
          <div class="mt-7">
            <div class="h-10 w-full bg-sky-300 rounded mb-3"></div>
            <div class="h-16 w-full bg-sky-300 rounded"></div>
          </div>
          <div class="mt-7 flex flex-row items-center gap-3">
            <p class="h-6 w-full bg-sky-300 rounded grow"></p>
            <p class="h-6 w-1/4 bg-sky-300 rounded"></p>
          </div>
        </div>
        <div class="card md:flex hidden flex-col bg-sky-400 rounded-xl p-7">
          <div class="h-32 bg-sky-300 rounded"></div>
          <div class="mt-7">
            <div class="h-10 w-full bg-sky-300 rounded mb-3"></div>
            <div class="h-16 w-full bg-sky-300 rounded"></div>
          </div>
          <div class="mt-7 flex flex-row items-center gap-3">
            <p class="h-6 w-full bg-sky-300 rounded grow"></p>
            <p class="h-6 w-1/4 bg-sky-300 rounded"></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Actual Content -->
  <div v-else class="min-[1105px]:px-[133px] md:px-16 px-8 mb-16">
    <h3 class="text-3xl mont-bold text-sky-800 text-center">
      {{ $t("tech.tech-behind") }}
    </h3>
    <div class="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
      <div v-for="post in postData" :key="post.id" class="card flex flex-col bg-sky-950 rounded-md p-7">
        <NuxtImg :src="getImageUrl(post.post_img)" format="webp" alt="tech-icon" class="h-20 object-contain" />
        <div class="mt-7">
          <h3 class="text-left text-xl text-white mont-bold mb-2">{{ post.tech_title }}</h3>
          <p class="text-left text-sm font-popp text-slate-300 line-clamp-4">
            {{ language === 'en' ? post.tech_desc_en : post.tech_desc_id }}
          </p>
        </div>
        <div class="mt-7 flex flex-row items-center">
          <p class="text-left text-xs font-popp text-slate-300 grow">{{ formatDate(post.created_at) }}</p>
          <NuxtLink :to="`/post/${post.slug}`"
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
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const language = ref(locale.value);

const postData = ref([]);
const loading = ref(true);

const { $apiFetch } = useNuxtApp();
onMounted(async () => {
  try {
    const response = await $apiFetch("/api/home/post");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    postData.value = await response.json();
  } catch (err) {
    console.error("Error fetching hero data:", err);
  } finally {
    loading.value = false;
  }
});

const getImageUrl = (imagePath) => {
  return `${useRuntimeConfig().public.apiBaseUrl}/storage/${imagePath}`;
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale.value, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};


</script>
