import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Guide from "@/components/.components/Guide.vue";
// const routes = [{ path: "/", component: Guide }];
const routes = [
  { path: "/", redirect: "/fe/changelog" },
  { path: "/fe/:name", component: Guide },
];

const router = new VueRouter({
  routes,
});

export default router;
