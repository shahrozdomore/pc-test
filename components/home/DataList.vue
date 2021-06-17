<template>
  <div class=" px-4 w-full">
    <div class="flex flex-wrap" v-for="item in dataList" :key="item.id">
      <DataCard :data="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { Data } from "~/utils/Data";

@Component({})
export default class DataList extends Vue {
  // Props
  @Prop({ required: true }) dataList!: Data[];
}
</script>
