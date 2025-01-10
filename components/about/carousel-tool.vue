<template>
  <div class="my-20">
    <h2 class="text-3xl text-center text-sky-800 mont-bold uppercase mb-11">
      {{ $t("about.tool") }}
    </h2>

    <div class="flex flex-wrap justify-center items-center content-center md:px-0 px-4 md:gap-x-4 gap-x-6 md:gap-y-6 gap-y-8">
      <div v-for="(tool, index) in cardTool" :key="index" class="flex flex-col items-center">
        <div
          class="relative md:p-6 p-0 md:hover:bg-sky-400/50 hover:shadow-md hover:rounded-md backdrop-blur-sm group transition-colors duration-500"
        >
          <NuxtImg :src="tool.src" format="webp" class="h-10 md:h-16 w-auto" alt="image-carousel" />
          <div
            class="absolute hidden md:group-hover:block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-200/30 backdrop-blur-sm p-2"
          >
            <!-- Teks untuk di atas layar md -->
            <p class="text-center popp-bold text-sm text-sky-800">
              {{ tool.name }}
            </p>
          </div>
        </div>
        <!-- Teks untuk di bawah md -->
        <div class="md:hidden flex mt-4">
          <p class="text-center popp-bold text-sm text-sky-800">
            {{ tool.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cardTool = [
  { src: "/figma-icon.svg", name: "Figma" },
  { src: "/nuxt-icon.svg", name: "Nuxt 3" },
  { src: "/laravel-logo.svg", name: "Laravel" },
  { src: "/bootstrap-logo.svg", name: "Bootstrap" },
  { src: "/css-3-logo.svg", name: "Css" },
  { src: "/html-logo.svg", name: "Html" },
  { src: "/figma-icon.svg", name: "Figma" },
  { src: "/nuxt-icon.svg", name: "Nuxt 3" },
  { src: "/bootstrap-logo.svg", name: "Bootstrap" },
  { src: "/nuxt-icon.svg", name: "Nuxt 3" },
  { src: "/laravel-logo.svg", name: "Laravel" },
  { src: "/html-logo.svg", name: "Html" },
];
</script>
