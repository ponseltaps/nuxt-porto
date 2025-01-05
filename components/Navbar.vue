<template>
  <nav class="relative">
    <div
      class="mx-auto fixed z-[1000] top-0 left-0 right-0 max-w-[1100px] px-6 bg-white lg:rounded-b-lg rounded-b-none lg:drop-shadow">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button type="button"
            class="relative inline-flex items-center justify-center rounded-md p-2 text-sky-800 hover:bg-sky-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu" @click="toggleMenu('mobile')">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <svg :class="menus.mobile ? 'hidden' : 'block'" class="size-6" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg :class="menus.mobile ? 'block' : 'hidden'" class="size-6" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navlink -->
        <div class="sm:flex hidden flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <NuxtLink to="/">
              <NuxtImg src="/logo-brand.svg" alt="logo" class="h-8 object-contain" />
            </NuxtLink>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Saya ingin ketika aktif pada sebuah page memiliki class "border-b-2 border-sky-800 text-sm mont-semibold text-sky-800" -->
              <NuxtLink to="/" class="px-3 py-2 text-sm mont-medium text-sky-400 hover:border-b-2 hover:border-sky-200"
                exact-active-class="border-b-2 border-sky-800 text-sky-800 mont-bold">{{ $t("navbar.home") }}
              </NuxtLink>
              <NuxtLink to="/test"
                class="px-3 py-2 text-sm mont-medium text-sky-400 hover:border-b-2 hover:border-sky-200"
                exact-active-class="border-b-2 border-sky-800 text-sky-800 mont-bold">
                {{
                  $t("navbar.about") }}
              </NuxtLink>
              <NuxtLink to="/portfolio"
                class="px-3 py-2 text-sm mont-medium text-sky-400 hover:border-b-2 hover:border-sky-200"
                exact-active-class="border-b-2 border-sky-800 text-sky-800 mont-bold">{{
                  $t("navbar.portfolio") }}
              </NuxtLink>
              <NuxtLink to="/test"
                class="px-3 py-2 text-sm mont-medium text-sky-400 hover:border-b-2 hover:border-sky-200"
                exact-active-class="border-b-2 border-sky-800 text-sky-800 mont-bold">{{
                  $t("navbar.contact")
                }}</NuxtLink>
            </div>
          </div>
        </div>
        <div class="absolute flex items-center inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- Language btn -->
          <div class="relative ml-3">
            <button type="button" data-dropdown-toggle="language-dropdown-menu"
              class="inline-flex items-center font-semibold justify-center px-4 py-2 text-sm text-sky-800 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark dark:hover:text-white"
              @click="toggleLanguageMenu">
              <svg v-if="language === 'en'" aria-hidden="true" class="h-5 w-5 rounded-full me-2"
                xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                <g fill-rule="evenodd">
                  <g stroke-width="1pt">
                    <path fill="#bd3d44"
                      d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                      transform="scale(3.9385)" />
                    <path fill="#fff"
                      d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                      transform="scale(3.9385)" />
                  </g>
                  <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                </g>
              </svg>
              <svg v-if="language === 'id'" aria-hidden="true" class="h-5 w-5 rounded-full me-2"
                xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-id" viewBox="0 0 512 512">
                <!-- SVG untuk Indonesia -->
                <g fill-rule="evenodd">
                  <path fill="#e30a17" d="M0 0h512v256H0z" />
                  <path fill="#fff" d="M0 256h512v256H0z" />
                </g>
              </svg>
              {{ language === "en" ? "English (US)" : "Indonesia" }}
            </button>

            <!-- Dropdown untuk memilih bahasa -->
            <div v-if="menus.language"
              class="origin-top-right w-max absolute right-0 mt-5 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <ul class="py-2 font-medium" role="none">
                <li>
                  <div @click="changeLanguage('en')"
                    class="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    <div class="inline-flex items-center">
                      <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-us" viewBox="0 0 512 512">
                        <g fill-rule="evenodd">
                          <path fill="#bd3d44"
                            d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)" />
                          <path fill="#fff"
                            d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                            transform="scale(3.9385)" />
                        </g>
                        <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
                      </svg>
                      English (US)
                    </div>
                  </div>
                </li>
                <li>
                  <div @click="changeLanguage('id')"
                    class="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    <div class="inline-flex items-center">
                      <svg aria-hidden="true" class="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-id" viewBox="0 0 512 512">
                        <g fill-rule="evenodd">
                          <path fill="#e30a17" d="M0 0h512v256H0z" />
                          <path fill="#fff" d="M0 256h512v256H0z" />
                        </g>
                      </svg>
                      Indonesia
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Profile btn -->
          <!-- <div class="relative ml-3">
            <button
              type="button"
              class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 h-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="avatar"
                @click="toggleMenu('profile')"
              />
            </button>
            <div
              v-if="menus.profile"
              class="origin-top-right absolute right-0 mt-5 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div class="p-2" role="none">
                <div class="flex w-full items-center space-x-2 px-2 py-2 pb-4 border-b-2 mb-2">
                  <img
                    alt="MAPCLUB"
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    data-nimg="1"
                    class="bx-shadow"
                    src="#"
                  />
                  <div class="gap-0">
                    <div class="flex items-center space-x-3">
                      <span class="truncate text-sm font-bold text-gray-900">0 Points</span>
                    </div>
                    <a class="truncate text-xs text-gray-500 hover:underline" target="_blank" href="#"
                      >Lihat Kartu Saya</a
                    >
                  </div>
                </div>
                <a
                  class="block px-2 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  href="#"
                  >Sign Out</a
                >
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <div v-if="menus.mobile" class="fixed sm:hidden bg-white w-full drop-shadow" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-[4.5rem]">
        <!-- Bagitu juga pada mobile, jika altif memiliki classbg-sky-200 -->
        <a href="#" class="block bg-sky-200 rounded-md px-3 py-2 text-sm font-semibold text-sky-800"
          aria-current="page">{{ $t("navbar.home") }}</a>
        <a href="#" class="block rounded-md px-3 py-2 text-sm font-semibold text-sky-800">{{ $t("navbar.about") }}</a>
        <a href="#" class="block rounded-md px-3 py-2 text-sm font-semibold text-sky-800">{{
          $t("navbar.portfolio")
        }}</a>
        <a href="#" class="block rounded-md px-3 py-2 text-sm font-semibold text-sky-800">{{ $t("navbar.contact") }}</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

// State untuk menu
const menus = ref({
  mobile: false,
  language: false,
  profile: false,
});

// Fungsi untuk toggle menu
const toggleMenu = (menu) => {
  menus.value[menu] = !menus.value[menu];
  if (menus.value[menu]) {
    for (let key in menus.value) {
      if (key !== menu) {
        menus.value[key] = false;
      }
    }
  }
};

// i18n setup
const { setLocale, locale } = useI18n();
const language = ref(locale.value);

// Fungsi untuk mengubah bahasa
const changeLanguage = (lang) => {
  setLocale(lang);
  language.value = lang;
  menus.value.language = false;
};

const toggleLanguageMenu = () => {
  toggleMenu("language");
};
</script>
