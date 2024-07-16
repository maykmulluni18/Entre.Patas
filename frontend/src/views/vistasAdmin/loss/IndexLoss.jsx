import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VerLoss from "./VerLoss";

const IndexLoss = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VerLoss />
    </DashboardLayout>
  );
};

export default IndexLoss;
