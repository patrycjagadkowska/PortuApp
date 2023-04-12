import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<Welcome />} />
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
