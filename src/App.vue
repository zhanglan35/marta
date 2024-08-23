<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div
    id="app"
    class="
      z-0 h-screen
      flex justify-center items-center
      bg-background
      border-border-color
      text-dark-900
      fill-dark-900
    "
  >
    <router-view></router-view>
  </div>
</template>
