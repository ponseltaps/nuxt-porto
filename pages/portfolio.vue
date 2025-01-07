<!-- <template>
    <div class="flex justify-center items-center h-[250px] bg-top bg-contain"
        :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <h3 class="text-4xl text-white font-bold">Portfolio</h3>
    </div>
</template>

<script setup>
import imageUrl from '@/assets/images/web-desain-bg.png';
</script> -->
<template>
    <imgHeader :imageUrl=imageUrl :title="$t('porto.porto')" />
    <portfolioSection/>
</template>


<script setup>
import imgHeader from '~/components/img-header.vue';
import portfolioSection from '~/components/portfolio/portfolio-section.vue';
import portoBg from '@/assets/images/web-desain-bg.png';

const imageUrl = portoBg;
</script>