import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import { FirstWordsPage, HangulPage, LessonsPage } from "./pages";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "lessons",
        element: <LessonsPage />,
        children: [
          {
            path: "hangul",
            element: <HangulPage />,
          },
          {
            path: "first-words",
            element: <FirstWordsPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
