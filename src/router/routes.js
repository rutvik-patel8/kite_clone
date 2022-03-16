import { createRouter, createWebHistory } from "vue-router";
const register = () => import("../components/RegisterComponent.vue");
const login = () => import("../components/LoginComponent.vue");
const NotFound = () => import("../components/NotFound.vue");
const Dashboard = () => import("../components/Dashboard.vue");
const orders = () => import("../components/Orders.vue");
const positions = () => import("../components/Positions.vue");
const funds = () => import("../components/Funds.vue");
const holdings = () => import("../components/Holdings.vue");
const applist = () => import("../components/AppList.vue");
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: login },
    { path: "/register", component: register },
    {
      path: "/dashboard",
      component: Dashboard,
        children: [
          {
            path: "orders",
            components:{
              main:orders
            } 
          },
          {
            path: "positions",
            components: {
              main: positions,
            },
          },
          {
            path: "funds",
            components: {
              main: funds,
            },
          },
          {
            path: "holdings",
            components: {
              main: holdings,
            },
          },
          {
            path: "apps",
            components: {
              main: applist,
            },
          }
        ],
      },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

//   router.beforeEach(function(to, _, next) {
//     if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//       next('');
//     } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
//       next('');
//     } else {
//       next();
//     }
//   });

export default router;
