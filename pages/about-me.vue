<template>
    <imgHeader :imageUrl="imageUrl" :title="$t('about.about')" />
    <profile />
    <professionalTab />
    <skillTools />
</template>

<script setup>
import imgHeader from '~/components/img-header.vue';
import profile from '~/components/about/pofile.vue'
import skillTools from '~/components/about/skill-tool.vue';
import professionalTab from '../components/about/professional-tab.vue';
import aboutBg from '~/assets/images/about-bg.jpg';

const imageUrl = aboutBg;
</script>