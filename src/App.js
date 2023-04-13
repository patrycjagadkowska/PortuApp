import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Layout from "./components/Layout/Layout";
import Authentication from "./pages/Authentication";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Welcome />} />
      <Route path="/login" element={<Authentication />} />
      <Route path="/createAccount" element={<Authentication />} />
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
