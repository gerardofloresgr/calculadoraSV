<template>
  <div>
    <v-container>
      <v-text-field label=" Ingresa tu salario" v-model="salario" type="number" prefix="$"></v-text-field>
      <br />
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field label="Años trabajados" v-model="anios" type="number"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field label="Meses trabajados" v-model="meses" type="number"></v-text-field>
        </v-col>
      </v-row>
      <br />
      <br />
      <div class="total">
        <span class="title">Total a indemnizarte: ${{total}}</span>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Despido",
  data() {
    return {
      salario: "",
      anios: "",
      meses: ""
    };
  },
  computed: {
    total() {
      let tmp;
      tmp = this.salario * this.anios;
      tmp += (this.meses * 30 * this.salario) / 365;
      if (tmp < this.salario / 2) {
        tmp = this.salario / 2;
      }
      return this.$global.round(tmp);
    }
  }
};
</script>