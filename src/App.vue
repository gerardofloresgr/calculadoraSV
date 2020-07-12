<template>
    <div>
      <NavBar></NavBar>
      <vue-page-transition name="fade-in-right">
        <router-view></router-view>
      </vue-page-transition>
    </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  }
}
</script>