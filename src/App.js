import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import ToDoList from "./components/ToDoList";
import Layout from "./components/Layout";
import ExpenseTracker from "./components/ExpenseTracker";
import CookingSchedule from "./components/CookingSchedule";
import DailyTracker from "./components/DailyTracker";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/todo", element: <ToDoList /> },
  { path: "/expense", element: <ExpenseTracker /> },
  { path: "/cooking", element: <CookingSchedule /> },
  { path: "/dailytracker", element: <DailyTracker /> },
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: routes,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
