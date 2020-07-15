<template>
  <div>
    <div class="navbar">
      <template v-if="route == 'Home'">
        <img src="@/assets/img/logo.svg" />
      </template>
      <template v-else>
        <v-icon dark @click="$global.toNavigate($router, '')" class="mr-10">keyboard_backspace</v-icon>
      </template>
      <span>CalculadoraSV</span>
    </div>
    <div class="separator"></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    route() {
      return this.$route.name;
    }
  }
};
</script>

<style scoped>
.navbar {
  background: var(--primary);
  color: white;
  font-size: larger;
  padding: 20px;
  display: flex;
  align-items: center;
  font-weight: 600;
  position: fixed;
  width: 100%;
  z-index: 100000;
}
.navbar img {
  width: 30px;
  margin-right: 20px;
}
.separator {
  height: 70px;
}
</style>