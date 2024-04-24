import { TokenRepository } from "../Domain/TokenRepository";

export class TokenRepositoryLocalStorage implements TokenRepository{
  save(token: string) {
    localStorage.setItem("token", token);
  }
}