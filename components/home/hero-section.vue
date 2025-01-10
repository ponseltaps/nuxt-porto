<script setup>
import buttonBOutline from '../button-b-outline.vue';
import buttonSolid from '../button-solid.vue';
</script>

<template>
  <div class="md:h-screen lg:pt-0 pt-24 min-[1105px]:px-[133px] md:px-16 px-8 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500">
    <div class="flex flex-row h-full">
        <div class="flex flex-col justify-center lg:w-1/2 md:w-3/4 w-full">
          <h3 class="text-xl mont-semibold text-sky-800 mb-6">{{ $t("hero.hallo") }}</h3>
          <h2 class="text-3xl mont-bold text-sky-800 mb-12 whitespace-pre-line">{{ $t("hero.profession") }}</h2>
          <p class="text-base font-popp text-sky-800 mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius est eligendi ullam maxime earum
            excepturi repellat cupiditate quis labore laborum perferendis, corrupti, aut quidem?
          </p>
          <div class="mb-4 flex sm:flex-none flex-col sm:flex-row">
            <buttonSolid href="/portfolio" class="w-fit mb-5 sm:mb-0">
              {{ $t("hero.btn-porto") }}
            </buttonSolid>
            <buttonBOutline href="/contact" class="lg:ms-12 sm:ms-7 ms-0 w-fit">
              {{ $t("hero.btn-git") }}
            </buttonBOutline>
          </div>
        </div>
        <div class="md:flex hidden justify-end items-end md:w-1/2 w-1/4">
          <NuxtImg src="/foto-hero.png" alt="profile-photo" class="lg:w-[360px] max-[1105px]:w-[300px] md:w-[250px] object-contain" />
        </div>
    </div>
  </div>
</template>