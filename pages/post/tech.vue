<template>
  <div
    class="md:h-screen lg:pt-12 pt-24 min-[1105px]:px-[133px] md:px-16 px-8 bg-gradient-to-b from-sky-100 via-sky-300 to-sky-500"
  >
    <div class="flex justify-end">
      <languageButton />
    </div>
  </div>
</template>
<script setup lang="ts">
import languageButton from "~/components/language-post.vue";
definePageMeta({
  title: "Postingan",
  layout: "post-layout",
});
</script>
