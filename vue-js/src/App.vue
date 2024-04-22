<template>
  <router-view :router="router" :authService="authService"/>
</template>

<script setup>
  import {Login} from "./LoginService.ts"
  import { useRouter } from "vue-router";

  const authService = new AuthService()
  const router = useRouter();
</script>
