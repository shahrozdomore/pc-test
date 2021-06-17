<template>
  <div>
    <Banner />
    <Filters />
    <Status :total="total" />
    <DataList :dataList="myDataList" />
    <div class="w-full flex justify-center mt-5">
      <button
        class="bg-pc-navy-blue px-8 py-3 text-sm font-semibold focus:outline-none text-white rounded-20px"
        @click="fetchMore()"
      >
        Show More Results
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import axios from "axios";
import { Data } from "~/utils/Data";

@Component
export default class Home extends Vue {
  myDataList: Data[] = [];
  total: number = 100;
  currentPage: number = 1;
  perPage: number = 20;

  created() {
    console.log("Hello from created");
  }

  fetchMore() {
    console.log("Fetch more");
    this.currentPage++;
    this.fetchData();
  }

  async mounted() {
    this.fetchData();
  }

  async fetchData() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1500);
    });

    try {
      let url = `https://staging.pole-connect.com/api/poleconnect/classes/${this.perPage},${this.currentPage}`;
      console.log(url);

      let res = await axios.get(url);
      if (res.status == 200) {
        this.total = res.data.meta.total;
        let list: Data[] = [];
        let results = res.data.results;
        // console.log(results);
        results.forEach((item: any) => {
          let myData: Data = {
            id: item.objectID,
            virtual: item.is_virtual,
            title: item.name,
            instructor: item.instructor,
            studio: item.studio.name,
            location: item.studio.address.address1,
            date: item.times.start.timestamp,
            price: item.price
          };
          this.myDataList.push(myData);
        });
        this.$nextTick(() => {
          this.$nuxt.$loading.finish();
        });
      }
    } catch (err) {
      console.log("Data fetching error : ", err);
      this.$nextTick(() => {
        this.$nuxt.$loading.finish();
      });
      return;
    }
  }
}
</script>
