import React, { useEffect } from "react";
import { Globe, ArrowRight } from "lucide-react"; // Impor ikon yang dibutuhkan
import { Link } from "react-router-dom"; // Untuk link detail proyek

function Projects() {
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
    // Data projects
    {
      image: "/img/2019.png",
      title:
        "Service Consultants Planning & Engineering Litbang & Prototype Spherical Powder, Propelan Phase II Fiscal year 2019 – Ministry of Defense (KEMENHAN RI)",
      category: "Defense Engineering",
      year: "2019",
    },
    {
      image: "/img/2020.png",
      title:
        "PMC services for EPC pipes and gas meters for gasification of PLTMG Sorong – PT. Sarana Gas Papua",
      category: "Power Generation",
      year: "2020",
    },
    {
      image: "/img/2021.png",
      title:
        "PLTD Nusa Penida & PLTMG Sorong Orifice Flow Meter Calibration – PT. Cogindo Daya Bersama.",
      category: "Chemical Engineering",
      year: "2021",
    },
  ];

  return (
    <div className="pt-20">
      {" "}
      {/* Padding atas untuk navbar fixed */}
      {/* Projects Section */}
      <section
        id="projects-content-page" // ID unik untuk halaman ini
        className="py-24 bg-gradient-to-br from-secondary-blue via-dark-gray to-secondary-blue relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 scroll-animate animate-fade-in-up">
            {/* Gunakan ikon yang sesuai, misalnya Globe */}
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

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="scroll-animate animate-fade-in-up"
                style={{ animationDelay: `${100 + index * 150}ms` }}
              >
                <div className="bg-app-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-app-white/20 hover:border-app-white/40 transition-all duration-500 group-hover:-translate-y-4 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`Project ${index + 1}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary-red text-app-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </div>
                    <div className="absolute top-4 right-4 bg-app-white/20 backdrop-blur-sm text-app-white px-3 py-1 rounded-full text-sm">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-app-white/80 leading-relaxed text-sm">
                      {project.title}
                    </p>
                    <div className="mt-6 pt-6 border-t border-app-white/20">
                      <button className="text-primary-red/80 font-semibold hover:text-primary-red/60 transition-colors flex items-center group">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center scroll-animate animate-fade-in-up animation-delay-300">
            {/* Link ke halaman Projects itu sendiri */}
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
