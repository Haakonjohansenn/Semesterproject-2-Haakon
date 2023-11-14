import { Router, Route, RootRoute } from "@tanstack/react-router";
import LoginPage from "./pages/Login";
import ProductPage from ""
import ProfilePage from "./pages/Profile";
import Root from "./App";

const rootRoute = new RootRoute({
  component: Root,
});

// NOTE: @see https://tanstack.com/router/v1/docs/guide/routes

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LoginPage,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/profiles/$profileId",
  component: ProfilesPage,
});

const productRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/products/",
  component: ProductPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  productRoute,
  profileRoute,
]);

export const router = new Router({ routeTree });

export default router;
