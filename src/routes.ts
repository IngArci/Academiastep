import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import About from "./pages/About";
import Teachers from "./pages/Teachers";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "programas", Component: Programs },
      { path: "nosotros", Component: About },
      { path: "profesores", Component: Teachers },
      { path: "testimonios", Component: Testimonials },
      { path: "contacto", Component: Contact },
    ],
  },
]);
