<script setup>
import buttonSolid from '../button-solid.vue';
</script>

<template>
    <div class="min-[1105px]:px-[133px] md:px-16 px-8 mt-[70px] mb-28">
        <div class="flex md:flex-row flex-col justify-between w-full gap-x-6">
            <!-- card service -->
            <div class="flex flex-col md:w-[500px] w-full md:order-1 order-2 bg-sky-950 rounded-xl px-7 py-12 gap-y-7">
                <div
                    class="card flex items-center self-stretch px-5 py-4 rounded-md gap-x-5 bg-white bg-opacity-50 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.50)_inset]">
                    <NuxtImg src="/coding-img.png" alt="profile-photo" class="w-24 object-contain" />
                    <div class="flex flex-col">
                        <p class="text-lg mont-semibold text-sky-800 mb-1">{{ $t("service.fe") }}</p>
                        <p class="text-xs popp-light text-sky-100">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Voluptas id libero excepturi asperiores, possimus officia?</p>
                    </div>
                </div>
                <div
                    class="card flex items-center self-stretch px-5 py-4 rounded-md gap-x-5 bg-white bg-opacity-50 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.50)_inset]">
                    <NuxtImg src="/web-ui.png" alt="profile-photo" class="w-24 object-contain" />
                    <div class="flex flex-col">
                        <p class="text-lg mont-semibold text-sky-800 mb-1">{{ $t("service.ui") }}</p>
                        <p class="text-xs popp-light text-sky-100">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Voluptas id libero excepturi asperiores, possimus officia?</p>
                    </div>
                </div>
                <div
                    class="card flex items-center self-stretch px-5 py-4 rounded-md gap-x-5 bg-white bg-opacity-50 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.50)_inset]">
                    <NuxtImg src="/creative-design.png" alt="profile-photo" class="w-24 object-contain" />
                    <div class="flex flex-col">
                        <p class="text-lg mont-semibold text-sky-800 mb-1">{{ $t("service.dg") }}</p>
                        <p class="text-xs popp-light text-sky-100">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                            Voluptas id libero excepturi asperiores, possimus officia?</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center md:w-[430px] w-full md:order-2 order-1 md:mb-0 mb-12">
                <h3 class="text-3xl mont-semibold text-white">{{ $t("service.from") }} <span class="text-sky-800">{{ $t("service.vision") }}</span
                        class="text-sky-800"> {{ $t("service.to") }}
                    <span class="text-sky-800">{{ $t("service.visual") }}</span>, {{ $t("service.and") }}
                    <span class="text-sky-800">{{ $t("service.beyond") }}</span>
                </h3>
                <div class="my-6">
                    <p class="text-sm font-popp text-white mb-2">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quaerat tempora iusto id expedita rerum
                        harum assumenda minus iure illo enim.</p>
                    <p class="text-sm font-popp text-white">Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Nostrum tempora consectetur sunt fuga,
                        dolorem exercitationem nemo consequatur eius earum ab dignissimos tempore commodi consequuntur
                        ratione magnam, assumenda adipisci at corporis quo. Aliquid accusamus ipsam, impedit blanditiis
                        omnis explicabo odit id, sed et soluta asperiores fugit. Eveniet nam repellat eius veniam?</p>
                </div>
                <buttonSolid href="/portfolio" class="w-fit">
                    {{ $t("service.btn-explore") }}
                </buttonSolid>
            </div>
        </div>
    </div>
</template>