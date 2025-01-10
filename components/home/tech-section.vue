<template>
  <div class="min-[1105px]:px-[133px] md:px-16 px-8 mb-16">
    <h3 class="text-3xl mont-bold text-sky-800 text-center">
      THE TECH BEHIND THIS PROJECT
      <div class="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        <div class="card flex flex-col bg-sky-950 rounded-md p-7">
          <NuxtImg src="/nuxt-logo.svg" alt="tech-icon" class="h-20 object-contain" />
          <div class="mt-7">
            <h3 class="text-left text-xl text-white mont-bold mb-2">Nuxt 3</h3>
            <p class="text-left text-sm font-popp text-slate-300 line-clamp-4">
              Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and
              production-grade full-stack web apps and websites with confidence.
            </p>
          </div>
          <div class="mt-7 flex flex-row items-center">
            <p class="text-left text-xs font-popp text-slate-300 grow">27 Desember 2024</p>
            <a href="#" class="flex flex-row items-center text-left text-xs font-popp text-white gap-2 group">
              {{ $t("tech.read") }}
              <span class="transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  class="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div class="card flex flex-col bg-sky-950 rounded-md p-7">
          <NuxtImg src="/tailwind-logo.svg" alt="tech-icon" class="h-20 object-contain" />
          <div class="mt-7">
            <h3 class="text-left text-xl text-white mont-bold mb-2">Tailwind</h3>
            <p class="text-left text-sm font-popp text-slate-300 line-clamp-4">
              Tailwind CSS is a utility-first CSS framework that enables developers to build highly customizable and
              responsive user interfaces quickly. By using pre-defined utility classes directly in your HTML, Tailwind
              eliminates the need for writing custom CSS while offering full design flexibility. It simplifies the
              process of creating modern, scalable, and consistent designs, making web development faster and more
              efficient.
            </p>
          </div>
          <div class="mt-7 flex flex-row items-center">
            <p class="text-left text-xs font-popp text-slate-300 grow">27 Desember 2024</p>
            <a href="#" class="flex flex-row items-center text-left text-xs font-popp text-white gap-2 group">
              {{ $t("tech.read") }}
              <span class="transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  class="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div class="card flex flex-col bg-sky-950 rounded-md p-7">
          <NuxtImg src="/nuxt-logo.svg" alt="tech-icon" class="h-20 object-contain" />
          <div class="mt-7">
            <h3 class="text-left text-xl text-white mont-bold mb-2">Nuxt 3</h3>
            <p class="text-left text-sm font-popp text-slate-300 line-clamp-4">
              Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and
              production-grade full-stack web apps and websites with confidence.
            </p>
          </div>
          <div class="mt-7 flex flex-row items-center">
            <p class="text-left text-xs font-popp text-slate-300 grow">27 Desember 2024</p>
            <a href="#" class="flex flex-row items-center text-left text-xs font-popp text-white gap-2 group">
              {{ $t("tech.read") }}
              <span class="transition-transform duration-300 group-hover:translate-x-1">
                <svg
                  class="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </h3>
  </div>
</template>
