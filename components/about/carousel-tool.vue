<template>
    <div class="my-20">
        <h2 class="text-3xl text-center text-sky-800 mont-bold uppercase mb-11">
            {{ $t("about.tool") }}
        </h2>
        <div class="overflow-hidden">
            <div class="flex items-center gap-x-4 animate-marquee">
                <div v-for="(image, index) in images" :key="index" class="p-10 w-max">
                    <NuxtImg :src="image" format="webp" class="h-16" alt="image-carousel" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const images = [
    '/figma-icon.svg',
    '/nuxt-icon.svg',
    '/figma-icon.svg',
    '/nuxt-icon.svg',
    '/figma-icon.svg',
    '/nuxt-icon.svg',
    '/figma-icon.svg',
    '/nuxt-icon.svg',

];
</script>