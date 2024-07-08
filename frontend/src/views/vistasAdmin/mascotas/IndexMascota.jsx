import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VerMascota from "./VerMascota";

const IndexMascota = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VerMascota />
    </DashboardLayout>
  );
};

export default IndexMascota;
