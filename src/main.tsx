import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import { FirstWordsPage, HangulPage, LessonsPage } from "./pages";
import "./style.css";
import { ConfigProvider } from "antd";

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
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          // colorPrimary: "#00b96b",
          // colorFillContent: "red",
          // Alias Token
          // colorBgContainer: "#f6ffed",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>
);
