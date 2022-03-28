<template>
  <div class="main-login">
    <form action="" class="form__login elevation-12">
      <div class="form__header">
        <h1 class="form__title">Iniciar Sesión</h1>
      </div>
      <v-text-field
        :rules="[rules.required]"
        label="Correo"
        hint="Ingrese su correo"
        persistent-hint
        filled
      ></v-text-field>
      <v-text-field
        label="Contraseña"
        hint="Ingrese su contraseña"
        v-model="password"
        :append-icon="ver_pass ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="ver_pass ? 'text' : 'password'"
        @click:append="ver_pass = !ver_pass"
        persistent-hint
        filled
      ></v-text-field>
      <div class="btn__container">
        <v-btn class="general__btn" elevation="2">Ingresar</v-btn>
        <v-btn class="general__btn" elevation="2">Cancelar</v-btn>
      </div>
      <div class="enlazado">
        <span @click="registrate()" class="enlace">
          Registrate
        </span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ver_pass: false,
      password: "",
      rules: {
        required: (value) => !!value || "Requerido.",
        min: (password) => password.length >= 8 || "Minimo 8 caracteres",
        // emailMatch: () => `El correo electrónico y la contraseña que ingresó no coinciden`,
      },
    };
  },
  methods: {
    registrate(){
      this.$router.push('registro');
    }
  },
};
</script>

<style scoped>
.main-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.form__login {
  width: 50%;
  background-color: var(--white-bg3);
  padding: 15px;
}
.btn__container{
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.general__btn{
  margin: 0 10px;
}
/* .enlazado{

} */
.enlace{
  text-decoration: underline;
  cursor: pointer;
}
.enlace:hover{
  color: var(--btrap-primary);
}
</style>