<template>
  <main class="login-container">
    <form class="login-form" @submit.prevent="onSubmit">
      <Title>Login with email</Title>
      <p>Enter your email address to create an account.</p>

      <EmailField id="email" label-text="Your email" v-model="email" />
      <PasswordField
        id="password"
        label-text="Your password"
        v-model="password"
      />
      <p v-if="errorMessage">{{ translateError(errorMessage) }}</p>
      <Button title="Login" :disabled="isLoading" />
    </form>
  </main>
</template>

<script setup>
import { inject, ref } from "vue";
import Title from "../components/Title.vue";
import EmailField from "../components/EmailField.vue";
import PasswordField from "../components/PasswordField.vue";
import Button from "../components/Button.vue";
import { translateError } from "../utils/translateError.js";
import { LoginUseCase } from "../use-cases/LoginUseCase"

const email = ref("");
const password = ref("");
const errorMessage = ref("");
const isLoading = ref(false);

// const props = defineProps({
//   loginUseCase: LoginUseCase,
// })

const container = inject("container")

function onSubmit() {
  isLoading.value = true;
  errorMessage.value = "";

  container.get("LoginUseCase")
  .execute(email.value, password.value)
  .catch((error) => {
    errorMessage.value = error.message;
  })
  .finally(() => {
    isLoading.value = false;
  });
  
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  margin-top: 64px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px;
  border-radius: 8px;
}

@media (min-width: 801px) {
  .login-form {
    box-shadow: rgb(0 0 0 / 15%) 0 2px 10px;
    padding: 64px;
  }
}
</style>
