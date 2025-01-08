<template>
    <imgHeader :imageUrl="imageUrl" :title="$t('about.about')" />
    <profile />
    <professionalTab />
    <CarouselTool />
</template>

<script setup>
import imgHeader from '~/components/img-header.vue';
import profile from '~/components/about/pofile.vue'
import CarouselTool from '~/components/about/carousel-tool.vue';
import professionalTab from '../components/about/professional-tab.vue';
import aboutBg from '~/assets/images/about-bg.jpg';

const imageUrl = aboutBg;
</script>