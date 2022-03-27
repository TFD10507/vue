<template>
  <div>
    <h1>Products</h1>
    <!-- <h2>{{ $route.params.sn }}</h2> -->

    <!-- 要用computed 來處理 -->
    <h2>{{sn}}</h2>
  </div>
</template>

<script>
const items = {
  10: "hat",
  20: "t-shirt",
  30: "iPad",
  40: "iPhone",
  50: "Mac Pro",
  60: "Air Pods",
};

export default {
    computed: {
        sn(){
            return items[this.$route.params.sn]; //處理http://localhost:8080/products/20
            // return items[this.$route.query.sn]; //處理http://localhost:8080/products?sn=20
        },
    },
};
</script>

<!-- 如果要在vue裡各管各的，style 要選擇 scoped ，才不會互相影響-->
<style scoped>
h1 {
  font: 40px Calibri;
  color: green;
}
</style>