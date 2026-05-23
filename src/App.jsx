import Home from "./pages/Home";
import Details from "./pages/Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/details/:id", element: <Details /> },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
