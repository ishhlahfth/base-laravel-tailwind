<template>
  <div class="text-center mt-10 text-2xl text-blue-600">
    Ini Halaman About
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAuthenticationStore } from '../stores/authentication';

const authStore = useAuthenticationStore();

const token = computed(() => {
    return authStore.stateToken;
})
</script>

<style scoped>
/* Optional style */
</style>
