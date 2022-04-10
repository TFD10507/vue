<template>
    <li>{{xyz}}</li>
</template>

<script>
export default {
    props: ['xyz'],
}
</script>

<style>
ol li{
    background: #abc;
    padding: 5px;
    margin: 5px;
}
ol li:hover{
    background: #cba;
    cursor: pointer;
}
</style>