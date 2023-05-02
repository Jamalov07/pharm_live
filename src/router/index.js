import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Comments from "../views/Comments.vue";
import Contacts from "../views/Contacts.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/comments",
      name: "comments",
      component: Comments,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});

export default router;
