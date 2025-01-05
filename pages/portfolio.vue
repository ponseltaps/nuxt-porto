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
    <imgHeader imageUrl="@/assets/images/web-desain-bg.png" title="Portfolio" />
    <portfolioSection/>
</template>


<script setup>
import imgHeader from '../components/img-header.vue';
import portfolioSection from '~/components/portfolio/portfolio-section.vue';
</script>