import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import AboutUs from "../pages/AboutUs";

// adjust path if needed
export const aboutRoute = createRoute({
  path: "/about",
  getParentRoute: () => rootRoute,
  component: AboutUs,
});