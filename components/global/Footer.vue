<template>
  <div class="px-4 py-8 bg-pc-teal mt-2">
    <div class="flex flex-wrap">
      <div class="w-full flex justify-center mb-8">
        <button
          class="bg-transparent border-3 border-pc-navy-blue outline-none focus:outline-none text-white px-6 py-3 rounded-50px font-bold"
        >
          Get Featured
        </button>
      </div>
      <div v-for="link in footerLinks" :key="link.id" class="w-full mb-4">
        <router-link :to="link.path">
          <p class="text-pc-navy-blue font-bold">{{ link.text }}</p>
        </router-link>
      </div>
      <div class="w-full flex justify-evenly mt-8">
        <div>
          <img src="@/assets/icons/insta-icon.svg" alt />
        </div>
        <div>
          <img src="@/assets/icons/facebook-icon.svg" alt />
        </div>
        <div>
          <img src="@/assets/icons/mail-icon.svg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Footer extends Vue {
  footerLinks = [
    {
      id: 1,
      text: "About Us",
      path: "/about"
    },
    {
      id: 2,
      text: "Contact Us",
      path: "/contact"
    },
    {
      id: 3,
      text: "Terms & Conditions",
      path: "/terms"
    },
    {
      id: 4,
      text: "Privacy & Cookie Policy",
      path: "/privacy"
    }
  ];
}
</script>
