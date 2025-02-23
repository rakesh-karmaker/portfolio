import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import App from "./App.jsx";
import "./global.css";

// import pages
import Home from "./pages/home/Home";

// import layouts
import UserLayout from "./layouts/UserLayout";

// import contexts
import { RenderProvider } from "./contexts/RenderContext.jsx";

// create a router to navigate through the website
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <RenderProvider>
            <UserLayout />
          </RenderProvider>
        ),
        children: [
          { path: "/", element: <Home section="home" /> },
          { path: "/services", element: <Home section="services" /> },
          { path: "/projects", element: <Home section="projects" /> },
          { path: "/about", element: <Home section="about" /> },
          { path: "/faqs", element: <Home section="faqs" /> },
          { path: "/contact", element: <Home section="contact" /> },
          // ...add more routes if want
        ],
      },
    ],
  },
]);

// render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
