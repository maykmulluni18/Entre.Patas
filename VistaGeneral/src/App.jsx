import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import FiltersIndex from "./Views/FiltersIndex";
import ViewsMascotaIndex from "./Views/ViewsMascotaIndex";
import ViewAdop from "./Views/ViewAdop";
import Contact from "./Views/Contact";
import Donar from "./Views/Donar";
import IndexPerdida from "./Views/ReportarPerdida/IndexPerdida";
import IndexFromPerdida from "./Views/ReportarPerdida/IndexFromReport";
import Dashboard from "./Views/DasboardUser/Dasboard";
import Login from "./Views/Autenticate/Login";

function App() {
  return (
    <>
      {/* <Navbar/>
      <Filters /> 
       <Route path="/bienes">
                  <Route index element={<Bienes />} />
                  <Route path="created-bienes" element={<CreatedBienes />} />
                  <Route path="edit/:id" element={<EditBienes />} />
                  <Route path="importbienes" element={<ImportBienesExcel/>} />
                </Route>
      */}

      <Router>
        <Routes>
          <Route path="/" />

          <Route index element={<FiltersIndex />} />
          <Route path="/VistaGeneral/:id" element={<ViewsMascotaIndex />} />
          <Route path="/VistaGeneral/:id/adoptar/:idd" element={<ViewAdop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donar" element={<Donar />} />
          <Route path="/perdida-mascota" element={<IndexPerdida />} />
          <Route
            path="/perdida-mascota/registrar"
            element={<IndexFromPerdida />}
          />
          {sessionStorage.getItem("token") ? (
            <Route path="/dasboard" element={<Dashboard />} />
          ) : (
            <Route path="/login" element={<Login />} />
          )}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
