import React from "react";
import { Footer } from "../Components/Footer";
import Header from "../Components/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
