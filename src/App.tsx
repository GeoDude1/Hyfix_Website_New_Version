import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HyfixMainPage } from "./screens/HyfixMainPage";
import { HyfixMainPageScreen } from "./screens/HyfixMainPageScreen";
import { HyfixMainPageWrapper } from "./screens/HyfixMainPageWrapper/HyfixMainPageWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HyfixMainPageScreen />,
  },
  {
    path: "/home",
    element: <HyfixMainPageScreen />,
  },
  {
    path: "/applications",
    element: <HyfixMainPage />,
  },
  {
    path: "/about",
    element: <HyfixMainPageWrapper />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
