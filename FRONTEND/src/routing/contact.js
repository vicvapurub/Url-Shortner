import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
})