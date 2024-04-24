import { RouterService } from "../Domain/RouterService";
import { Router } from "vue-router";

export class RouterVueRouter implements RouterService{
  private router: Router

  constructor(router: Router){
    this.router = router
  }

  goToRecipies() {
    this.router.push("/recipes");
  }
}