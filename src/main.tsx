import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import {
  Words_1_2_Page,
  // Words_3_4_Page,
  HangulPage,
  LessonsPage,
  MainPage,
  PresentTensePage,
} from "./pages";
import "./style.css";
import { ConfigProvider } from "antd";
import { Words_3_4_Page } from "./pages/lessons/words-3-4.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "lessons",
        element: <LessonsPage />,
        children: [
          {
            path: "hangul",
            element: <HangulPage />,
          },
          {
            path: "words-1-2",
            element: <Words_1_2_Page />,
          },
          {
            path: "words-3-4",
            element: <Words_3_4_Page />,
          },
          {
            path: "present-tense",
            element: <PresentTensePage />,
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
