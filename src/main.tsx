// src/main.tsx (or your main routing file)
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css"; // Your main CSS file

// Import your page components
import Home from "./pages/Home.tsx"; // Assuming you have a Home component
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Services from "./pages/Services.tsx";
import Csr from "./pages/CSR.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx"; // <--- Import NotFound component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This makes Home the default child route for '/'
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "csr",
        element: <Csr />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // Keep this route if you still plan to use it for Experience,
      // otherwise, you might remove it if the navbar link is gone.
      // {
      //   path: 'experience',
      //   element: <Experience />,
      // },
      {
        path: "*", // This is the catch-all route for any undefined paths
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
