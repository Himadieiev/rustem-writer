import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import ScrollToTop from "../../utils/scrollToTop";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
