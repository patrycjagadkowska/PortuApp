import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useContext } from "react";
import { getDocs, collection, getDoc, doc } from "firebase/firestore";

import Welcome from "./pages/Welcome";
import Layout from "./components/Layout/Layout";
import Authentication from "./pages/Authentication";
import AuthContext from "./context/AuthContext";
import Learn from "./pages/Learn";
import Lesson from "./pages/Lesson";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import { database } from "./api/database-api";
import Test from "./pages/Test";

const App = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const fetchAllUnitsData = async () => {
    return getDocs(collection(database, "lessons"));
  };

  const fetchLessonData = async ({ params }) => {
        return getDoc(doc(database, "lessons", params.unitId));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        {!isLoggedIn && <Route path="/login" element={<Authentication />} />}
        {!isLoggedIn && (
          <Route path="/createAccount" element={<Authentication />} />
        )}
        {isLoggedIn && <Route path="/learn" element={<Learn />} loader={fetchAllUnitsData} />}
        {isLoggedIn && (
          <Route path="/learn/:unitId/:lessonId" element={<Lesson />} loader={fetchLessonData} />
        )}
        {isLoggedIn && <Route path="/learn/:unitId/test" element={<Test />} loader={fetchLessonData} />}
        {isLoggedIn && <Route path="/profile" element={<Profile />} />}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
