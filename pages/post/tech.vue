<template>
  <div
    class="lg:pt-12 pt-10 min-[1105px]:px-[133px] md:px-16 px-8 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500"
  >
    <div class="flex md:justify-end justify-between items-center">
      <button @click.prevent="goBack" class="flex md:hidden flex-row items-center">
        <span class="me-2">
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.40809 8L9.00451 13.5964C9.26758 13.8595 9.39913 14.1943 9.39913 14.6009C9.39913 15.0075 9.26758 15.3423 9.00451 15.6054C8.74143 15.8685 8.4066 16 8.00002 16C7.59344 16 7.25862 15.8685 6.99554 15.6054L0.39464 9.00448C0.251143 8.86099 0.149738 8.70553 0.0904253 8.53812C0.0311129 8.3707 0.000978729 8.19133 2.20769e-05 8C-0.000934575 7.80867 0.0291996 7.6293 0.0904253 7.46188C0.151651 7.29447 0.253056 7.13901 0.39464 6.99552L6.99554 0.394618C7.25862 0.131539 7.59344 0 8.00002 0C8.4066 0 8.74143 0.131539 9.00451 0.394618C9.26758 0.657697 9.39913 0.992526 9.39913 1.3991C9.39913 1.80568 9.26758 2.14051 9.00451 2.40359L3.40809 8Z"
              fill="#38BDF8"
            />
          </svg>
        </span>
        <p class="mont-medium text-base text-sky-400">Back</p>
      </button>
      <languageButton />
    </div>
    <div class="flex flex-col md:flex-row gap-x-16 my-10">
      <div class="w-full">
        <div class="relative flex justify-center items-center">
          <!-- Background image -->
          <NuxtImg src="/bg-post.png" class="w-full object-cover" />

          <!-- Figma icon in the center and in front of background -->
          <NuxtImg src="/figma-icon.svg" class="sm:h-40 h-28 absolute z-10" />
        </div>
      </div>
      <div class="w-full">
        <div class="flex flex-col">
          <button @click.prevent="goBack" class="md:flex flex-row items-center hidden">
            <span class="me-2">
              <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.40809 8L9.00451 13.5964C9.26758 13.8595 9.39913 14.1943 9.39913 14.6009C9.39913 15.0075 9.26758 15.3423 9.00451 15.6054C8.74143 15.8685 8.4066 16 8.00002 16C7.59344 16 7.25862 15.8685 6.99554 15.6054L0.39464 9.00448C0.251143 8.86099 0.149738 8.70553 0.0904253 8.53812C0.0311129 8.3707 0.000978729 8.19133 2.20769e-05 8C-0.000934575 7.80867 0.0291996 7.6293 0.0904253 7.46188C0.151651 7.29447 0.253056 7.13901 0.39464 6.99552L6.99554 0.394618C7.25862 0.131539 7.59344 0 8.00002 0C8.4066 0 8.74143 0.131539 9.00451 0.394618C9.26758 0.657697 9.39913 0.992526 9.39913 1.3991C9.39913 1.80568 9.26758 2.14051 9.00451 2.40359L3.40809 8Z"
                  fill="#38BDF8"
                />
              </svg>
            </span>
            <p class="mont-medium text-base text-sky-400">Back</p>
          </button>
          <div class="flex flex-col gap-2 mt-5">
            <h3 class="mont-bold text-2xl md:text-4xl text-sky-950">Nuxt 3</h3>
            <p class="font-popp text-sm text-sky-950 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime asperiores suscipit qui, voluptatum,
              modi laboriosam error, possimus mollitia vitae accusamus blanditiis. Libero doloremque unde reiciendis quo
              facilis. Tenetur alias doloremque accusantium quas, nam voluptate deserunt illum incidunt consectetur
              sequi cumque possimus dolorem culpa? Dicta impedit molestiae laudantium quod expedita tempore, nam ad
              voluptatem eveniet, optio pariatur quisquam architecto magni hic aspernatur cupiditate culpa repudiandae.
              Distinctio incidunt nam corrupti magnam placeat dicta nobis, porro repellat fuga, totam dignissimos
              architecto enim? Quae ex accusamus quod culpa enim iure atque illum minima eum esse quasi eligendi
              consectetur ipsum dignissimos.
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maxime asperiores suscipit qui, voluptatum,
              modi laboriosam error, possimus mollitia vitae accusamus blanditiis. Libero doloremque unde reiciendis quo
              facilis. Tenetur alias doloremque accusantium quas, nam voluptate deserunt illum incidunt consectetur
              sequi cumque possimus dolorem culpa? Dicta impedit molestiae laudantium quod expedita tempore, nam ad
              voluptatem eveniet, optio pariatur quisquam architecto magni hic aspernatur cupiditate culpa repudiandae.
              Distinctio incidunt nam corrupti magnam placeat dicta nobis, porro repellat fuga, totam dignissimos
              architecto enim? Quae ex accusamus quod culpa enim iure atque illum minima eum esse quasi eligendi
              consectetur ipsum dignissimos.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import languageButton from "~/components/language-post.vue";
import { useRouter } from "vue-router"; // Import useRouter
// import postBg from '~/assets/images/bg-post.png';
definePageMeta({
  layout: "post-layout",
});

useHead({
  title: "Kamareza: My Journey, My Work",
});

const router = useRouter(); // Inisialisasi router

// Fungsi untuk kembali ke halaman sebelumnya
const goBack = () => {
  router.back(); // Menggunakan metode 'back' untuk kembali ke halaman sebelumnya
};
</script>
