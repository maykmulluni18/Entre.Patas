// Argon Dashboard 2 MUI components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState, useEffect } from "react";
import FromMascota from "./FromMascota";

const FromIndexMascota = () => {
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <FromMascota />
      </DashboardLayout>
    </>
  );
};

export default FromIndexMascota;
