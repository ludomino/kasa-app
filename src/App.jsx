import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/not_found";
import About from "./pages/about";
import Home from "./pages/home";
import Root from "./layout/root";
import Housing from "./pages/housing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "housing/:id",
        element: <Housing />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
