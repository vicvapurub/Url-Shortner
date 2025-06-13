import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import FeaturePage from "../pages/FeaturePage"; // adjust path if needed

export const featureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/features",
  component: FeaturePage,
});
