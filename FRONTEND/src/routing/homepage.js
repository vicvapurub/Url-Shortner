import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import HomePage from "../pages/HomePage";

export const homepageRoute = createRoute({
  getParentRoute: () => rootRoute,  
  path: '/',
  component: HomePage ,
})