<template>
  <div>
    <v-container>
      <v-text-field label=" Ingresa tu salario" v-model="salario" type="number" prefix="$"></v-text-field>
      <br />
      <div>
        <b>AFP:</b>
        ${{ afp }}
      </div>
      <br />
      <div>
        <b>ISSS:</b>
        ${{ isss }}
      </div>
      <br />
      <div>
        <b>Salario - ISSS - AFP :</b>
        ${{ salariodescuento }}
      </div>
      <br />
      <div>
        <b>Renta (Cuota fija):</b>
        <template v-if="renta == 0">No paga renta</template>
        <template v-else>${{ renta }}</template>
      </div>
      <br />
      <br />
      <div class="total">
        <span class="title">Salario devengado:</span>
        <div class="flex w-percent-100">
          <div class="w-percent-50 flex flex-column aling-center">
            <span>Quinsenal</span>
            <p>${{quincenal}}</p>
          </div>
          <div class="w-percent-50 flex flex-column aling-center">
            <span>Mensual</span>
            <p>${{mensual}}</p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Salario",
  data() {
    return {
      salario: "",
      CF1: 17.67,
      CF2: 60.0,
      CF3: 288.57,
      EXC1: 472.01,
      EXC2: 895.25,
      EXC3: 2038.11,
      afp: 0,
      isss: 0,
      quincenal: 0,
      mensual: 0
    };
  },
  computed: {
    salariodescuento() {
      return this.$global.round(this.salario - this.isss - this.afp);
    },
    renta() {
      let tmp;
      if (this.salariodescuento < this.EXC1) {
        tmp = 0;
      } else if (
        this.salariodescuento >= this.EXC1 &&
        this.salariodescuento < this.salariodescuento < this.EXC2
      ) {
        tmp = (this.salariodescuento - this.EXC1) * 0.1 + this.CF1;
      } else if (
        this.salariodescuento >= this.EXC2 &&
        this.salariodescuento < this.EXC3
      ) {
        tmp = (this.salariodescuento - this.EXC2) * 0.2 + this.CF2;
      } else if (this.salariodescuento >= this.EXC3) {
        tmp = (this.salariodescuento - this.EXC3) * 0.3 + this.CF3;
      } else {
        tmp = 0;
      }
      return this.$global.round(tmp);
    }
  },
  watch: {
    salario() {
      //Calcular AFP
      let tmpAfp;
      if (this.salariodescuento >= 6377.15) {
        tmpAfp = 398.57;
      } else {
        tmpAfp = this.salario * 0.0725;
      }
      this.afp = this.$global.round(tmpAfp);
      //Calcular ISSS
      let tmpIsss;
      if (this.salariodescuento + this.afp >= 1000) {
        tmpIsss = 30;
      } else {
        tmpIsss = this.salario * 0.03;
      }
      this.isss = this.$global.round(tmpIsss);

      //Calcular total a pagar
      this.mensual = this.$global.round(
        this.salario - this.isss - this.afp - this.renta
      );
      this.quincenal = this.$global.round(this.mensual / 2);
    }
  }
};
</script>