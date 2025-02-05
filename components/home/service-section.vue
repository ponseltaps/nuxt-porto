<template>
    <!-- Skeleton Loader -->
    <div v-if="loading" class="min-[1105px]:px-[133px] md:px-16 px-8 mt-[70px] mb-28">
        <div class="flex md:flex-row flex-col justify-between items-center w-full gap-x-6">
            <div class="animate-pulse md:mb-0 mb-6">
                <div
                    class="flex flex-col md:w-[500px] w-full h-max md:order-1 order-2 bg-sky-400 rounded-xl px-7 py-12 gap-y-7">
                    <div class="bg-sky-300 flex items-center self-stretch px-5 py-4 rounded-xl">
                        <div class="w-24 ">
                        </div>
                        <div class="flex flex-col w-full h-auto gap-y-4">
                            <div class="h-6 w-full bg-sky-400 rounded"></div>
                            <div class="h-16 w-full bg-sky-400 rounded"></div>
                        </div>
                    </div>
                    <div class="bg-sky-300 flex items-center self-stretch px-5 py-4 rounded-xl">
                        <div class="w-24 ">
                        </div>
                        <div class="flex flex-col w-full h-auto gap-y-4">
                            <div class="h-6 w-full bg-sky-400 rounded"></div>
                            <div class="h-16 w-full bg-sky-400 rounded"></div>
                        </div>
                    </div>
                    <div class="bg-sky-300 flex items-center self-stretch px-5 py-4 rounded-xl">
                        <div class="w-24 ">
                        </div>
                        <div class="flex flex-col w-full h-auto gap-y-4">
                            <div class="h-6 w-full bg-sky-400 rounded"></div>
                            <div class="h-16 w-full bg-sky-400 rounded"></div>
                        </div>
                    </div>

                </div>
            </div>

            <div
                class="flex flex-col justify-center md:w-[430px] w-full md:order-2 order-1 md:mb-0 mb-12 animate-pulse">
                <div class="h-12 w-full bg-sky-400 rounded-xl">
                </div>
                <div class="my-6 gap-y-3 flex flex-col">
                    <div class="h-36 w-full bg-sky-400 rounded-xl"></div>
                    <div class="h-36 w-full bg-sky-400 rounded-xl"></div>
                </div>
                <div class="h-8 w-20 bg-sky-400 rounded">

                </div>
            </div>
        </div>
    </div>

    <!-- Actual Content -->
    <div v-else class="min-[1105px]:px-[133px] md:px-16 px-8 mt-[70px] mb-28">
        <div class="flex md:flex-row flex-col justify-between items-center w-full gap-x-6">
            <!-- card service -->
            <div
                class="flex flex-col md:w-[500px] w-full h-max md:order-1 order-2 bg-sky-950 rounded-xl px-7 py-12 gap-y-7">
                <div v-for="service in services" :key="service.id"
                    class="card flex flex-col sm:flex-row items-center self-stretch px-5 py-4 rounded-md gap-x-5 bg-white bg-opacity-50 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.50)_inset]">
                    <NuxtImg :src="getImageUrl(service.service_img)" format="webp" alt="service image"
                        class="w-24 object-contain" />
                    <div class="flex flex-col">
                        <h3 class="text-lg mont-semibold text-sky-800 mb-1">
                            {{ language === 'en' ? service.service_title_en : service.service_title_id }}
                        </h3>
                        <p class="text-xs popp-light text-sky-100">
                            {{ language === 'en' ? service.service_desc_en : service.service_desc_id }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Description service -->
            <div class="flex flex-col justify-center md:w-[430px] w-full md:order-2 order-1 md:mb-0 mb-12">
                <h3 class="text-3xl mont-semibold text-white"
                    v-html="language === 'en' ? serviceText?.[0]?.service_heading_en : serviceText?.[0]?.service_heading_id">
                </h3>
                <div class="my-6">
                    <p class="text-sm font-popp text-white mb-2"
                        v-html="language === 'en' ? serviceText?.[0]?.service_desc_en : serviceText?.[0]?.service_desc_id">
                    </p>
                </div>
                <buttonSolid href="/portfolio" class="w-fit">
                    {{ $t("service.btn-explore") }}
                </buttonSolid>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import buttonSolid from '../button-solid.vue';

const { locale } = useI18n();
const language = ref(locale.value);

const services = ref([]);
const serviceText = ref(null);
const loading = ref(true);

const { $apiFetch } = useNuxtApp();
onMounted(async () => {
    try {
        const servicesResponse = await $apiFetch("/api/home/service");
        if (!servicesResponse.ok) {
            throw new Error("Network response for services was not ok");
        }
        services.value = await servicesResponse.json();

        const textResponse = await $apiFetch("/api/home/service-text");
        if (!textResponse.ok) {
            throw new Error("Network response for service-text was not ok");
        }
        serviceText.value = await textResponse.json();

    } catch (err) {
        console.error("Error fetching data:", err);
    } finally {
        loading.value = false;
    }
});

// Fungsi untuk mendapatkan URL gambar
const getImageUrl = (imagePath) => {
    return `${useRuntimeConfig().public.apiBaseUrl}/storage/${imagePath}`;
};
</script>