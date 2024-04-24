import { AuthService } from "../Domain/AuthService";
import { RouterService } from "../Domain/RouterService";
import { TokenRepository } from "../Domain/TokenRepository";

export class LoginUseCase {
  constructor(private authService: AuthService, private routerService: RouterService, private tokenRepository: TokenRepository){}

  async execute(email: string, password: string): Promise<void> {
    const token = await this.authService.login(email, password)
    this.tokenRepository.save(token)
    this.routerService.goToRecipies()
  }
}