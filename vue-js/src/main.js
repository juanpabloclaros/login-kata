import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./reset.css";
import "./main.css";
import App from "./App.vue";
import SignUp from "./pages/Login.vue";
import Recipes from "./pages/Recipes.vue";
import {Container} from "inversify"
import {create} from "./ContainerContext"

const routes = [
  {
    path: "/",
    component: SignUp,
  },
  { path: "/recipes", component: Recipes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

  const container = new Container()
  
  create(container,router)

createApp(App).provide("container",container).use(router).mount("#app");
