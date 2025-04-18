import 'bootstrap/dist/css/bootstrap.min.css'
import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import Team from "../pages/Team.vue";
import Players from "../pages/Players.vue";
import PlayerDetails from "../pages/PlayerDetails.vue";
import CoachesPortal from "../pages/CoachesPortal.vue";
import ParentsPortal from "../pages/ParentsPortal.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/team", component: Team },
  { path: "/players", component: Players },
  { path: "/players/:id", component: PlayerDetails, props: true },
  { path: "/coaches", component: CoachesPortal },
  { path: "/parents", component: ParentsPortal },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
