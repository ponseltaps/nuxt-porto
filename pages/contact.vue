<template>
<imgHeader :imageUrl="imageUrl" :title="$t('contact.contact')" />
<ContactSection/>
</template>

<script setup>
import imgHeader from '~/components/img-header.vue';
import contactBg from '~/assets/images/contact-bg.png';
import ContactSection from '~/components/contact/contact-section.vue';

const imageUrl = contactBg;
</script>