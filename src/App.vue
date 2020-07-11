<template>
    <div>
      <NavBar></NavBar>
      <router-view></router-view>
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