import React, { useEffect } from "react";
import { Building2, Download, Award } from "lucide-react"; // Impor ikon yang dibutuhkan
import { Link } from "react-router-dom"; // Untuk link download

function About() {
  // Effect untuk animasi scroll-in (fade-in-up)
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

  const partners = ["/img/iso-1.png", "/img/iso-2.png", "/img/iso-3.png"]; // Data partners

  return (
    <div className="pt-20">
      {" "}
      {/* Padding atas untuk navbar fixed */}
      {/* About Section - Company Profile */}
      <section
        id="about-content"
        className="py-24 bg-app-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-red/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate animate-fade-in-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-red to-secondary-blue rounded-3xl blur opacity-20"></div>
                <img
                  src="/img/company2.png"
                  alt="Company Profile"
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-contain"
                />
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-secondary-blue to-secondary-blue/80 text-app-white p-8 rounded-2xl shadow-2xl">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-app-white">Years of Excellence</div>
                  <div className="w-12 h-1 bg-primary-red mt-3 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="scroll-animate animate-fade-in-up animation-delay-300">
              <div className="inline-flex items-center px-4 py-2 bg-primary-red/10 rounded-full mb-6">
                <Building2 className="w-5 h-5 text-primary-red mr-2" />
                <span className="text-primary-red font-semibold">
                  Company Profile
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-dark-gray mb-8 leading-tight">
                Engineering Excellence in
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-red/80">
                  Power Generation
                </span>
              </h2>
              <p className="text-dark-gray text-lg leading-relaxed mb-8">
                Dignissimos ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum
                fuga.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="LINK_DRIVE_PDF_ANDA_DI_SINI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-secondary-blue to-secondary-blue/80 hover:from-secondary-blue/90 hover:to-secondary-blue/70 text-app-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center group"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="py-24 bg-app-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 scroll-animate animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">
                Trusted Engineering
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-red/80">
                  Partner
                </span>
              </h2>
              <p className="text-xl text-dark-gray">
                Building relationships that power the future
              </p>
            </div>
            <div className="mt-8 lg:mt-0 animate-fade-in-up animation-delay-100">
              <div className="flex items-center space-x-4">
                <Award className="w-16 h-16 text-primary-red" />
                <div>
                  <div className="text-2xl font-bold text-dark-gray">
                    ISO Certified
                  </div>
                  <div className="text-dark-gray">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="scroll-animate animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <img
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-dark-gray/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-app-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="font-semibold">Trusted Partner</div>
                    <div className="text-app-white/80">
                      Excellence in collaboration
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
