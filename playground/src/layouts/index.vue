<template>
  <div class="pages">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component v-if="route.meta.keepAlive" :key="route.path" :is="Component"></component>
      </keep-alive>
      <component v-if="!route.meta.keepAlive" :key="route.path" :is="Component"></component>
    </router-view>
    <!--    Vue2 Vue-router3.x 使用如下代码-->
    <!--    <keep-alive>-->
    <!--      <router-view v-if="$route.meta.keepAlive" />-->
    <!--    </keep-alive>-->
    <!--    <router-view v-if="!$route.meta.keepAlive" />-->
  </div>
</template>
<script setup></script>
