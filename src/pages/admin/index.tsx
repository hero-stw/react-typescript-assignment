import React from "react";
import AsideAdmin from "../../components/admin/AsideAdmin";
import NavAdmin from "../../components/admin/NavAdmin";
import ProductAdmin from "../../components/admin/ProductAdmin";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <div>
      <NavAdmin />
      <div className="flex overflow-hidden bg-white pt-16">
        <AsideAdmin />
        <ProductAdmin />
      </div>
    </div>
  );
};

export default Dashboard;
