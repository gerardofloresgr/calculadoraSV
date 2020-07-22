<template>
    <div>
        <v-container>
            <v-card color="#385F73" dark @click="$global.toNavigate($router, 'salario')">
                <v-card-title class="headline">Calculadora de salario</v-card-title>
                <v-card-subtitle>ISS + AFP + Renta</v-card-subtitle>
                <v-card-actions>
                <v-btn text>Calcular</v-btn>
                </v-card-actions>
            </v-card>
            <br>
            <v-card color="var(--blue)" dark @click="$global.toNavigate($router, 'muypronto')">
                <v-card-title class="headline">Calculo de la renta</v-card-title>
                <v-card-subtitle>Renta por servicios</v-card-subtitle>
                <v-card-actions>
                <v-btn text>Calcular</v-btn>
                </v-card-actions>
            </v-card>
            <br>
            <v-card color="var(--pink)" dark @click="$global.toNavigate($router, 'muypronto')">
                <v-card-title class="headline">Indemnización por despido</v-card-title>
                <v-card-subtitle>Calculo de liquidación</v-card-subtitle>
                <v-card-actions>
                <v-btn text>Calcular</v-btn>
                </v-card-actions>
            </v-card>
            <br>
            <v-card color="var(--yellow)" dark @click="$global.toNavigate($router, 'cesc')">
                <v-card-title class="headline">IVA + CESC</v-card-title>
                <v-card-subtitle>Impuesto a las telecomunicaciones</v-card-subtitle>
                <v-card-actions>
                <v-btn text>Calcular</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>