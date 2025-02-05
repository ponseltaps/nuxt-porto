<template>
    <div class="min-[1105px]:px-[133px] md:px-16 px-8 mt-28 mb-28">
        <div>
            <h2 class="text-3xl text-center text-sky-800 mont-bold uppercase">
                {{ $t("about.tab.header") }}
            </h2>
            <!-- Tab buttons -->
            <div class="btn-header-tabs flex mt-12">
                <button @click="mainActiveTab = 'experience'" :class="{
                    'bg-sky-950 border-b-4 border-sky-400': mainActiveTab === 'experience',
                    'border-b-2 border-sky-200 hover:bg-sky-100/50': mainActiveTab !== 'experience'
                }" class="flex justify-center rounded-t-2xl w-full sm:py-4 py-2">
                    <p :class="{
                        'text-white': mainActiveTab !== 'experience',
                        'text-sky-400': mainActiveTab === 'experience',
                        'sm:text-xl': true,
                        'text-base': mainActiveTab !== 'experience'
                    }" class="mont-bold">
                        {{ $t("about.tab.experience") }}
                    </p>
                </button>

                <button @click="mainActiveTab = 'education'" :class="{
                    'bg-sky-950 border-b-4 border-sky-400': mainActiveTab === 'education',
                    'border-b-2 border-sky-200 hover:bg-sky-100/50': mainActiveTab !== 'education'
                }" class="flex justify-center rounded-t-2xl w-full sm:py-4 py-2">
                    <p :class="{
                        'text-white': mainActiveTab !== 'education',
                        'text-sky-400': mainActiveTab === 'education',
                        'sm:text-xl': true,
                        'text-base': mainActiveTab !== 'education'
                    }" class="mont-bold">
                        {{ $t("about.tab.education") }}
                    </p>
                </button>
            </div>

            <!-- Content experience tab -->
            <div v-if="mainActiveTab === 'experience'" id="experience-tab"
                class="flex md:flex-row flex-col bg-sky-950 rounded-b-2xl py-12 md:mt-6 mt-3">

                <div class="tab-btn">
                    <div class="link-tabs flex flex-col items-start w-max mr-12 space-y-4 border-l-4">
                        <!-- Tombol ini hanya akan muncul jika data experienceTabs ada -->
                        <button v-if="experienceTabs && experienceTabs.length" v-for="tab in experienceTabs"
                            :key="tab.expTab" @click="experienceActiveTab = tab.expTab">
                            <!-- expTab nanti akan diubah menjadi slug dari database -->
                            <div :class="{ 'border-sky-400': experienceActiveTab === tab.expTab }"
                                class="border-l-4 py-2 px-5 -ml-1">
                                <p :class="{ 'text-sky-400': experienceActiveTab === tab.expTab }"
                                    class="text-sky-200 text-base popp-bold">
                                    <!-- Menampilkan data dari 'company' -->
                                    {{ tab.name }}
                                </p>
                            </div>
                        </button>
                    </div>
                </div>

                <div class="block md:hidden py-5">
                    <hr class="border-1 border-sky-400 " />
                </div>

                <div class="container-tab-content">
                    <div v-if="experienceTabs && experienceTabs.length" v-for="tab in experienceTabs"
                        :key="tab.expTab + '-experience'">
                        <div v-if="experienceActiveTab === tab.expTab"
                            class="tab-content md:border-l-2 pr-12 border-sky-400">
                            <div class="flex flex-col text-sky-400 mb-4 ml-4 space-y-1">
                                <h3 class="popp-bold text-xl">
                                    {{ tab.name }}
                                </h3>
                                <p class="popp-medium text-sm">
                                    {{ tab.position }}
                                </p>
                                <p class="popp-medium text-sm">
                                    {{ tab.period }}
                                </p>
                            </div>

                            <div class="ml-4">
                                <div v-html="jobDescriptions[experienceActiveTab]?.[language]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Content education tab -->
            <div v-if="mainActiveTab === 'education'" id="education-tab"
                class="flex md:flex-row flex-col bg-sky-950 rounded-b-2xl py-12 md:mt-6 mt-3">
                <div class="tab-btn">
                    <div class="link-tabs flex flex-col items-start w-max mr-12 space-y-4 border-l-4">
                        <button v-if="educationTabs.length" v-for="tabEdu in educationTabs" :key="tabEdu.eduTab"
                            @click="educationActiveTab = tabEdu.eduTab">
                            <!-- Berisi tombol nama pendidikan -->
                            <div :class="{ 'border-sky-400': educationActiveTab === tabEdu.eduTab }"
                                class="border-l-4 py-2 px-5 -ml-1">
                                <p :class="{ 'text-sky-400': educationActiveTab === tabEdu.eduTab }"
                                    class="text-sky-200 text-base popp-bold">
                                    {{ tabEdu.name }} <!-- Nama pendidikan -->
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="block md:hidden py-5">
                    <hr class="border-1 border-sky-400 ">
                </div>
                <div class="container-tab-content">
                    <div class="education-content">
                        <!-- eduTab berdasarkan 'slug' -->
                        <div v-if="educationTabs.length" v-for="tab in educationTabs" :key="tab.eduTab + '-education'">
                            <div v-if="educationActiveTab === tab.eduTab"
                                class="tab-content md:border-l-2 pr-12 border-sky-400">
                                <div class="flex flex-col text-sky-400 mb-4 ml-4 space-y-1">
                                    <h3 class="popp-bold text-xl">
                                        <!-- Menampilkan data 'education_name' -->
                                        {{ tab.name }}
                                    </h3>
                                    <p class="popp-medium text-sm">
                                        <!-- Menampilkan data 'degree_level' -->
                                        {{ tab.degree }}
                                    </p>
                                    <p class="popp-medium text-sm">
                                        <!-- Menampilkan data 'location' -->
                                        {{ tab.location }}
                                    </p>
                                </div>
                                <div class="ml-4">
                                    <!-- Menampilkan deskripsi pembelajaran berdasarkan bahasa -->
                                    <div v-html="tab.description"></div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="text-sky-400">No Education data available.</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const language = ref(locale.value);

const experienceTabs = ref([]);
const jobDescriptions = ref({});

const experienceActiveTab = ref('');

const mainActiveTab = ref('experience');

const { $apiFetch } = useNuxtApp();

const formatDate = (dateString) => {
    const date = new Date(dateString);

    if (isNaN(date)) {
        console.error(`Invalid date string: ${dateString}`);
        return dateString;
    }

    return new Intl.DateTimeFormat(locale.value, {
        // day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(date);
};

onMounted(async () => {
    try {
        const response = await $apiFetch("/api/about/experience");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        if (data && Array.isArray(data) && data.length > 0) {
            experienceTabs.value = data.map(item => ({
                name: item.company,
                expTab: item.slug,
                position: item.position,
                period: `${formatDate(item.start_priode)} - ${formatDate(item.end_priode)}`
            }));

            data.forEach(item => {
                jobDescriptions.value[item.slug] = {
                    en: item.jobdesc_en,
                    id: item.jobdesc_id
                };
            });

            if (experienceTabs.value.length > 0) {
                experienceActiveTab.value = experienceTabs.value[0].expTab;
            }
        }
    } catch (error) {
        console.error('Error fetching experience data:', error);
    }
});


const educationTabs = ref([]); // Untuk menampung data pendidikan
const educationActiveTab = ref(''); // Untuk menentukan tab pendidikan yang aktif

onMounted(async () => {
    try {
        // Ambil data pendidikan dari API
        const response = await $apiFetch("/api/about/education");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        if (data && Array.isArray(data) && data.length > 0) {
            educationTabs.value = data.map(item => ({
                name: item.education_name,  // Nama pendidikan
                eduTab: item.slug,          // ID tab pendidikan (slug)
                degree: item.degree_level,  // Tingkat pendidikan (degree level)
                location: item.location,    // Lokasi pendidikan
                description: language.value === "en" ? item.learning_desc_en : item.learning_desc_id, // Deskripsi pembelajaran
            }));

            if (educationTabs.value.length > 0) {
                educationActiveTab.value = educationTabs.value[0].eduTab;  // Set tab pendidikan aktif pertama
            }
        }
    } catch (error) {
        console.error('Error fetching education data:', error);
    }
});

</script>
