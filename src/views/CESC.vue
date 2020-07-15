<template>
  <div>
    <v-container>
      <v-text-field
        label=" Ingresa el monto de la compra"
        v-model="precio"
        type="number"
        prefix="$"
      ></v-text-field>
      <br />
      <div>
        <b>IVA (13%):</b>
        ${{ iva }}
      </div>
      <br />
      <div>
        <b>CECS (5%):</b>
        ${{ cecs }}
      </div>
      <br/>
      <div>
        <b>Total + IVA + CECS:</b>
        ${{ total }}
      </div>
      <br />
      <br />
      <div class="total">
        <span class="title">Calculo de impuestos:</span>
        <div class="flex w-percent-100">
          <div class="w-percent-50 flex flex-column aling-center">
            <span>Sin impuestos</span>
            <p>$<template v-if="precio != ''">{{precio}}</template><template v-else>0</template></p>
          </div>
          <div class="w-percent-50 flex flex-column aling-center">
            <span>Con impuestos</span>
            <p>${{total}}</p>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "CESC",
  data() {
    return {
      precio: ""
    };
  },
  computed: {
    iva() {
      return this.precio * 0.13;
    },
    cecs() {
      return this.precio * 0.05;
    },
    total() {
        let tmp;
        if (this.precio != "") {
            tmp = parseFloat(this.precio) + parseFloat(this.iva) + parseFloat(this.cecs);
        } else {
            tmp = 0;
        }
        return tmp;
    }
  }
};
</script>