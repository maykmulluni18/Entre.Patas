import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VerTipoMascota from "./VerTipoMascota";

const IndexTipoMascota = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VerTipoMascota/>
    </DashboardLayout>
  );
};

export default IndexTipoMascota;