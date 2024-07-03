import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import Products from "@pages/Products";
import About from "@pages/About";
import Login from "@pages/Login";
import Register from "@pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories", element: <Categories /> },
      { path: "products/:prefix", element: <Products /> },
      { path: "about-us", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
