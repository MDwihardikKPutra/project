import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Building2,
  Zap,
  Settings,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  Download,
  Eye,
  Shield,
  Target,
  CheckCircle,
  Star,
  Globe,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

// CATATAN: Pastikan Anda telah mendefinisikan warna kustom di tailwind.config.js
// 'dark-gray': '#414040',
// 'primary-red': '#C02226',
// 'secondary-blue': '#20295C',
// 'app-white': '#FFFFFF',

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk menentukan apakah link navigasi aktif
  const getNavLinkClass = (path: string) => {
    // Disederhanakan karena hash link tidak akan "aktif" secara otomatis pada halaman lain
    return location.pathname === path
      ? "text-primary-red font-semibold relative group"
      : "text-dark-gray hover:text-primary-red transition-colors font-medium";
  };

  return (
    <div className="min-h-screen bg-app-white overflow-x-hidden flex flex-col">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-app-white/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center space-x-3">
                  <img
                    src="/img/logopge.png"
                    alt="PGE Logo"
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link to="/" className={getNavLinkClass("/")}>
                  Home
                  {location.pathname === "/" && location.hash === "" && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-red"></span>
                  )}
                </Link>
                {/* Link About ke halaman About.tsx terpisah */}
                <Link to="/about" className={getNavLinkClass("/about")}>
                  About
                </Link>
                {/* Link Experience ke halaman Experience.tsx terpisah */}
                <Link
                  to="/experience"
                  className={getNavLinkClass("/experience")}
                >
                  Experience
                </Link>
                {/* Link Projects ke halaman Projects.tsx terpisah */}
                <Link to="/projects" className={getNavLinkClass("/projects")}>
                  Projects
                </Link>
                {/* Link Supervision ke section di Home (jika di Home) atau halaman Home lalu scroll */}
                <Link
                  to="/#supervision"
                  className="text-dark-gray hover:text-primary-red transition-colors font-medium"
                >
                  {" "}
                  Supervision{" "}
                </Link>
                {/* Link Services ke section di Home (jika di Home) atau halaman Home lalu scroll */}
                <Link
                  to="/#services"
                  className="text-dark-gray hover:text-primary-red transition-colors font-medium"
                >
                  {" "}
                  Services{" "}
                </Link>
                {/* Link CSR ke halaman CSR.tsx yang terpisah */}
                <Link to="/csr" className={getNavLinkClass("/csr")}>
                  {" "}
                  CSR{" "}
                </Link>
                {/* Link Contact ke section di Home (jika di Home) atau halaman Home lalu scroll */}
                <Link
                  to="/#contact"
                  className="text-dark-gray hover:text-primary-red transition-colors font-medium"
                >
                  {" "}
                  Contact{" "}
                </Link>
              </div>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-dark-gray hover:text-primary-red p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-app-white/95 backdrop-blur-lg border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-3 text-primary-red font-semibold"
              >
                {" "}
                Home{" "}
              </Link>
              {/* Link About ke halaman About.tsx terpisah */}
              <Link
                to="/about"
                className="block px-3 py-3 text-dark-gray hover:text-primary-red"
              >
                {" "}
                About{" "}
              </Link>
              {/* Link Experience ke halaman Experience.tsx terpisah */}
              <Link
                to="/experience"
                className="block px-3 py-3 text-dark-gray hover:text-primary-red"
              >
                {" "}
                Experience{" "}
              </Link>
              {/* Link Projects ke halaman Projects.tsx terpisah */}
              <Link
                to="/projects"
                className="block px-3 py-3 text-dark-gray hover:text-primary-red"
              >
                {" "}
                Projects{" "}
              </Link>
              {/* Link Supervision ke section di Home */}
              <Link
                to="/#supervision"
                className="block px-3 py-3 text-dark-gray hover:text-primary-red"
              >
                {" "}
                Supervision{" "}
              </Link>
              {/* Link Services ke section di Home */}
              <Link
                to="/#services"
                className="block px-3 py-3 text-dark-gray hover:text-primary-red"
              >
                {" "}
                Services{" "}
              </Link>
              {/* Link CSR ke halaman CSR.tsx yang terpisah */}
              <Link
                to="/csr"
                className="block px-3 py-3 text-dark-gray hover:text-primary-red"
              >
                {" "}
                CSR{" "}
              </Link>
              {/* Link Contact ke section di Home */}
              <Link
                to="/#contact"
                className="block px-3 py-3 text-dark-gray hover:text-primary-red"
              >
                {" "}
                Contact{" "}
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Bagian di mana konten halaman akan dirender */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer */}
      <footer className="bg-dark-gray py-12 border-t border-dark-gray/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div style={{ width: "32px", height: "32px" }}>
                <img
                  src="/img/logopge.png"
                  alt="PGE Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-app-white">PGE</span>
                <div className="text-xs text-app-white/80">
                  Power Generation Expert
                </div>
              </div>
            </div>
            <div className="text-app-white/80 text-center md:text-right">
              <p>
                &copy; 2024 PGE - Power Generation Expert. All rights reserved.
              </p>
              <p className="text-sm mt-1">Engineering Excellence Since 2010</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
