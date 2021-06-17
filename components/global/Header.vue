<template>
  <div class="flex flex-wrap bg-white">
    <div class="flex flex-wrap w-full px-4">
      <div class="w-full flex items-center py-6">
        <button class="bg-transparent outline-none focus:outline-none mr-5">
          <img src="@/assets/icons/hamburger-icon.svg" alt />
        </button>
        <img src="@/assets/logo.svg" alt />
      </div>
      <div
        class="w-full flex items-center border-2 border-search-border rounded-21px px-3 justify-between"
      >
        <input
          type="text"
          class="placeholder-pc-dark-gray outline-none border-0 focus:outline-none shadow-none bg-transparent flex-1 ring-offset-transparent ring-0 focus:ring-0"
          placeholder="Search"
        />
        <button class="bg-transparent outline-none focus:outline-none">
          <img src="@/assets/icons/search-icon.svg" alt />
        </button>
      </div>
    </div>
    <div class="w-full h-0.5 bg-pc-header-divider my-5"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Header extends Vue {
  headerTitle = "Something";
}
</script>
