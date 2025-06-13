import { createRootRoute } from "@tanstack/react-router";
import App from "../RootLayout";
import { homepageRoute } from "./homepage";
import { authRoute } from "./auth.route";
import { dashboardRoute } from "./dashboard";
import RootLayout from "../RootLayout";
import { contactRoute } from "./contact";
import { featureRoute } from "./feature";
import { aboutRoute } from "./about";


export const rootRoute = createRootRoute({
  component: RootLayout,
});

export const routeTree = rootRoute.addChildren([
  homepageRoute,
  authRoute,
  dashboardRoute,
  contactRoute,
  featureRoute,
  aboutRoute
]);


