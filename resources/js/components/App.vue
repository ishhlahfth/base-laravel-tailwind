<template>
  <ThemeProvider>
    <SidebarProvider>
      <router-view />
    </SidebarProvider>
  </ThemeProvider>
</template>

<script setup>
import AdminLayout from "./layout/AdminLayout.vue";
import SidebarProvider from "./layout/SidebarProvider.vue";
import ThemeProvider from "./layout/ThemeProvider.vue";
</script>

<style scoped>
/* Optional style */
</style>
