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
                        <button v-if="experienceTabs.length" v-for="tab in experienceTabs" :key="tab.expTab"
                            @click="experienceActiveTab = tab.expTab">
                            <div :class="{ 'border-sky-400': experienceActiveTab === tab.expTab }"
                                class="border-l-4 py-2 px-5 -ml-1">
                                <p :class="{ 'text-sky-400': experienceActiveTab === tab.expTab }"
                                    class="text-sky-200 text-base popp-bold">
                                    {{ tab.name }}
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="block md:hidden py-5">
                    <hr class="border-1 border-sky-400 ">
                </div>
                <div class="container-tab-content">
                    <!-- Looping tabs -->
                    <div v-if="experienceTabs.length" v-for="tab in experienceTabs" :key="tab.expTab + '-experience'">
                        <div v-if="experienceActiveTab === tab.expTab"
                            class="tab-content md:border-l-2 pr-12 border-sky-400">
                            <div class="flex flex-col text-sky-400 mb-4 ml-4 space-y-1">
                                <h3 class="popp-bold text-xl">{{ tab.name }}</h3>
                                <p class="popp-medium text-sm">{{ tab.position }}</p>
                                <p class="popp-medium text-sm">{{ tab.period }}</p>
                            </div>
                            <div class="ml-4">
                                <ul class="flex flex-col text-sky-200 font-popp ml-4 list-outside list-disc space-y-2">
                                    <li v-for="(desc, key) in jobDescriptions[tab.expTab]" :key="key" class="text-xs">
                                        {{ desc }}
                                    </li>
                                </ul>
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
                            <div :class="{ 'border-sky-400': educationActiveTab === tabEdu.eduTab }"
                                class="border-l-4 py-2 px-5 -ml-1">
                                <p :class="{ 'text-sky-400': educationActiveTab === tabEdu.eduTab }"
                                    class="text-sky-200 text-base popp-bold">
                                    {{ tabEdu.name }}
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
                        <div v-if="educationTabs.length" v-for="tab in educationTabs" :key="tab.eduTab + '-education'">
                            <div v-if="educationActiveTab === tab.eduTab"
                                class="tab-content md:border-l-2 pr-12 border-sky-400">
                                <div class="flex flex-col text-sky-400 mb-4 ml-4 space-y-1">
                                    <h3 class="popp-bold text-xl">{{ tab.name }}</h3>
                                    <p class="popp-medium text-sm">{{ tab.major }}</p>
                                    <p class="popp-medium text-sm">{{ tab.location }}</p>
                                </div>
                                <div class=" ml-4">
                                    <ul
                                        class="flex flex-col text-sky-200 font-popp ml-4 list-outside list-disc space-y-2">
                                        <li v-for="(learning, key) in eduDescriptions[tab.eduTab]" :key="key"
                                            class="text-xs">
                                            {{ learning }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div v-else class="text-sky-400">No experience data available.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Menyimpan tab yang aktif, default ke 'experience'
const mainActiveTab = ref('experience');

const experienceTabs = ref([
    { name: 'PT Transcosmos Indonesia', expTab: 'tcid', position: 'Fullstack Developer Internship', period: 'September 2024 - Present' },
    { name: 'PT Bringin Gigantara Indonesia', expTab: 'bgi', position: 'Admin Monitoring ATM Internship', period: 'Desember 2023 - Maret 2024' },
]);
const jobDescriptions = ref({
    bgi: {
        'jobdesc-1': "Communicate information about machine issues to the relevant branches.",
        'jobdesc-2': "Summarize the explanations from the branch teams based on their follow-up reports.",
        'jobdesc-3': "Maintain communication with each branch through Telegram chat or phone calls.",
        'jobdesc-4': "Compile monitoring data regularly according to the company's format and guidelines",
        'jobdesc-5': "Create daily monitoring reports.",
        'jobdesc-6': "Create daily second-level maintenance reports.",
        'jobdesc-7': "Record and report critical machine issues, such as spare part damage, to the division head."
    },
    tcid: {
        'jobdesc-1': "Develop a landing page.",
        'jobdesc-2': "Use Bootstrap and Tailwind CSS for styling the website.",
        'jobdesc-3': "Build the website using Nuxt 3 and Laravel 11.",
        'jobdesc-4': "Create monthly report presentations using PowerPoint with data from Google Analytics.",
        'jobdesc-5': "Monitor SMS success or failure on a website.",
        'jobdesc-6': "Create documents such as BRD (Business Requirements Document), use cases, activity diagrams, knowledge base, and others."
    }
});
const experienceActiveTab = ref('tcid');

const educationTabs = ref([
    { name: 'Politeknik LP3I Jakarta', eduTab: 'lp3i', major: 'Manajemen Informatika', location: 'Kampus Depok, Kota Depok' },
    { name: 'SMK Al - Asiyah', eduTab: 'alas', major: 'Multimedia', location: 'Cibinong, Kabupaten Bogor' },
]);
const eduDescriptions = ref({
    lp3i: {
        'learning-1': "Studied UI/UX design for applications and websites.",
        'learning-2': "Learned web programming using CodeIgniter 4.",
        'learning-3': "Studied mobile programming with React Native.",
        'learning-4': "Gained knowledge in database management with MySQL.",
        'learning-5': "Learned basic office skills",
    },
    alas: {
        'learning-1': "Learned the use of CorelDRAW and Photoshop for graphic design.",
        'learning-2': "Studied design techniques and layout settings for printing purposes.",
        'learning-3': "Gained knowledge in audio and video editing.",
        'learning-4': "Learned the basics of HTML.",
    }
});
const educationActiveTab = ref('lp3i');
</script>