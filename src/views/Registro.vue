<template>
  <div class="main-registro">
    <form action="" class="form__login elevation-12">
      <div class="form__header">
        <h1 class="form__title">Registrarse</h1>
      </div>
      <v-text-field
        label="Correo"
        hint="Ingrese su correo"
        persistent-hint
        v-model="correo"
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
      <v-text-field
        label="Confirmar contraseña"
        hint="Vuelva a ingresar su contraseña"
        v-model="confirm_password"
        :append-icon="ver_cpass ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min, rules.passMatch]"
        :type="ver_cpass ? 'text' : 'password'"
        @click:append="ver_cpass = !ver_cpass"
        persistent-hint
        filled
      ></v-text-field>
      <div class="btn__container">
        <v-btn class="general__btn" elevation="2">Registrarse</v-btn>
        <v-btn class="general__btn" elevation="2">Cancelar</v-btn>
      </div>
      <!-- <div class="enlazado">
        <span @click="registrate()" class="enlace"> Registrate </span>
      </div> -->
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ver_pass: false,
      ver_cpass: false,
      correo: "",
      password: "",
      confirm_password: "",
      rules: {
        required: (value) => !!value || "Requerido.",
        min: (password) => password.length >= 8 || "Minimo 8 caracteres",
        passMatch: () =>
          this.password == this.confirm_password || "Las contraseñas no coinciden",
        // emailMatch: () => `El correo electrónico y la contraseña que ingresó no coinciden`,
      },
    };
  },
};
</script>

<style scoped>
.main-registro {
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
.btn__container {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.general__btn {
  margin: 0 10px;
}
</style>