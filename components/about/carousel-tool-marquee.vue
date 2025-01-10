<template>
  <div class="my-20">
    <h2 class="text-3xl text-center text-sky-800 mont-bold uppercase mb-11">
      {{ $t("about.tool") }}
    </h2>
    <div class="overflow-hidden relative">
      <!-- <div class="w-full h-full absolute z-50" style="background: linear-gradient(90deg, #0EA5E9 0%, rgba(14, 165, 233, 0.00) 20%, rgba(14, 165, 233, 0.00) 80%, #0EA5E9 100%)"></div> -->
      <div class="flex flex-row md:gap-x-4 gap-x-10 animate-marquee w-max">
    <div v-for="(tool, index) in cardTool" :key="index" class="flex flex-col items-center">
      <div
        class="relative md:p-6 p-0 w-max md:hover:bg-sky-800/50 md:hover:rounded-md backdrop-blur-sm group transition-colors duration-500"
      >
        <NuxtImg :src="tool.src" format="webp" class="md:h-16 h-10" alt="image-carousel" />
        <div
          class="absolute hidden md:group-hover:block w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-2"
        >
          <!-- text untuk di atas screen md, sembunyikan di bawah md -->
          <p class="text-center popp-bold text-sm text-sky-800">{{ tool.name }}</p>
        </div>
      </div>
      <!-- tampilkan di bawah md, di atas md sembunyikan -->
      <div class="md:hidden flex md:mt-0 mt-4">
        <p class="text-center popp-bold text-sm text-sky-800">{{ tool.name }}</p>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script setup>
const cardTool = [
  { src: "/figma-icon.svg", name: "Figma" },
  { src: "/nuxt-icon.svg", name: "Nuxt 3" },
  { src: "/figma-icon.svg", name: "Figma" },
  { src: "/nuxt-icon.svg", name: "Nuxt 3" },
  { src: "/figma-icon.svg", name: "Figma" },
  { src: "/nuxt-icon.svg", name: "Nuxt 3" },
  { src: "/figma-icon.svg", name: "Figma" },
  { src: "/nuxt-icon.svg", name: "Nuxt 3" },
];
</script>
