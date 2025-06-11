import React from "react";
import ReactDOM from "react-dom/client";
// PENTING: Import AppRoutes, bukan App secara langsung
import AppRoutes from "./AppRoutes.tsx"; // PASTIKAN ANDA MENGIMPOR INI
import "./index.css"; // Atau './style.css' tergantung yang Anda pakai
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Sekarang, panggil AppRoutes di sini. 
          AppRoutes yang akan mengelola semua definisi rute, 
          termasuk memuat App sebagai layout. */}
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
