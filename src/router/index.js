import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GamesView from "../views/GamesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/games",
    name: "games",
    component: GamesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
