<template>
  <footer class="bg-sky-200 py-8 px-8 min-[1105px]:px-[133px] md:px-16">
    <div class="flex md:flex-row flex-col mb-7">
      <div class="flex flex-row md:justify-start justify-center items-center gap-x-4">
        <NuxtImg src="/logo-brand.svg" alt="logo-brand" class="h-11 object-contain" />
        <p class="text-sky-800 text-2xl mont-bold">KamaDev</p>
      </div>
      <div class="flex flex-row justify-center md:justify-end items-center md:mt-0 mt-7 md:grow grow-0">
        <NuxtLink to="/" class="px-3 py-2 text-sm mont-semibold text-sky-800" aria-current="page"
          >{{ $t("navbar.home") }}
        </NuxtLink>
        <NuxtLink to="/" class="px-3 py-2 text-sm mont-semibold text-sky-800">{{ $t("navbar.about") }} </NuxtLink>
        <NuxtLink to="/" class="px-3 py-2 text-sm mont-semibold text-sky-800">{{ $t("navbar.portfolio") }} </NuxtLink>
        <NuxtLink to="/" class="px-3 py-2 text-sm mont-semibold text-sky-800">{{ $t("navbar.contact") }}</NuxtLink>
      </div>
    </div>
    <div class="border-b-2 border-sky-800 opacity-50"></div>
    <div class="flex flex-col justify-center items-center mt-7">
      <div class="flex flex-row mb-7 gap-x-8">
        <a href="#">
          <NuxtImg
            src="/website-icon.svg"
            alt="btn-icon"
            class="md:w-7 w-5 object-contain hover:scale-125 ease-in-out duration-300"
          />
        </a>
        <a href="#">
          <NuxtImg
            src="/mail-icon.svg"
            alt="btn-icon"
            class="md:w-7 w-5 object-contain hover:scale-125 ease-in-out duration-300"
          />
        </a>
        <a href="#">
          <NuxtImg
            src="/whatsapp-icon.svg"
            alt="btn-icon"
            class="md:w-7 w-5 object-contain hover:scale-125 ease-in-out duration-300"
          />
        </a>
        <a href="#">
          <NuxtImg
            src="/linkedin-icon.svg"
            alt="btn-icon"
            class="md:w-7 w-5 object-contain hover:scale-125 ease-in-out duration-300"
          />
        </a>
        <a href="#">
          <NuxtImg
            src="/pinterest-icon.svg"
            alt="btn-icon"
            class="md:w-7 w-5 object-contain hover:scale-125 ease-in-out duration-300"
          />
        </a>
      </div>
      <div class="text-sm text-sky-800 font-mont">
        <p>Ⓒ 2024-2025 <span class="mont-bold">Kamareza.</span> All Rights Reserved.</p>
      </div>
      <!-- <div class="text-sm text-sky-800 font-mont">
                <p> Designed & Developed by <span class="mont-bold">Kamareza.</span> © 2025</p>
            </div> -->
    </div>
  </footer>
</template>
