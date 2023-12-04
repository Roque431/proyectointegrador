// import React from "react";
// import NotFound from "./pages/NotFound/Index";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// //codigo para uso de contexto
// // import userContext from './Context/userContext';
// import { useState } from 'react'
// import PaginaWeb from './pages/PaginaWeb';
// import GenerarCita from "./pages/GenerarCita";
// import AdmCitas from "./pages/AdmCitas";
// import AdmProductos from "./pages/AdmProductos";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PaginaWeb />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/Citas",
//     element: <GenerarCita />,
//   },
//   {
//     path: "/AdmCitas",
//     element: <AdmCitas />,
//   },
//   {
//     path: "/AdmProduc",
//     element: <AdmProductos />,
//   }
// ])

// function App() {
//   const [user, setUser] = useState(false);
//   return (
//     <>
//     <RouterProvider router={router} />
//     {/* <userContext.Provider value={{user, setUser}}>
//       <RouterProvider router={router} />
//     </userContext.Provider> */}
//     </>
//   )
// }

// export default App


// App.jsx
import React from "react";
import NotFound from "./pages/NotFound/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PaginaWeb from "./pages/PaginaWeb";
import GenerarCita from "./pages/GenerarCita";
import AdmCitas from "./pages/AdmCitas";
import AdmProductos from "./pages/AdmProductos";  
import Acceder from "./pages/Acceder/Index";
import Registro from "./pages/Registro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaWeb />} />
        <Route path="/Citas" element={<GenerarCita />} />
        <Route path="/AdmCitas" element={<AdmCitas />} />
        <Route path="/AdmProduc" element={<AdmProductos />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Acceder" element={<Acceder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

