<template>
  <div class="main-categorizacion">
    <div class="tabla">
      <v-simple-table class="elevation-12" fixed-header height="70vh">
        <template v-slot:default>
          <thead  class="tabla__th">
            <tr>
              <th class="tabla__th text-left">Variable</th>
              <th class="tabla__th text-left">Porcentaje</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td v-if="item[0]!= ''">{{ item[0] }}</td>
              <td v-if="item[0]!= ''">{{ toPercent(item[1]) }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
      data: [],
    };
  },
  methods: {
    getData(){
      this.axios({
        method: "get",
        url: `http://192.168.5.121:8080/data/kappa/`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          this.data = Object.entries(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    toPercent(point){
      point = point.toFixed(5);
			let percent = Number(point*100).toFixed(2);
			percent+="%";
			return percent;
		}
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.main-categorizacion {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.tabla{
  width: 50%;
}
.tabla__th, th{
  background-color: var(--white-bg1) !important;
  font-size: 20px !important;
  /* background-color: brown !important; */
}
</style>