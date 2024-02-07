import { routes } from "../constants/rotes";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";

export const publicRoutes = [
  { path: routes.HOME, page: <Home /> },
  { path: routes.ABOUT, page: <About /> },
];

export const privetRoutes = [{ path: routes.CONTACT, page: <Contact /> }];
