import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VerAdopcion from "./VerAdopcion";

const IndexAdopcion = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VerAdopcion />
    </DashboardLayout>
  );
};

export default IndexAdopcion;
