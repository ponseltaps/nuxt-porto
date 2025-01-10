<template>
  <a
    :href="href"
    class="rounded-lg bg-sky-800 hover:bg-sky-700 text-white lg:text-base text-sm popp-semibold px-6 py-4"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: "#", // Nilai default jika tidak ada href yang diberikan
    },
  },
};
</script>
