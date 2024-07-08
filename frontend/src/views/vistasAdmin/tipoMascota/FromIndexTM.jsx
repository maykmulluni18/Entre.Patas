// Argon Dashboard 2 MUI components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState, useEffect } from "react";
import FromTipoMascota from "./FromTipoMascota";

const FromIndexTM = () => {
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <FromTipoMascota />
      </DashboardLayout>
    </>
  );
};

export default FromIndexTM;
