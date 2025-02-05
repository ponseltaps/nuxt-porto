<template>
  <div class="relative ml-3 z-20">
    <button
      type="button"
      class="inline-flex items-center font-semibold justify-center px-4 py-2 text-sm text-sky-800 rounded-lg cursor-pointer bg-sky-300/50"
      @click="toggleLanguageMenu"
    >
      <svg
        v-if="language === 'en'"
        aria-hidden="true"
        class="h-5 w-5 rounded-full me-2"
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icon-css-us"
        viewBox="0 0 512 512"
      >
        <g fill-rule="evenodd">
          <g stroke-width="1pt">
            <path
              fill="#bd3d44"
              d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
              transform="scale(3.9385)"
            />
            <path
              fill="#fff"
              d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
              transform="scale(3.9385)"
            />
          </g>
          <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
        </g>
      </svg>
      <svg
        v-if="language === 'id'"
        aria-hidden="true"
        class="h-5 w-5 rounded-full me-2"
        xmlns="http://www.w3.org/2000/svg"
        id="flag-icon-css-id"
        viewBox="0 0 512 512"
      >
        <!-- SVG untuk Indonesia -->
        <g fill-rule="evenodd">
          <path fill="#e30a17" d="M0 0h512v256H0z" />
          <path fill="#fff" d="M0 256h512v256H0z" />
        </g>
      </svg>
      {{ language === "en" ? "English (US)" : "Indonesia" }}
    </button>

    <!-- Dropdown untuk memilih bahasa -->
    <div
      v-if="menus.language"
      class="origin-top-right w-max absolute right-0 mt-5 shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <ul class="py-2 font-medium" role="none">
        <li>
          <div
            @click="changeLanguage('en')"
            class="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div class="inline-flex items-center">
              <svg
                aria-hidden="true"
                class="h-3.5 w-3.5 rounded-full me-2"
                xmlns="http://www.w3.org/2000/svg"
                id="flag-icon-css-us"
                viewBox="0 0 512 512"
              >
                <g fill-rule="evenodd">
                  <path
                    fill="#bd3d44"
                    d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                    transform="scale(3.9385)"
                  />
                  <path
                    fill="#fff"
                    d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                    transform="scale(3.9385)"
                  />
                </g>
                <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)" />
              </svg>
              English (US)
            </div>
          </div>
        </li>
        <li>
          <div
            @click="changeLanguage('id')"
            class="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div class="inline-flex items-center">
              <svg
                aria-hidden="true"
                class="h-3.5 w-3.5 rounded-full me-2"
                xmlns="http://www.w3.org/2000/svg"
                id="flag-icon-css-id"
                viewBox="0 0 512 512"
              >
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
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { setLocale, locale } = useI18n();
const language = ref(locale.value); 
const menus = ref({
  language: false, // menu tertutup
});

const changeLanguage = (lang) => {
  setLocale(lang);
  language.value = lang;
  menus.value.language = false;
};

const toggleLanguageMenu = () => {
  menus.value.language = !menus.value.language;
};
</script>
