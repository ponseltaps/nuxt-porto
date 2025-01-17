<script setup>
import buttonSolid from '../button-solid.vue';
</script>

<template>
    <div class="min-[1105px]:px-[133px] md:px-16 px-8 mt-[70px] mb-28">
        <div class="flex md:flex-row flex-col justify-between items-center w-full gap-x-6">
            <!-- card service -->
            <div class="flex flex-col md:w-[500px] w-full h-max md:order-1 order-2 bg-sky-950 rounded-xl px-7 py-12 gap-y-7">
                <div
                    class="card flex items-center self-stretch px-5 py-4 rounded-md gap-x-5 bg-white bg-opacity-50 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.50)_inset]">
                    <NuxtImg src="/images/coding-img.png" format="webp" alt="profile-photo" class="w-24 object-contain" />
                    <div class="flex flex-col">
                        <p class="text-lg mont-semibold text-sky-800 mb-1">{{ $t("service.fe") }}</p>
                        <p class="text-xs popp-light text-sky-100">{{ $t("service.fe-desc") }}</p>
                    </div>
                </div>
                <div
                    class="card flex items-center self-stretch px-5 py-4 rounded-md gap-x-5 bg-white bg-opacity-50 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.50)_inset]">
                    <NuxtImg src="/images/web-ui.png" format="webp" alt="profile-photo" class="w-24 object-contain" />
                    <div class="flex flex-col">
                        <p class="text-lg mont-semibold text-sky-800 mb-1">{{ $t("service.ui") }}</p>
                        <p class="text-xs popp-light text-sky-100">{{ $t("service.ui-desc") }}</p>
                    </div>
                </div>
                <div
                    class="card flex items-center self-stretch px-5 py-4 rounded-md gap-x-5 bg-white bg-opacity-50 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.50)_inset]">
                    <NuxtImg src="/images/creative-design.png" format="webp" alt="profile-photo" class="w-24 object-contain" />
                    <div class="flex flex-col">
                        <p class="text-lg mont-semibold text-sky-800 mb-1">{{ $t("service.dg") }}</p>
                        <p class="text-xs popp-light text-sky-100">{{ $t("service.dg-desc") }}</p>
                    </div>
                </div>
            </div>
            <!-- Description service -->
            <div class="flex flex-col justify-center md:w-[430px] w-full md:order-2 order-1 md:mb-0 mb-12">
                <h3 class="text-3xl mont-semibold text-white">{{ $t("service.from") }} <span class="text-sky-800">{{
                    $t("service.vision") }}</span class="text-sky-800"> {{ $t("service.to") }}
                    <span class="text-sky-800">{{ $t("service.visual") }}</span>, {{ $t("service.and") }}
                    <span class="text-sky-800">{{ $t("service.beyond") }}</span>
                </h3>
                <div class="my-6">
                    <p class="text-sm font-popp text-white mb-2">{{ $t("service.paragraph-1") }}</p>
                    <p class="text-sm font-popp text-white">{{ $t("service.paragraph-2") }}</p>
                </div>
                <buttonSolid href="/portfolio" class="w-fit">
                    {{ $t("service.btn-explore") }}
                </buttonSolid>
            </div>
        </div>
    </div>
</template>