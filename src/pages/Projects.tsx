// src/pages/Projects.tsx
import React, { useEffect, useState } from "react"; // Import useState
import { Globe, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"; // Import ChevronDown and ChevronUp
import { Link } from "react-router-dom"; // Untuk link detail proyek

function Projects() {
  // State to manage which card's details are open
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  // Efek untuk animasi scroll-in (fade-in-up)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    // Data projects. Pastikan setiap proyek memiliki 'id' unik dan 'description'.
    {
      id: "project-2019", // Added unique ID
      image: "/img/2019.png",
      title:
        "Service Consultants Planning & Engineering Litbang & Prototype Spherical Powder, Propelan Phase II Fiscal year 2019 – Ministry of Defense (KEMENHAN RI)",
      category: "Defense Engineering",
      year: "2019",
      description:
        "Konsultan perencanaan dan rekayasa untuk Litbang & Prototype Spherical Powder, Propelan Tahap II pada tahun fiskal 2019 untuk Kementerian Pertahanan RI.", // Added description
    },
    {
      id: "project-2020", // Added unique ID
      image: "/img/2020.png",
      title:
        "PMC services for EPC pipes and gas meters for gasification of PLTMG Sorong – PT. Sarana Gas Papua",
      category: "Power Generation",
      year: "2020",
      description:
        "Layanan Manajemen Proyek Konstruksi (PMC) untuk pipa EPC dan meteran gas untuk gasifikasi PLTMG Sorong bagi PT. Sarana Gas Papua.", // Added description
    },
    {
      id: "project-2021", // Added unique ID
      image: "/img/2021.png",
      title:
        "PLTD Nusa Penida & PLTMG Sorong Orifice Flow Meter Calibration – PT. Cogindo Daya Bersama.",
      category: "Chemical Engineering",
      year: "2021",
      description:
        "Kalibrasi Orifice Flow Meter untuk PLTD Nusa Penida & PLTMG Sorong yang dilaksanakan untuk PT. Cogindo Daya Bersama.", // Added description
    },
    // Tambahan 3 card untuk layout 3x3
    {
      id: "project-2022", // Added unique ID
      image: "https://placehold.co/600x400/FF5733/FFFFFF?text=Project+2022", // Placeholder image
      title:
        "Geothermal Well Drilling Supervision in Kamojang Field - PT. Pertamina Geothermal Energy",
      category: "Geothermal Energy",
      year: "2022",
      description:
        "Pengawasan pengeboran sumur panas bumi di Lapangan Kamojang untuk PT. Pertamina Geothermal Energy, memastikan kepatuhan standar keselamatan dan kualitas.", // Added description
    },
    {
      id: "project-2023", // Added unique ID
      image: "https://placehold.co/600x400/33FF57/000000?text=Project+2023", // Placeholder image
      title:
        "Feasibility Study for Solar Power Plant Development in East Java - Ministry of Energy",
      category: "Renewable Energy",
      year: "2023",
      description:
        "Studi kelayakan untuk pengembangan pembangkit listrik tenaga surya di Jawa Timur, menyediakan analisis mendalam tentang potensi teknis dan ekonomis.", // Added description
    },
    {
      id: "project-2024", // Added unique ID
      image: "https://placehold.co/600x400/3357FF/FFFFFF?text=Project+2024", // Placeholder image
      title:
        "Upgrading Waste-to-Energy Facility in Jakarta - Environmental Agency",
      category: "Environmental Engineering",
      year: "2024",
      description:
        "Peningkatan fasilitas pengolahan sampah menjadi energi di Jakarta, berfokus pada optimasi efisiensi dan pengurangan dampak lingkungan.", // Added description
    },
  ];

  // Toggle function for the dropdown
  const handleToggleDetails = (id: string) => {
    setOpenCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="pt-20">
      <section
        id="projects-content-page"
        className="py-24 bg-gradient-to-br from-secondary-blue via-dark-gray to-secondary-blue relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 scroll-animate animate-fade-in-up">
            <Globe className="w-10 h-10 text-primary-red/80 mx-auto mb-6" />
            <span className="inline-flex items-center px-4 py-2 bg-primary-red/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-primary-red/80 font-semibold">
                Our Projects
              </span>
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-app-white mb-6 leading-tight">
              Featured
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-red/80">
                Projects
              </span>
            </h2>
            <p className="text-app-white/80 text-xl max-w-3xl mx-auto">
              Showcasing our expertise through successful project
              implementations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map(
              (
                project // Removed 'index' from map as 'key' is now 'project.id'
              ) => (
                <div
                  key={project.id} // Using project.id as key
                  className="scroll-animate animate-fade-in-up"
                  style={{
                    animationDelay: `${
                      100 + projects.indexOf(project) * 150
                    }ms`,
                  }} // Use indexOf for animation delay
                >
                  <div className="bg-app-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-app-white/20 hover:border-app-white/40 transition-all duration-500 group-hover:-translate-y-4 hover:shadow-2xl group group-hover:scale-105 h-full flex flex-col">
                    {/* Card Content (Always visible) */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-primary-red text-app-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.year}
                      </div>
                      <div className="absolute top-4 right-4 bg-app-white/20 backdrop-blur-sm text-app-white px-3 py-1 rounded-full text-sm">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-8 flex-grow">
                      {" "}
                      {/* flex-grow to push button to bottom */}
                      <h3 className="text-app-white text-xl font-bold mb-4">
                        {" "}
                        {/* Changed to h3 for semantic structure */}
                        {project.title}
                      </h3>
                      <div className="mt-6 pt-6 border-t border-app-white/20">
                        <button
                          onClick={() => handleToggleDetails(project.id)}
                          className="text-primary-red/80 font-semibold hover:text-primary-red/60 transition-colors flex items-center group"
                        >
                          {openCardId === project.id
                            ? "Hide Details"
                            : "View Details"}
                          {openCardId === project.id ? (
                            <ChevronUp className="w-4 h-4 ml-2 group-hover:translate-x-0 transition-transform" />
                          ) : (
                            <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Dropdown Content (Conditionally rendered) */}
                    {openCardId === project.id && (
                      <div className="px-8 pb-8 animate-fade-in-down">
                        <p className="text-app-white/80 leading-relaxed text-sm">
                          {project.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="text-center scroll-animate animate-fade-in-up animation-delay-300">
            <Link
              to="/projects"
              className="bg-gradient-to-r from-primary-red to-primary-red/80 hover:from-primary-red/90 hover:to-primary-red/70 text-app-white px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
