// src/AppRoutes.tsx
// Baris 'import React from 'react';' telah dihapus.
import { Routes, Route } from "react-router-dom";

// Import komponen App sebagai LAYOUT.
import AppLayout from "./App";

// Import halaman konten utama (Home).
import Home from "./pages/Home";

// Import halaman-halaman konten lainnya yang terpisah
import About from "./pages/About"; // Halaman About
import Projects from "./pages/Projects"; // Halaman Projects
import Experience from "./pages/Experience"; // Halaman Experience
import csrPageContent from "./pages/csr";
import ServiceDetailPageContent from "./pages/ServiceDetail";

/**
 * AppRoutes component mendefinisikan semua rute aplikasi menggunakan React Router DOM.
 * Menggunakan nested routing untuk menerapkan layout umum (Navbar dan Footer)
 * yang disediakan oleh AppLayout untuk semua halaman konten.
 */
function AppRoutes() {
  return (
    <Routes>
      {/* Route utama untuk layout.
        Semua rute bersarang di dalamnya (<Outlet /> di AppLayout) akan menggunakan AppLayout.
        path="/" berarti ini adalah rute dasar dari aplikasi.
      */}
      <Route path="/" element={<AppLayout />}>
        {/* Route index untuk halaman utama (Home). */}
        <Route index element={<Home />} />

        {/* Rute untuk halaman-halaman yang benar-benar terpisah */}
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="csr" element={<csrPageContent />} />
        <Route
          path="service-detail/:serviceName"
          element={<ServiceDetailPageContent />}
        />

        {/* Catch-all route untuk halaman 404 (Not Found). */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <h1 className="text-4xl font-bold text-gray-800">
                404 - Page Not Found
              </h1>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
