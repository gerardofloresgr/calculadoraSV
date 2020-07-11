<template>
    <div class="navbar">
        <img src="@/assets/img/logo.svg">
        <span>CalculadoraSV</span>
    </div>
</template>

<script>
export default {
    name: "NavBar"
}
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
}
.navbar img {
    width: 30px;
    margin-right: 20px;
}
</style>