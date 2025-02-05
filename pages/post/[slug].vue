<template>
  <!-- Skeleton Loader -->
  <div v-if="loading"
    class="lg:pt-12 pt-10 min-[1105px]:px-[133px] md:px-16 px-8 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500">
    <div class="flex flex-col md:flex-row gap-x-16 my-10 animate-pulse">
      <div class="w-full">
        <div class="relative md:flex hidden justify-center items-center">
          <div class="h-[75vh] w-full bg-sky-300 rounded-xl"> </div>
        </div>
      </div>
      <div class="w-full">
        <div class="flex flex-col">
          <div class="flex flex-col gap-2 mt-5">
            <div class="h-16 w-full bg-sky-300 rounded-xl"></div>
            <div class="h-[25vh] w-full bg-sky-300 rounded-xl"></div>
            <div class="h-[25vh] w-full bg-sky-300 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Actual Content -->
  <div v-else
    class="lg:pt-12 pt-10 min-[1105px]:px-[133px] md:px-16 px-8 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500">
    <div class="flex md:justify-end justify-between items-center">
      <a href="/" class="flex md:hidden flex-row items-center">
        <span class="me-2">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.40809 8L9.00451 13.5964C9.26758 13.8595 9.39913 14.1943 9.39913 14.6009C9.39913 15.0075 9.26758 15.3423 9.00451 15.6054C8.74143 15.8685 8.4066 16 8.00002 16C7.59344 16 7.25862 15.8685 6.99554 15.6054L0.39464 9.00448C0.251143 8.86099 0.149738 8.70553 0.0904253 8.53812C0.0311129 8.3707 0.000978729 8.19133 2.20769e-05 8C-0.000934575 7.80867 0.0291996 7.6293 0.0904253 7.46188C0.151651 7.29447 0.253056 7.13901 0.39464 6.99552L6.99554 0.394618C7.25862 0.131539 7.59344 0 8.00002 0C8.4066 0 8.74143 0.131539 9.00451 0.394618C9.26758 0.657697 9.39913 0.992526 9.39913 1.3991C9.39913 1.80568 9.26758 2.14051 9.00451 2.40359L3.40809 8Z"
              fill="#38BDF8" />
          </svg>
        </span>
        <p class="mont-medium text-base text-sky-400">{{ $t("post.back") }}</p>
      </a>
      <languageButton />
    </div>
    <div class="flex flex-col md:flex-row gap-x-16 my-10">
      <div class="w-full">
        <div class="relative flex justify-center items-center">
          <NuxtImg src="/images/bg-post.png" format="webp" class="w-full object-cover" />

          <NuxtImg :src="getImageUrl(post?.post_img)" class="sm:h-40 h-28 absolute z-10" />
        </div>
      </div>
      <div class="w-full">
        <div class="flex flex-col">
          <a href="/"
            class="md:flex hidden w-max flex-row items-center hover:scale-110 duration-100">
            <span class="me-2">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.40809 8L9.00451 13.5964C9.26758 13.8595 9.39913 14.1943 9.39913 14.6009C9.39913 15.0075 9.26758 15.3423 9.00451 15.6054C8.74143 15.8685 8.4066 16 8.00002 16C7.59344 16 7.25862 15.8685 6.99554 15.6054L0.39464 9.00448C0.251143 8.86099 0.149738 8.70553 0.0904253 8.53812C0.0311129 8.3707 0.000978729 8.19133 2.20769e-05 8C-0.000934575 7.80867 0.0291996 7.6293 0.0904253 7.46188C0.151651 7.29447 0.253056 7.13901 0.39464 6.99552L6.99554 0.394618C7.25862 0.131539 7.59344 0 8.00002 0C8.4066 0 8.74143 0.131539 9.00451 0.394618C9.26758 0.657697 9.39913 0.992526 9.39913 1.3991C9.39913 1.80568 9.26758 2.14051 9.00451 2.40359L3.40809 8Z"
                  fill="#38BDF8" />
              </svg>
            </span>
            <p class="mont-medium text-base text-sky-400">{{ $t("post.back") }}</p>
          </a>
          <div class="flex flex-col gap-2 mt-5">

            <h3 class="mont-bold text-2xl md:text-4xl text-sky-950">
              {{ post?.tech_title }}
            </h3>
            <p class="font-popp text-sm text-sky-950 text-justify">
              {{ language === 'en' ? post?.tech_desc_en : post?.tech_desc_id }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Menggunakan Nuxt 3 Composition API
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useI18n } from "vue-i18n"; // Impor useI18n
import languageButton from "~/components/language-post.vue";

definePageMeta({
  layout: "post-layout",
});

useHead({
  title: "Kamareza: Article Post",
});

// Setup untuk bahasa
const { locale } = useI18n();
const language = ref(locale.value);

// Ambil slug dari route
const route = useRoute();
const router = useRouter();

// Data post yang akan ditampilkan
const post = ref(null);
const loading = ref(true);

// Ambil data dari API berdasarkan slug
const { $apiFetch } = useNuxtApp();

onMounted(async () => {
  try {
    const response = await $apiFetch(`/api/home/post/${route.params.slug}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    post.value = await response.json();
  } catch (err) {
    console.error("Error fetching post data:", err);
  } finally {
    loading.value = false;
  }
});
const getImageUrl = (imagePath) => {
  return `${useRuntimeConfig().public.apiBaseUrl}/storage/${imagePath}`;
};

const goBack = () => {
  router.back();
};

// // Menyiapkan i18n
// const { t, locale } = useI18n(); // Mendapatkan fungsi t dan locale

// // Data untuk setiap post
// const postList = {
//   "nuxt-3": {
//     title: "nuxt-3",
//     description: "nuxt-3-description",
//     image: "/images/nuxt-logo.svg",
//   },
//   tailwind: {
//     title: "tailwind",
//     description: "tailwind-description",
//     image: "/images/tailwind-logo.svg",
//   },
//   sweetalert: {
//     title: "sweetalert",
//     description: "sweetalert-description",
//     image: "/images/sweetalert-logo.svg",
//   },
// };

// // Mendapatkan route dan slug dari parameter URL
// const route = useRoute();
// const router = useRouter();
// const slug = route.params.slug;

// // Reactive data untuk post
// const post = ref({
//   title: t(`post.${postList[slug]?.title}.title`),
//   description: t(`post.${postList[slug]?.title}.description`),
//   image: postList[slug]?.image,
// });

// // Fungsi untuk kembali ke halaman sebelumnya
// const goBack = () => {
//   router.back();
// };

// // Memantau perubahan bahasa dan memperbarui post
// watch(
//   () => locale.value, // Memantau perubahan bahasa
//   () => {
//     post.value = {
//       title: t(`post.${postList[slug]?.title}.title`),
//       description: t(`post.${postList[slug]?.title}.description`),
//       image: postList[slug]?.image,
//     };
//   },
//   { immediate: true } // Memperbarui post saat pertama kali dimuat
// );
</script>
