import { useState, useEffect, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Argon Dashboard 2 MUI example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Argon Dashboard 2 MUI themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Argon Dashboard 2 MUI routes
import routes from "routes";

// Argon Dashboard 2 MUI contexts
import { useArgonController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brand from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primeflex/primeflex.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./index.css";
// Icon Fonts

import "assets/css/nucleo-icons.css";
import VistaGneral from "views/vistaGeneral/VistaGeneral";
import "assets/css/nucleo-svg.css";
// import "assets/css/style.css";
import "assets/css/form.css";
import "assets/css/grid.css";
import "assets/css/ie.css";
// import "assets/css/reset.css";
import "assets/css/slider.css";
import "assets/css/superfish.css";
import VerMascota from "views/vistaGeneral/verMascota/VerMacota";
import VerCuestionarioUsers from "views/vistaGeneral/vistaCuestionarioUsers/VerCuestionarioUsers";
import Prueva from "views/vistaGeneral/Prueva";
export default function App() {
  const [controller, dispatch] = useArgonController();
  const { miniSidenav, direction, layout, openConfigurator, sidenavColor, darkSidenav, darkMode } =
    controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <ArgonBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </ArgonBox>
  );

  return (
    <>
      <Routes>
        {/* <Route path="/vista" element={<Prueva />} />
        <Route path="/vista-general" element={<VistaGneral />} />
        <Route path="/vista-general/mascota/:id" element={<VerMascota />} />
        <Route path="/vista-general/mascota/:id/adoptar" element={<VerCuestionarioUsers />} /> */}

        <Route
          path="*"
          element={
            direction === "rtl" ? (
              <CacheProvider value={rtlCache}>
                <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
                  <CssBaseline />
                  {layout === "dashboard" && (
                    <>
                      <Sidenav
                        color={sidenavColor}
                        brand={darkSidenav || darkMode ? brand : brandDark}
                        brandName="Argon Dashboard 2 PRO"
                        routes={routes}
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                      />
                    </>
                  )}
                  <Routes>
                    {getRoutes(routes)}
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                  </Routes>
                </ThemeProvider>
              </CacheProvider>
            ) : sessionStorage.getItem("auth_token") ? (
              <ThemeProvider theme={darkMode ? themeDark : theme}>
                <CssBaseline />
                {layout === "dashboard" && (
                  <>
                    <Sidenav
                      color={sidenavColor}
                      brand={darkSidenav || darkMode ? brand : brandDark}
                      brandName="Entre Patas"
                      routes={routes}
                      onMouseEnter={handleOnMouseEnter}
                      onMouseLeave={handleOnMouseLeave}
                    />
                  </>
                )}
                <Routes>
                  {getRoutes(routes)}
                  <Route path="*" element={<Navigate to="/dashboard" />} />
                </Routes>
              </ThemeProvider>
            ) : (
              <ThemeProvider theme={darkMode ? themeDark : theme}>
                {layout === "dashboard" && (
                  <>
                    <Sidenav
                      color={sidenavColor}
                      brand={darkSidenav || darkMode ? brand : brandDark}
                      brandName="Entre Patas"
                      routes={routes}
                      onMouseEnter={handleOnMouseEnter}
                      onMouseLeave={handleOnMouseLeave}
                    />
                  </>
                )}
                <Routes>
                  {getRoutes(routes)}
                  <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
                </Routes>
              </ThemeProvider>
            )
          }
        />
      </Routes>
    </>
  );
}
