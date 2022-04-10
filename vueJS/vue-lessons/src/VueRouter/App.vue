<script>
// 組件都首字母大寫
import Vue from "vue";
import VueRouter from "vue-router";

import About from "./About.vue";
import Products from "./Products.vue";

import AboutHome from "./AboutHome.vue";
import AboutYou from "./AboutYou.vue";
import AboutMe from "./AboutMe.vue";

Vue.use(VueRouter);
export default {
  router: new VueRouter({
    mode: "history", //hash by default
    routes: [
      //要在哪裡 render 哪個組件
      // 1. 設定固定路徑
      // http://localhost:8080/about/
      // http://localhost:8080/products/
      // 2. 顯示固定的組件
      // About
      // Products
      // { path: "/about", component: About },
      {
        path: "/about",
        component: About,
        children: [
          //子路徑，不需要加斜線
          { path: "", component: AboutHome },
          { path: "you", component: AboutYou }, //path:設定路徑名
          { path: "me", component: AboutMe },
        ],
      },

      // { path: "/products", component: Products },
      {
        // path: "/products/:sn", // 自訂名稱: sn, id, item, ...
        path: "/products/:sn?", // 加 ? 代表後面的路徑可有可無
        component: Products,
      },
    ],
  }),
};
</script>

<template>
  <div>
    <p>
      <!-- <a href=""></a> -->
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
    </p>
    <hr />
    <router-view></router-view>
    <!-- 秀出About.vue 和 Products 裡的東西 -->
  </div>
</template>

<style>
p {
  font: 20px Calibri;
}
</style>

