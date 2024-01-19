<script setup lang="ts">
import { useRecaptchaProvider } from 'vue-recaptcha'
useRecaptchaProvider()
</script>

<template>
  <div>
    <router-view />
  </div>
</template>