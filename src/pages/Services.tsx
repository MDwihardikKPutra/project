// src/pages/Services.tsx
import React, { useEffect, useState } from "react";
import { ArrowRight, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const serviceCardsData = [
    {
      id: "project-management",
      image: "/img/service (1).jpg",
      yearBadge: "PGE",
      categoryBadge: "Management",
      title: "Project Management Services",
      description:
        "Kami memandu proyek Anda dari konsep hingga penyelesaian, memastikan implementasi yang efektif sesuai pedoman PMI.",
    },
    {
      id: "construction-supervision",
      image: "/img/service (2).jpg",
      yearBadge: "PGE",
      categoryBadge: "Supervision",
      title: "Construction Supervision",
      description:
        "Pengawasan ahli untuk menjamin kualitas, keamanan, dan kepatuhan terhadap standar proyek konstruksi Anda.",
    },
    {
      id: "engineering-design",
      image: "/img/service (3).jpg",
      yearBadge: "PGE",
      categoryBadge: "Design",
      title: "Engineering Design & Services",
      description:
        "Solusi desain komprehensif mulai dari studi kelayakan, 3D modeling, hingga detail engineering design untuk optimasi kinerja.",
    },
    {
      id: "commissioning",
      image: "/img/service (4).jpg",
      yearBadge: "PGE",
      categoryBadge: "Commissioning",
      title: "Commissioning",
      description:
        "Manajemen proses commissioning secara menyeluruh, baik di lokasi maupun di luar lokasi, dengan keahlian khusus kami.",
    },
    {
      id: "as-built-drawing",
      image: "/img/service (5).jpg",
      yearBadge: "PGE",
      categoryBadge: "Documentation",
      title: "As-Built Drawing",
      description:
        "Penyediaan gambar as-built yang akurat, penting untuk operasi, pemeliharaan, dan modifikasi fasilitas di masa mendatang.",
    },
    {
      id: "reverse-engineering",
      image: "/img/service (6).jpg",
      yearBadge: "PGE",
      categoryBadge: "Analysis",
      title: "Reverse Engineering",
      description:
        "Layanan rekayasa teknis profesional termasuk inspeksi dan pengujian untuk berbagai aplikasi industri dan komersial.",
    },
    {
      id: "inspection-assessment",
      image: "/img/service (7).jpg",
      yearBadge: "PGE",
      categoryBadge: "Assessment",
      title: "Inspection & Assessment",
      description:
        "Desainer berpengalaman kami menggunakan CAD untuk memanipulasi model digital 2D dan 3D guna opsi desain dan manufaktur.",
    },
    {
      id: "operation-maintenance",
      image: "/img/service (8).jpg",
      yearBadge: "PGE",
      categoryBadge: "O&M",
      title: "Operation and Maintenance",
      description:
        "Strategi O&M komprehensif untuk keandalan jangka panjang, efisiensi, dan keberlanjutan fasilitas pembangkit listrik.",
    },
  ];

  const handleToggleDetails = (id: string) => {
    setOpenCardId((prevId) => (prevId === id ? null : id));
  };

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

  return (
    <div className="pt-20 bg-app-white text-dark-gray">
      <section
        id="services-content-page"
        className="py-24 bg-gradient-to-br from-secondary-blue via-dark-gray to-secondary-blue relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 scroll-animate animate-fade-in-up">
            <Globe className="w-10 h-10 text-primary-red/80 mx-auto mb-6" />
            <span className="inline-flex items-center px-4 py-2 bg-primary-red/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-primary-red/80 font-semibold">
                Our Services
              </span>
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-app-white mb-6 leading-tight">
              Featured
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-red/80">
                {" "}
                Services
              </span>
            </h1>
            <p className="text-app-white/80 text-xl max-w-3xl mx-auto">
              Kami menyediakan solusi rekayasa terpadu untuk memenuhi kebutuhan
              proyek pembangkit listrik Anda. Mulai dari desain konseptual
              hingga manajemen proyek yang komprehensif.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {serviceCardsData.map((service, index) => (
              <div
                key={service.id}
                className="scroll-animate animate-fade-in-up"
                style={{ animationDelay: `${100 + index * 150}ms` }}
              >
                {/* Added group-hover:scale-105 to the main card container */}
                <div className="bg-app-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-app-white/20 hover:border-app-white/40 transition-all duration-500 group-hover:-translate-y-4 hover:shadow-2xl h-full flex flex-col group **group-hover:scale-105**">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary-red text-app-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.yearBadge}
                    </div>
                    <div className="absolute top-4 right-4 bg-app-white/20 backdrop-blur-sm text-app-white px-3 py-1 rounded-full text-sm">
                      {service.categoryBadge}
                    </div>
                  </div>
                  <div className="p-8 flex-grow">
                    <h3 className="text-app-white text-xl font-bold mb-4">
                      {service.title}
                    </h3>
                    <div className="mt-6 pt-6 border-t border-app-white/20">
                      <button
                        onClick={() => handleToggleDetails(service.id)}
                        className="text-primary-red/80 font-semibold hover:text-primary-red/60 transition-colors flex items-center group"
                      >
                        {openCardId === service.id
                          ? "Hide Details"
                          : "View Details"}
                        {openCardId === service.id ? (
                          <ChevronUp className="w-4 h-4 ml-2 group-hover:translate-x-0 transition-transform" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        )}
                      </button>
                    </div>
                  </div>

                  {openCardId === service.id && (
                    <div className="px-8 pb-8 animate-fade-in-down">
                      <p className="text-app-white/80 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center scroll-animate animate-fade-in-up animation-delay-300">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary-red to-primary-red/80 hover:from-primary-red/90 hover:to-primary-red/70 text-app-white px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
