import Home from "./pages/Home";
import Details from "./pages/Details";
import SearchResultsPage from "./pages/SearchResultsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/search", element: <SearchResultsPage /> },
  { path: "/details/:id", element: <Details /> },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
