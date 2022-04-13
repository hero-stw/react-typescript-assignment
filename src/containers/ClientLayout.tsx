import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/client/Footer";
import Header from "../components/client/Header";
type Props = {};

const ClientLayout = (props: Props) => {
  return (
    <div>
      <Header transparent />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
