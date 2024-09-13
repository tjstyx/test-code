import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/remote/*",
      component: () => import("@/remote.vue")
    },
  ]
});

export default router;
