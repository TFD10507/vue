<template>
    <div>
        <h1>About</h1>

        <router-link to="/about/you">About You</router-link>
        <router-link to="/about/me">About Me</router-link>

        <router-view></router-view>
    </div>
</template>
<style scoped>
    h1{
        font: 40px Calibri;
        color: maroon;
    }
</style>