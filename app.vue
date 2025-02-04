<template>
  <NuxtLayout class="scroll-smooth">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// const { $apiFetch } = useNuxtApp();

// const fetchData = async () => {
//   try {
//     const response = await $apiFetch('/api/home/hero');
//     const data = await response.json();
//     console.log("Response dari API:", data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
// fetchData();

useHead({
  title: "Kamareza: My Journey, My Work",

});
</script>
