<template>
  <router-view :loginUseCase="loginUseCase"/>
</template>

<script setup>
  import {LoginUseCase} from "./use-cases/LoginUseCase"
  import {useRouter} from "vue-router"
  import {AuthServiceApi} from "./Infrastructure/AuthServiceApi"
  import {RouterVueRouter} from "./Infrastructure/RouterVueRouter"
  import {TokenRepositoryLocalStorage} from "./Infrastructure/UserJwtRepository"
  

  const customRouter = useRouter()
  const authService = new AuthServiceApi()
  const routerService = new RouterVueRouter(customRouter)
  const tokenRepository = new TokenRepositoryLocalStorage()
  const loginUseCase = new LoginUseCase(authService,routerService,tokenRepository)
</script>
