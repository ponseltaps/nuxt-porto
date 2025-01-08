<script setup>
import imgBackground from "~/assets/images/get-touch-bg.jpg";
import ButtonSolid from "../button-solid.vue";
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="flex flex-col justify-center max-[768px]:py-14 md:pl-7 px-12 bg-bottom" :style="{
      backgroundImage: 'url(' + imgBackground + ')',
    }">
      <div class="mb-14">
        <h2 class="text-sky-200 popp-bold text-3xl mb-8">{{ $t("contact.git") }}</h2>
        <p class="text-white font-popp text-sm">
          {{ $t("contact.contact-desc") }}
        </p>
      </div>
      <div class="flex flex-col gap-5">
        <div class="flex flex-row">
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 4H18V6H16V4ZM16 8H18V10H16V8ZM16 12H18V14H16V12ZM0 8V18H6V13H8V18H14V8L7 3L0 8ZM12 16H10V11H4V16H2V9L7 5.5L12 9V16Z"
              fill="white" />
            <path d="M9 0V1.97L11 3.4V2H20V16H16V18H22V0H9Z" fill="white" />
          </svg>
          <span class="ml-3 text-white font-popp text-sm">Jl. 1 lorem ipsu. Kec Dolor. Kota Ngidul</span>
        </div>
        <div class="flex flex-row">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.331 11.903 13.2256 11.886 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.37547 12.9303 5.06966 10.6245 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.69132 3.41789 5.4989 2.21274 5.5 1C5.5 0.45 5.05 0 4.5 0Z"
              fill="white" />
          </svg>
          <span class="ml-3 text-white font-popp text-sm">+62 895 1200 9988</span>
        </div>
        <div class="flex flex-row">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0H0.00999999L0 16H20V0ZM18 14H2V4L10 9L18 4V14ZM10 7L2 2H18L10 7Z" fill="white" />
          </svg>

          <span class="ml-3 text-white font-popp text-sm">kamareza@gmail.com</span>
        </div>
      </div>
    </div>
    <div class="bg-sky-950 py-12 md:pl-24 px-12">
      <form action="#" method="post" class="space-y-8">
        <div class="name-field">
          <label for="name" class="block text-sm popp-semibold text-white">{{ $t("contact.field.name") }}</label>
          <div class="mt-2">
            <input type="text" name="name" id="name"
              class="block w-full rounded-md bg-sky-800 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-sky-200 placeholder:text-gray-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm"
              :placeholder="t('contact.placeholder.name')" />
          </div>
          <p class="hidden mt-1 text-xs text-red-500">Error!</p>
        </div>
        <div class="email-field">
          <label for="email" class="block text-sm popp-semibold text-white">{{ $t("contact.field.email") }}</label>
          <div class="mt-2">
            <input type="email" name="email" id="email"
              class="block w-full rounded-md bg-sky-800 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-sky-200 placeholder:text-gray-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm"
              :placeholder="t('contact.placeholder.email')" />
          </div>
          <p class="hidden mt-1 text-xs text-red-500">Error!</p>
        </div>
        <div class="phone-field">
          <label for="phone-number" class="block text-sm popp-semibold text-white">{{ $t("contact.field.phone")
            }}</label>
          <div class="mt-2">
            <input type="text" name="phone-number" id="phone-number"
              class="block w-full rounded-md bg-sky-800 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-sky-200 placeholder:text-gray-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm"
              :placeholder="t('contact.placeholder.phone')" />
          </div>
          <p class="hidden mt-1 text-xs text-red-500">Error!</p>
        </div>
        <div class="message-field col-span-full">
          <label for="message" class="block text-sm popp-semibold text-white">{{ $t("contact.field.message") }}</label>
          <div class="mt-2">
            <textarea name="message" id="message" rows="3"
              class="block w-full rounded-md bg-sky-800 px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-sky-200 placeholder:text-gray-200 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600 sm:text-sm"></textarea>
          </div>
          <p class="hidden mt-1 text-xs text-red-500">Error!</p>
        </div>
        <div class="mt-9">
          <ButtonSolid> {{ t('contact.submit') }} </ButtonSolid>
        </div>
      </form>
    </div>
  </div>
</template>
