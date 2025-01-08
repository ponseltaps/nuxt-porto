<template>
    <div class="min-[1105px]:px-[133px] md:px-16 px-8 mt-28 mb-28">
        <div>
            <h2 class="text-3xl text-center text-sky-800 mont-bold uppercase">
                PROFESSIONAL EXPERIENCE & EDUCATION
            </h2>
            <!-- Tab buttons -->
            <div class="btn-header-tabs flex mt-12">
                <button @click="setActiveTab('experience')" :class="{
                    'bg-sky-950 border-b-4 border-sky-400': activeTab === 'experience',
                    'border-b-2 border-sky-200': activeTab !== 'experience'
                }" class="flex justify-center rounded-t-2xl w-full sm:py-4 py-2">
                    <p :class="{
                        'text-white': activeTab !== 'experience',
                        'text-sky-400': activeTab === 'experience',
                        'sm:text-xl': true,
                        'text-base': activeTab !== 'experience'
                    }" class="mont-bold">
                        Experience
                    </p>
                </button>

                <button @click="setActiveTab('education')" :class="{
                    'bg-sky-950 border-b-4 border-sky-400': activeTab === 'education',
                    'border-b-2 border-sky-200': activeTab !== 'education'
                }" class="flex justify-center rounded-t-2xl w-full sm:py-4 py-2">
                    <p :class="{
                        'text-white': activeTab !== 'education',
                        'text-sky-400': activeTab === 'education',
                        'sm:text-xl': true,
                        'text-base': activeTab !== 'education'
                    }" class="mont-bold">
                        Education
                    </p>
                </button>
            </div>

            <!-- Content experience tab -->
            <div v-if="activeTab === 'experience'" id="experience-tab"
                class="flex md:flex-row flex-col bg-sky-950 rounded-b-2xl py-12 mt-6 max-[767px]:border-b-2 max-[767px]:border-sky-400">
                <div class="tab-btn">
                    <div class="link-tabs flex flex-col w-max mr-12 space-y-4 border-l-4">
                        <NuxtLink to="#">
                            <div class="border-l-4 border-sky-400 py-2 px-5 -ml-1">
                                <p class="text-sky-400 text-base popp-bold">PT Transcosmos Indonesia</p>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="#">
                            <div class="border-l-4 py-2 px-5 -ml-1">
                                <p class="text-sky-200 text-base popp-bold">PT Bringin Gigantara Indonesia</p>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="#">
                            <div class="border-l-4 py-2 px-5 -ml-1">
                                <p class="text-sky-200 text-base popp-bold">PT Lorem Ipsum</p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="container-tab-content">
                    <div class="experience-content">
                        <div id="tcid" class="tab-content md:border-l-2 pr-12 border-sky-400">
                            <div class="flex flex-col text-sky-400 mb-4 ml-4 space-y-1">
                                <h3 class="popp-bold text-xl">PT Transcosmos Indonesia</h3>
                                <p class="popp-medium text-sm">Fullstack Developer Internship</p>
                                <p class="popp-medium text-sm">September 2024 - Present</p>
                            </div>
                            <div class=" ml-4">
                                <ul class="flex flex-col text-sky-200 font-popp ml-4 list-outside list-disc space-y-2">
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                                        fugiat
                                        explicabo soluta pariatur quae, sit ratione rem velit illum veniam sint,
                                        deleniti
                                        eligendi provident laudantium amet iste assumenda. Earum perferendis sit aperiam
                                        deserunt voluptatem illum aut. Eos eum consectetur repellat neque quibusdam ab
                                        ipsam
                                        aliquid vel aut. Sapiente, repellendus in.</li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="bgi" class="hidden tab-content border-l-2 pr-12 border-sky-400">
                            <div class="flex flex-col text-sky-400 mb-4 ml-4 space-y-1">
                                <h3 class="popp-bold text-xl">PT Bringin Gigantara Indonesia</h3>
                                <p class="popp-medium text-sm">Admin Monitoring ATM Internship</p>
                                <p class="popp-medium text-sm">Desember 2023 - Maret 2024</p>
                            </div>
                            <div class=" ml-4">
                                <ul class="flex flex-col text-sky-200 font-popp ml-4 list-outside list-disc space-y-2">
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                                        fugiat
                                        explicabo soluta pariatur quae, sit ratione rem velit illum veniam sint,
                                        deleniti
                                        eligendi provident laudantium amet iste assumenda. Earum perferendis sit aperiam
                                        deserunt voluptatem illum aut. Eos eum consectetur repellat neque quibusdam ab
                                        ipsam
                                        aliquid vel aut. Sapiente, repellendus in.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Content education tab -->
            <div v-if="activeTab === 'education'" id="education-tab"
                class="flex md:flex-row flex-col bg-sky-950 rounded-b-2xl py-12 mt-6 max-[767px]:border-b-2 max-[767px]:border-sky-400">
                <div class="tab-btn">
                    <div class="link-tabs flex flex-col w-max mr-12 space-y-4 border-l-4">
                        <NuxtLink to="#">
                            <div class="border-l-4 border-sky-400 py-2 px-5 -ml-1">
                                <p class="text-sky-400 text-base popp-bold">Politeknik LP3I Jakarta</p>
                            </div>
                        </NuxtLink>
                        <NuxtLink to="#">
                            <div class="border-l-4 py-2 px-5 -ml-1">
                                <p class="text-sky-200 text-base popp-bold">SMK Al Asiyah</p>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="container-tab-content">
                    <div class="experience-content">
                        <div id="lp3i" class="tab-content md:border-l-2 pr-12 border-sky-400">
                            <div class="flex flex-col text-sky-400 mb-4 ml-4 space-y-1">
                                <h3 class="popp-bold text-xl">Politeknik LP3I Jakarta</h3>
                                <p class="popp-medium text-sm">Manajemen Informatika</p>
                                <p class="popp-medium text-sm"> kampus Depok, Kota Depok</p>
                            </div>
                            <div class=" ml-4">
                                <ul class="flex flex-col text-sky-200 font-popp ml-4 list-outside list-disc space-y-2">
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                                        fugiat
                                        explicabo soluta pariatur quae, sit ratione rem velit illum veniam sint,
                                        deleniti
                                        eligendi provident laudantium amet iste assumenda. Earum perferendis sit aperiam
                                        deserunt voluptatem illum aut. Eos eum consectetur repellat neque quibusdam ab
                                        ipsam
                                        aliquid vel aut. Sapiente, repellendus in.</li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="alasiyah" class="hidden tab-content border-l-2 pr-12 border-sky-400">
                            <div class="flex flex-col text-sky-400 mb-4 ml-4 space-y-1">
                                <h3 class="popp-bold text-xl">SMK Al - Asiyah</h3>
                                <p class="popp-medium text-sm">Multimedia</p>
                                <p class="popp-medium text-sm">Desember 2023 - Maret 2024</p>
                            </div>
                            <div class=" ml-4">
                                <ul class="flex flex-col text-sky-200 font-popp ml-4 list-outside list-disc space-y-2">
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                                        culpa?
                                    </li>
                                    <li class="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                                        fugiat
                                        explicabo soluta pariatur quae, sit ratione rem velit illum veniam sint,
                                        deleniti
                                        eligendi provident laudantium amet iste assumenda. Earum perferendis sit aperiam
                                        deserunt voluptatem illum aut. Eos eum consectetur repellat neque quibusdam ab
                                        ipsam
                                        aliquid vel aut. Sapiente, repellendus in.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const activeTab = ref('experience');

// Fungsi untuk mengubah tab dan memperbarui URL
const setActiveTab = (tab) => {
    activeTab.value = tab;

    // Ambil bagian path saat ini (misalnya '/about-me') dari URL
    const basePath = window.location.pathname.split('/')[1]; // '/about-me' menjadi 'about-me'

    // Update URL dengan mempertahankan bagian sebelumnya (misalnya '/about-me') dan tambahkan tab
    history.pushState(null, '', `/${basePath}/${tab}`);
};

// Mengambil nilai tab dari URL saat komponen pertama kali dimuat
onMounted(() => {
    const path = window.location.pathname.split('/'); // Membagi URL menjadi array berdasarkan '/'
    const basePath = path[1]; // Misalnya 'about-me'
    const currentTab = path[2]; // Misalnya 'experience' atau 'education'

    // Tentukan tab yang aktif berdasarkan URL
    if (currentTab && (currentTab === 'experience' || currentTab === 'education')) {
        activeTab.value = currentTab;
    } else {
        activeTab.value = 'experience'; // Default tab jika tidak ada path tab
    }
});
</script>
