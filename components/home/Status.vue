<template>
  <div class="bg-pc-sky-blue p-4 w-full flex">
    <div class="w-1/2">
      <p class="text-pc-navy-blue text-sm">{{ total }} classes found</p>
    </div>
    <div class="w-1/2 flex items-center justify-end">
      <span class="w-3 h-3 rounded-full bg-pc-teal mr-2"></span>
      <p class="text-sm mr-4">In-person</p>

      <span class="w-3 h-3 rounded-full bg-pc-navy-blue mr-2"></span>
      <p class="text-sm">Virtual</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class Status extends Vue {
  @Prop({ default: 0 }) total!: number;
}
</script>
