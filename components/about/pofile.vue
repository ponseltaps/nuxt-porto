<template>
    <div v-if="loading" class="pt-8 min-[1105px]:px-[133px] md:px-16 px-8 mt-2 mb-16">
        <div class="flex flex-col items-center animate-pulse gap-4">
            <div class="h-48 w-48 bg-sky-400 rounded-xl"> </div>    
            <div class="h-48 w-full bg-sky-400 rounded-xl"></div>
        </div>
    </div>

    <div v-else class="pt-8 min-[1105px]:px-[133px] md:px-16 px-8 mt-2 mb-16">
        <div class="flex flex-col items-center">
            <NuxtImg :src="getImageUrl(profileData[0]?.profile_img)" format="webp" class="w-60" />
            <p class="popp-medium text-center text-sky-800 text-sm pt-8">{{ language === "en" ? profileData[0]?.profile_desc_en : profileData[0]?.profile_desc_id}}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const language = ref(locale.value);

const profileData = ref([]);
const loading = ref(true);

const { $apiFetch } = useNuxtApp();
onMounted(async () => {
    try {
        const response = await $apiFetch("/api/about/profile");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        profileData.value = await response.json();
    } catch (err) {
        console.error("Error fetching hero data:", err);
    } finally {
        loading.value = false;
    }
});

const getImageUrl = (imagePath) => {
    return `${useRuntimeConfig().public.apiBaseUrl}/storage/${imagePath}`;
};
</script>