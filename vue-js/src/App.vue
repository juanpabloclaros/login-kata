<template>
  <router-view :router="router" :login="login"/>
</template>

<script setup>
  const router = useRouter();
  const login = (email,password) => {fetch("https://backend-login-placeholder.deno.dev/api/users/login", {
    method: "POST",
    body: JSON.stringify({ email: email.value, password: password.value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "error") {
        throw new Error(data.code);
      }
      return data.payload;
    })}
</script>
