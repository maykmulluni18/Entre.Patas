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

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.
  Once you add a new route on this file it will be visible automatically on
  the Sidenav.
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Argon Dashboard 2 MUI layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import VistaGneral from "views/vistaGeneral/VistaGeneral";
import IndexTipoMascota from "views/vistasAdmin/tipoMascota/IndexTipoMascota";
import FromTipoMascota from "views/vistasAdmin/tipoMascota/FromTipoMascota";
import FromIndexTM from "views/vistasAdmin/tipoMascota/FromIndexTM";
import IndexTipoRaza from "views/vistasAdmin/tipoRaza/IndexTipoRaza";
import FromIndexTR from "views/vistasAdmin/tipoRaza/FromIndexTR";

import IndexMascotas from "views/vistasAdmin/mascotas/IndexMascota";
import FromIndexMascota from "views/vistasAdmin/mascotas/FromIndexMascota";
import IndexAdopcion from "views/vistasAdmin/adopciones/IndexAdopcion";
import IndexContact from "views/vistasAdmin/contact/IndexContact";
import IndexDonation from "views/vistasAdmin/donations/IndexDonation";
import IndexLoss from "views/vistasAdmin/loss/IndexLoss";

const routes = [
  // {
  //   type: "route",
  //   name: "VistaGneral",
  //   key: "VistaGneral",
  //   route: "/VistaGneral",
  //   icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
  //   component: <VistaGneral />,
  // },

  sessionStorage.getItem("token")
    ? {
        type: "route",
        name: "Inicio",
        key: "dashboard",
        route: "/dashboard",
        icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
        component: <Dashboard />,
      }
    : {
        route: "/authentication/sign-in",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-single-copy-04"
          />
        ),
        component: <SignIn />,
      },

  // {
  //   type: "route",
  //   name: "Tables",
  //   key: "tables",
  //   route: "/tables",
  //   icon: (
  //     <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
  //   ),
  //   component: <Tables />,
  // },
  sessionStorage.getItem("token")
    ? {
        type: "route",
        name: "Lista de Adopciones",
        key: "adoptions",
        route: "/adoptions",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-calendar-grid-58"
          />
        ),
        component: <IndexAdopcion />,
      }
    : {
        route: "/authentication/sign-in",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-single-copy-04"
          />
        ),
        component: <SignIn />,
      },

  sessionStorage.getItem("token")
    ? {
        type: "route",
        name: "Lista de Mascotas",
        key: "listPets",
        route: "/listPets",
        icon: (
          <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-collection" />
        ),
        component: <IndexMascotas />,
        collapse: [
          {
            type: "route",
            name: "Lista de Mascotas",
            key: "listPets",
            route: "/listPets",
            icon: (
              <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-briefcase-24" />
            ),
            component: <IndexMascotas />,
          },
          {
            type: "route",
            name: "Form_create",
            key: "form_create",
            route: "/listPets/form/",
            icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-books" />,

            component: <FromIndexMascota />,
          },
          {
            type: "route",
            name: "Form_edit",
            key: "form_edit",
            route: "/listPets/form/:id",
            icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-books" />,
            component: <FromIndexMascota />,
          },
        ],
      }
    : {
        route: "/authentication/sign-in",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-single-copy-04"
          />
        ),
        component: <SignIn />,
      },

  sessionStorage.getItem("token")
    ? {
        type: "route",
        name: "Tipo de Mascotas",
        key: "teypePets",
        route: "/teypePets",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-calendar-grid-58"
          />
        ),
        component: <IndexTipoMascota />,
        collapse: [
          {
            type: "route",
            name: "Tipo de Mascotas",
            key: "teypePets",
            route: "/teypePets",
            icon: (
              <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-briefcase-24" />
            ),
            component: <IndexTipoMascota />,
          },
          {
            type: "route",
            name: "Form_create",
            key: "form_create",
            route: "/teypePets/form/",
            icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-books" />,

            component: <FromIndexTM />,
          },
          {
            type: "route",
            name: "Form_edit",
            key: "form_edit",
            route: "/teypePets/form/:id",
            icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-books" />,
            component: <FromIndexTM />,
          },
        ],
      }
    : {
        route: "/authentication/sign-in",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-single-copy-04"
          />
        ),
        component: <SignIn />,
      },

  sessionStorage.getItem("token")
    ? {
        type: "route",
        name: "Tipo de Raza",
        key: "typeRace",
        route: "/teypeRace",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-calendar-grid-58"
          />
        ),
        component: <IndexTipoRaza />,
        collapse: [
          {
            type: "route",
            name: "Tipo de Mascotas",
            key: "teypeRace",
            route: "/teypeRace",
            icon: (
              <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-briefcase-24" />
            ),
            component: <IndexTipoRaza />,
          },
          {
            type: "route",
            name: "Form_create",
            key: "form_create",
            route: "/teypeRace/form/",
            icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-books" />,

            component: <FromIndexTR />,
          },
          {
            type: "route",
            name: "Form_edit",
            key: "form_edit",
            route: "/teypeRace/form/:id",
            icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-books" />,
            component: <FromIndexTR />,
          },
        ],
      }
    : {
        route: "/authentication/sign-in",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-single-copy-04"
          />
        ),
        component: <SignIn />,
      },

  sessionStorage.getItem("token")
    ? {
        type: "route",
        name: "Lista de Perdidas de Mascota",
        key: "loss",
        route: "/loss",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-single-copy-04"
          />
        ),
        component: <IndexLoss />,
      }
    : {
        route: "/authentication/sign-in",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-single-copy-04"
          />
        ),
        component: <SignIn />,
      },

  sessionStorage.getItem("token")
    ? {
        type: "route",
        name: "Lista de Donaciones",
        key: "donations",
        route: "/donations",
        icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-books" />,
        component: <IndexDonation />,
      }
    : {
        route: "/authentication/sign-in",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-single-copy-04"
          />
        ),
        component: <SignIn />,
      },

  // sessionStorage.getItem("token")
  //   ? {
  //       type: "route",
  //       name: "Lista de apdarinamiento",
  //       key: "apadra",
  //       route: "/apadra",
  //       icon: (
  //         <ArgonBox
  //           component="i"
  //           color="warning"
  //           fontSize="14px"
  //           className="ni ni-calendar-grid-58"
  //         />
  //       ),
  //       component: "",
  //     }
  //   : {
  //       route: "/authentication/sign-in",
  //       icon: (
  //         <ArgonBox
  //           component="i"
  //           color="warning"
  //           fontSize="14px"
  //           className="ni ni-single-copy-04"
  //         />
  //       ),
  //       component: <SignIn />,
  //     },
  sessionStorage.getItem("token")
    ? {
        type: "route",
        name: "Lista de Contactos",
        key: "contacts",
        route: "/contacts",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-calendar-grid-58"
          />
        ),
        component: <IndexContact />,
      }
    : {
        route: "/authentication/sign-in",
        icon: (
          <ArgonBox
            component="i"
            color="warning"
            fontSize="14px"
            className="ni ni-single-copy-04"
          />
        ),
        component: <SignIn />,
      },
  // { type: "title", title: "Account Pages", key: "account-pages" },
  // {
  //   type: "route",
  //   name: "Profile",
  //   key: "profile",
  //   route: "/profile",
  //   icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
  //   component: <Profile />,
  // },

  // {
  //   type: "route",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "sign-up",
  //   icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
  //   component: <VistaGneral />,
  // },
];

export default routes;
