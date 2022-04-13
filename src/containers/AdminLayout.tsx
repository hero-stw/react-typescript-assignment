import React from "react";
import { Outlet } from "react-router-dom";
import AsideAdmin from "../components/admin/AsideAdmin";
import NavAdmin from "../components/admin/NavAdmin";
import ProductAdmin from "../components/admin/ProductAdmin";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div>
      <NavAdmin />
      <div className="flex overflow-hidden bg-white pt-16">
        <AsideAdmin />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
