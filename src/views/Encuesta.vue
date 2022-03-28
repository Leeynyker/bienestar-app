<template>
  <div class="main-encuesta">
    <form v-on:submit.prevent="sendData()" class="form__login elevation-12">
      <div class="form__header">
        <h1 class="form__title">{{ question }}</h1>
      </div>
      <br />
      <div v-for="(item, index) in dat" :key="index" class="form__row">
        <h3 class="variable">{{ item }}</h3>
        <div class="puntaje">
          <v-select
            :items="items"
            v-model="scores[index]"
            filled
            label="Puntaje"
          ></v-select>
        </div>
        <div class="plan__textarea">
          <v-textarea
            filled
            label="Descripción"
            rows="1"
            auto-grow
            :hide-details="true"
            v-model="descripcion[index]"
          ></v-textarea>
        </div>
      </div>
      <div class="btn__container">
        <v-btn class="general__btn" @click="sendData()" elevation="2"
          >Enviar</v-btn
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        variables: ["Salud mental", "Espacios alimentarios", "Deportes"],
      },
      scores: [],
      dat: "",
      descripcion: [],
      question: "",
      items: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    };
  },
  methods: {
    getData() {
      this.axios({
        method: "get",
        url: `http://10.20.192.21:8080/data/data/`,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((response) => {
          this.dat = response.data.vars;
          this.question = response.data.question;
          console.log(this.dat);
          for (const item of this.dat) {
            // if (item != "") {
            console.log(item);
            this.scores.push("0");
            this.descripcion.push("");
            // }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    sendData() {
      let datasend = new FormData();
      // for (const item of dat) {
      //   if (item != "") {

      //   }
      // }
      for (let index = 0; index < this.dat.length; index++) {
        if (this.dat[index] != "") {
          datasend.set("variable", this.dat[index]);
          datasend.set("user", "prueba");
          datasend.set("description", this.descripcion[index]);
          datasend.set("numero", this.scores[index]);

          this.axios({
            method: "post",
            data: datasend,
            url: `http://10.20.192.21:8080/data/data/`,
            headers: {
              "Content-Type": "multipart/form-data",
              
            },
          })
            .then((response) => {
              const validateRespons = (resp) => {
                // alert("Datos enviados");
              };
              this.analyzeRequest(validateRespons, response);
            })
            .catch((error) => {
              // alert("ERROR");
            });
        }
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.main-encuesta {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form__login {
  width: 80%;
  height: 80vh;
  overflow-y: auto;
  padding: 15px;
  background-color: var(--white-bg3);
  padding: 15px;
}
.btn__container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.general__btn {
  margin: 0 10px;
}
.form__row {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.variable {
  margin: 0 15px;
  width: 30%;
}
.puntaje {
  width: max-content;
  width: 100px;
  width: 10%;
  margin: 0 15px;
}
.plan__textarea {
  margin: 0 15px;
  width: 400px;
  width: 60%;
  /* height: 20px; */
}
.form__title {
  text-align: center;
}
</style>