import {
  RouterProvider,
  createBrowserRouter,
  redirect
} from "react-router-dom";
import { useContext } from "react";

import Welcome from "./pages/Welcome";
import Layout from "./components/Layout/Layout";
import Authentication from "./pages/Authentication";
import Learn, { loader as fetchAllUnitsData } from "./pages/Learn";
import Lesson, { loader as fetchLessonData } from "./pages/Lesson";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import Test from "./pages/Test";
import AuthContext from "./context/AuthContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const learnLoader = async () => {
    if (isLoggedIn) {
      return await fetchAllUnitsData();
    } else {
      return redirect("/login");
    }
  };

  const lessonLoader = async ({ params }) => {
    if (isLoggedIn) {
      return await fetchLessonData({ params });
    } else {
      return redirect("/login");
    }
  };

  const profileLoader = async () => {
    if (isLoggedIn) {
       return null;
    } else {
      return redirect("/login");
    }
  };

  const authLoader = async () => {
    if (!isLoggedIn) {
      return null;
    } else {
      return redirect("/learn");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Welcome /> },
        { path: "login", element: <Authentication />, loader: authLoader  },
        { path: "createAccount", element: <Authentication />, loader: authLoader },
        {
          path: "learn",
          children: [
            { index: true, element: <Learn />, loader: learnLoader },
            {
              path: ":unitId/:lessonId",
              element: <Lesson />,
              loader: lessonLoader
            },
          ],
        },
        { path: "learn/:unitId/test", element: <Test /> },
        { path: "profile", element: <Profile />, loader: profileLoader },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;