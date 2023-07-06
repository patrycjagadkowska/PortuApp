import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { useContext, lazy, Suspense } from "react";

import Welcome from "./pages/Welcome";
import Layout from "./components/Layout/Layout";
import AuthContext from "./context/AuthContext";

const Learn = lazy(() => import("./pages/Learn"));
const Lesson = lazy(() => import("./pages/Lesson"));
const Authentication = lazy(() => import("./pages/Authentication"));
const Profile = lazy(() => import("./pages/Profile"));
const Test = lazy(() => import("./pages/Test"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const LoadingSpinner = lazy(() => import("./components/UI/LoadingSpinner"));

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const learnLoader = () => {
    if (isLoggedIn) {
      return import("./pages/Learn").then((module) => module.loader());
    } else {
      return redirect("/login");
    }
  };

  const lessonLoader = ({ params }) => {
    if (isLoggedIn) {
      return import("./pages/Lesson").then((module) =>
        module.loader({ params })
      );
    } else {
      return redirect("/login");
    }
  };

  const profileLoader = () => {
    if (isLoggedIn) {
      return import("./pages/Learn").then((module) => module.loader());
    } else {
      return Promise.resolve(null);
    }
  };

  const authLoader = () => {
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
        {
          path: "login",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Authentication />
            </Suspense>
          ),
          loader: authLoader,
        },
        {
          path: "createAccount",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Authentication />
            </Suspense>
          ),
          loader: authLoader,
        },
        {
          path: "learn",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback={<LoadingSpinner />}>
                  <Learn />
                </Suspense>
              ),
              loader: learnLoader,
            },
            {
              path: ":unitId/:lessonId",
              element: (
                <Suspense fallback={<LoadingSpinner />}>
                  <Lesson />
                </Suspense>
              ),
              loader: lessonLoader,
            },
          ],
        },
        {
          path: "learn/:unitId/test",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Test />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: (
            <Suspense fallback={<LoadingSpinner />}>
              <Profile />
            </Suspense>
          ),
          loader: profileLoader,
        },
      ],
    },
  ]);

  if (isLoggedIn === undefined) {
    return (
      <section id="loading-page">
        <LoadingSpinner />
      </section>
    );
  }

  return <RouterProvider router={router} />;
};

export default App;