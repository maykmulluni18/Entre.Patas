import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import VerDonation from "./VerDonation";

const IndexDonation = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VerDonation />
    </DashboardLayout>
  );
};

export default IndexDonation;
