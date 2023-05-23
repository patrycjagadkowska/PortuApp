import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useContext } from "react";

import Welcome from "./pages/Welcome";
import Layout from "./components/Layout/Layout";
import Authentication from "./pages/Authentication";
import AuthContext from "./context/AuthContext";
import Learn from "./pages/Learn";
import Lesson from "./pages/Lesson";
import Profile from "./pages/Profile";

const App = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        {!isLoggedIn && <Route path="/login" element={<Authentication />} />}
        {!isLoggedIn && (
          <Route path="/createAccount" element={<Authentication />} />
        )}
        {isLoggedIn && <Route path="/learn" element={<Learn />} />}
        {isLoggedIn && (
          <Route path="/learn/:unitId/:lessonId" element={<Lesson />} />
        )}
        {isLoggedIn && <Route path="/profile" element={<Profile />} />}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
