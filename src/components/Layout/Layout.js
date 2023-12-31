import { Outlet, useNavigation } from "react-router";

import Header from "./Header";
import Footer from "./Footer";
import LoadingSpinner from "../UI/LoadingSpinner";

const Layout = () => {
  const { state } = useNavigation();
  return (
    <>
      <Header />
      <main>
        {state === "loading" ? <LoadingSpinner /> : null}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;