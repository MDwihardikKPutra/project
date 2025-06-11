import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Eye, // Digunakan di Supervision Services Section
  Shield, // Digunakan di Supervision Services Section
  TrendingUp, // Digunakan di Our Experience Section
} from "lucide-react";
import { Link } from "react-router-dom";

function Experience() {
  const [activeSlide, setActiveSlide] = useState(0); // State untuk slideshow
  const slides = [
    // Data slides untuk slideshow
    "/img/Back2.png",
    "/img/Company2.png",
    "/img/HeroSection.png",
  ];

  // Efek untuk slideshow otomatis
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

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

  const supervisionBenefits = [
    // Data untuk Supervision Benefits
    "Gain an experienced team of experts, placed permanently on site",
    "Keep your construction project on schedule and reduce technical risks",
    "Comply with relevant building regulations and quality standards",
    "Ensure all work conforms to specified technical documentation",
    "Complete and issue all documents, certificates and declarations correctly",
  ];

  return (
    <div className="pt-20">
      {" "}
      {/* Padding atas untuk navbar fixed */}
      {/* Our Experience Section */}
      <section
        id="experience-content" // ID unik untuk halaman ini
        className="py-24 bg-gradient-to-br from-dark-gray via-secondary-blue to-dark-gray relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate animate-fade-in-up">
            <TrendingUp className="w-10 h-10 text-primary-red/80 mx-auto mb-6" />
            <span className="inline-flex items-center px-4 py-2 bg-primary-red/20 backdrop-blur-sm rounded-full mb-6">
              <span className="text-primary-red/80 font-semibold">
                Our Experience
              </span>
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-app-white mb-6 leading-tight">
              Engineering Excellence in Power Generation
            </h2>
            <p className="text-app-white/80 text-xl max-w-3xl mx-auto">
              We specialize in comprehensive engineering solutions for power
              plant projects, combining decades of experience with cutting-edge
              technology to deliver exceptional results that exceed
              expectations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate animate-fade-in-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary-blue to-primary-red rounded-3xl blur opacity-20"></div>
                <img
                  src="/img/Back2.png" // Contoh gambar
                  alt="Supervision Services"
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-contain"
                />
                <div className="absolute inset-0 bg-dark-gray/30 to-transparent rounded-3xl"></div>
                <div className="absolute top-6 left-6 bg-app-white/20 backdrop-blur-sm rounded-xl p-4 border border-app-white/30 animate-scale-in transition-all duration-800 animation-delay-200">
                  <Shield className="w-8 h-8 text-app-white mb-2" />
                  <div className="text-app-white font-semibold">
                    24/7 Monitoring
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-animate animate-fade-in-up animation-delay-300">
              <div className="inline-flex items-center px-4 py-2 bg-secondary-blue/10 rounded-full mb-6">
                <Eye className="w-5 h-5 text-secondary-blue mr-2" />
                <span className="text-secondary-blue font-semibold">
                  Supervision Services Details
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-dark-gray mb-8 leading-tight">
                Supervision
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-blue to-secondary-blue/80">
                  Services
                </span>
              </h2>
              <div className="space-y-6 text-dark-gray leading-relaxed mb-8">
                <p className="text-lg">
                  We provide you with professional construction supervision,
                  specifically tailored to safeguard the successful completion
                  of your project. Our highly experienced personnel can
                  effectively control and supervise every aspect of your
                  construction work.
                </p>
                <p className="text-lg">
                  As an independent third-party consultant engineering team, we
                  can help you:
                </p>
              </div>
              <div className="space-y-4 mb-8">
                {supervisionBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 group animate-fade-in-up"
                    style={{ animationDelay: `${700 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-primary-red to-primary-red/80 rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-3 h-3 text-app-white" />
                    </div>
                    <span className="text-dark-gray font-medium group-hover:text-dark-gray/80 transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-secondary-blue to-secondary-blue/80 hover:from-secondary-blue/90 hover:to-secondary-blue/70 text-app-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center group">
                Find Out More
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
