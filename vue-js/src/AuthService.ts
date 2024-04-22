export class AuthService {
  async login(email: string, password: string) {
    return fetch("https://backend-login-placeholder.deno.dev/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
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
    })
  }
}