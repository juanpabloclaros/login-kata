import {interfaces} from "inversify"
import {LoginUseCase} from "./use-cases/LoginUseCase"
import {AuthServiceApi} from "./Infrastructure/AuthServiceApi"
import {RouterVueRouter} from "./Infrastructure/RouterVueRouter"
import {TokenRepositoryLocalStorage} from "./Infrastructure/UserJwtRepository"
import { Router } from "vue-router"

function create(container: interfaces.Container,router: Router) {
  container.bind("AuthService").toDynamicValue(() => new AuthServiceApi())
  container.bind("RouterService").toDynamicValue(() => new RouterVueRouter(router))
  container.bind("TokenRepository").toDynamicValue(() => new TokenRepositoryLocalStorage())
  container.bind("LoginUseCase").toDynamicValue(({container}: interfaces.Context) => {
    return new LoginUseCase(container.get("AuthService"),container.get("RouterService"),container.get("TokenRepository"))
  })
}

export {create}