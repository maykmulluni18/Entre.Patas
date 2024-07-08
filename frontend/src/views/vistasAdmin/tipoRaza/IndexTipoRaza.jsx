import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VerTipoRaza from "./VerTipoRaza";

const IndexTipoRaza = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VerTipoRaza/>
    </DashboardLayout>
  );
};

export default IndexTipoRaza;