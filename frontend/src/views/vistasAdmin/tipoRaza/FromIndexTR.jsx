// Argon Dashboard 2 MUI components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState, useEffect } from "react";
import FromTipoRaza from "./FromTipoRaza";

const FromIndexTR = () => {
  return (
    <>
      <DashboardLayout>
        <DashboardNavbar />
        <FromTipoRaza />
      </DashboardLayout>
    </>
  );
};

export default FromIndexTR;
