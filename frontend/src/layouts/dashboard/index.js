/* eslint-disable no-unused-vars */
/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 MUI base stylesapiListCount
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboard/components/Slider";

// Data
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";
import { apiListCount } from "config/api";
import { useEffect, useState } from "react";
import axios from "axios";

function Default() {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(apiListCount);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const { size } = typography;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          {/* <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="today's money"
              count="$53,000"
              icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
              percentage={{ color: "success", count: "+55%", text: "since yesterday" }}
            />
          </Grid> */}
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Cantidad de Mascotas Adoptados"
              count={data?.adopted_count}
              icon={{ color: "error", component: <i className="ni ni-world" /> }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Cantidad de Mascotas No Adoptados"
              count={data?.not_adopted_count}
              icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            {/* <DetailedStatisticsCard
              title="sales"
              count="$103,430"
              icon={{ color: "warning", component: <i className="ni ni-cart" /> }}
              percentage={{ color: "success", count: "+5%", text: "than last month" }}
            /> */}
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          {/* <Grid item xs={1} lg={1}>
            <GradientLineChart
              description={<ArgonBox display="flex" alignItems="center"></ArgonBox>}
              chart=""
            />
          </Grid> */}
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid>
      </ArgonBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default Default;
