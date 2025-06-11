import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Zap, // Digunakan di Hero Section
  Settings, // Digunakan di Services Section
  Users, // Digunakan di Services Section
  Award, // Digunakan di Trusted Partner Section
  Phone, // Digunakan di Contact Section
  Mail, // Digunakan di Contact Section
  MapPin, // Digunakan di Contact Section
  Clock, // Digunakan di Contact Section
  Download, // Digunakan di Company Profile Section
  Eye, // Digunakan di Supervision Services Section
  Shield, // Digunakan di Supervision Services Section
  // Tambahkan kembali ikon yang digunakan di sini
  Globe, // Digunakan di Projects Section
  TrendingUp, // Digunakan di Experience Section
  CheckCircle, // Digunakan di Services Section
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    "/img/Back2.png",
    "/img/Company2.png",
    "/img/HeroSection.png",
  ];

  // Efek untuk slideshow otomatis di Hero Section
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
          entry.target.classList.add("animate-in"); // Kelas untuk animasi saat muncul
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    // Targetkan elemen dengan kelas 'scroll-animate' untuk animasi saat muncul
    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-primary-red" />,
      title: "Engineering Design",
      description:
        "Comprehensive design services tailored to meet the specific requirements of your power generation projects with precision and innovation.",
      link: "/service-detail/engineering-design", // Link ke halaman detail service
      features: [
        "3D Modeling",
        "Technical Documentation",
        "Compliance Standards",
        "Quality Assurance",
      ],
    },
    {
      icon: <Settings className="w-12 h-12 text-primary-red" />,
      title: "Supervision Services",
      description:
        "Professional construction supervision to safeguard project completion with experienced personnel controlling every aspect of construction work.",
      link: "/service-detail/supervision-services", // Link ke halaman detail service
      features: [
        "On-site Management",
        "Quality Control",
        "Safety Protocols",
        "Progress Monitoring",
      ],
    },
    {
      icon: <Users className="w-12 h-12 text-primary-red" />,
      title: "Project Management",
      description:
        "Expert project management services ensuring your construction projects stay on schedule, within budget, and meet quality standards.",
      link: "/service-detail/project-management", // Link ke halaman detail service
      features: [
        "Timeline Management",
        "Budget Control",
        "Risk Assessment",
        "Stakeholder Communication",
      ],
    },
  ];

  const projects = [
    // Data projects dipindahkan kembali ke sini
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

  const partners = ["/img/iso-1.png", "/img/iso-2.png", "/img/iso-3.png"]; // Data partners dipindahkan kembali ke sini

  const supervisionBenefits = [
    "Gain an experienced team of experts, placed permanently on site",
    "Keep your construction project on schedule and reduce technical risks",
    "Comply with relevant building regulations and quality standards",
    "Ensure all work conforms to specified technical documentation",
    "Complete and issue all documents, certificates and declarations correctly",
  ];

  return (
    <div className="pt-20">
      {" "}
      {/* Tambahkan padding atas untuk menghindari navbar fixed */}
      {/* 1. Hero Section */}
      <section
        id="home-hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-dark-gray/70 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-app-white space-y-8 scroll-animate animate-fade-in-up">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-primary-red font-medium animate-fade-in-up">
                  Energy Solutions
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up animation-delay-200">
                  Power Plant
                  <br />
                  <span className="text-primary-red">Expert</span>
                </h1>
                <p className="text-lg md:text-xl text-app-white animate-fade-in-up animation-delay-400">
                  Since 2010 we manage more than 50 projects and still counting
                </p>
              </div>
              <button className="bg-secondary-blue hover:bg-secondary-blue/80 text-app-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 animate-fade-in-up animation-delay-600">
                Take Our Service
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="space-y-8 scroll-animate animate-fade-in-up animation-delay-800">
              {/* Mengganti ISO boxes dengan gambar ISO dan menambahkan animasi */}
              <div className="flex justify-center md:justify-end flex-wrap gap-4">
                <img
                  src="/img/iso-1.png"
                  alt="ISO 9001:2015"
                  className="h-24 object-contain shadow-lg rounded-lg animate-fade-in-up animation-delay-800 transition-all duration-500 hover:scale-105"
                />
                <img
                  src="/img/iso-2.png"
                  alt="ISO 14001:2015"
                  className="h-24 object-contain shadow-lg rounded-lg animate-fade-in-up animation-delay-900 transition-all duration-500 hover:scale-105"
                />
                <img
                  src="/img/iso-3.png"
                  alt="ISO 45001:2018"
                  className="h-24 object-contain shadow-lg rounded-lg animate-fade-in-up animation-delay-1000 transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeSlide ? "bg-primary-red w-8" : "bg-app-white/50"
              }`}
            />
          ))}
        </div>
      </section>
      {/* 2. Company Profile (About Section) */}
      <section
        id="about"
        className="py-24 bg-app-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-red/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate animate-fade-in-up">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-red to-secondary-blue rounded-3xl blur opacity-20"></div>
                <img
                  src="/img/Company2.png"
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
      {/* 3. Our Experience (Experience Section) */}
      <section
        id="experience-section-home" // Ubah ID untuk menghindari konflik dengan page /experience
        className="py-24 bg-gradient-to-br from-dark-gray via-secondary-blue to-dark-gray relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="scroll-animate animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-primary-red/20 backdrop-blur-sm rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-primary-red/80 mr-2" />
                <span className="text-primary-red/80 font-semibold">
                  Our Experience
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-app-white mb-8 leading-tight">
                Engineering Excellence in Power Generation
              </h2>
              <p className="text-app-white/80 text-lg leading-relaxed mb-8">
                We specialize in comprehensive engineering solutions for power
                plant projects, combining decades of experience with
                cutting-edge technology to deliver exceptional results that
                exceed expectations.
              </p>

              {/* Hapus bagian stats (50+ Projects, 10+ Years) sesuai permintaan */}
              {/* <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center p-6 bg-app-white/10 backdrop-blur-sm rounded-2xl border border-app-white/20">
                  <div className="text-5xl font-bold text-primary-red mb-2">50+</div>
                  <div className="text-app-white">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-app-white/10 backdrop-blur-sm rounded-2xl border border-app-white/20">
                  <div className="text-5xl font-bold text-primary-red mb-2">10+</div>
                  <div className="text-app-white">Years Experience</div>
                </div>
              </div> */}

              <Link
                to="/experience" // Link ke halaman Experience.tsx yang terpisah
                className="bg-gradient-to-r from-primary-red to-primary-red/80 hover:from-primary-red/90 hover:to-primary-red/70 text-app-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center group"
              >
                Our Experience
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="scroll-animate animate-fade-in-up animation-delay-300">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-red to-secondary-blue rounded-3xl blur opacity-30"></div>
                <div className="relative bg-app-white/10 backdrop-blur-lg rounded-3xl p-2 border border-app-white/20">
                  <img
                    src={slides[activeSlide]} // Menggunakan slides array dari atas
                    alt="Our Experience Visual"
                    className="rounded-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-dark-gray/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-app-white">
                    <div className="text-2xl font-bold mb-2">
                      Dynamic Experience
                    </div>
                    <div className="text-app-white/80">
                      Visualizing our project journey
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. Trusted Partner Section */}
      <section
        id="partners"
        className="py-24 bg-app-white relative overflow-hidden"
      >
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
      {/* 5. Our Project (Projects Section) */}
      <section
        id="projects-section-home" // Ubah ID untuk menghindari konflik dengan page /projects
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
            <Link
              to="/projects"
              className="bg-gradient-to-r from-primary-red to-primary-red/80 hover:from-primary-red/90 hover:to-primary-red/70 text-app-white px-10 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
      {/* 6. Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-br from-app-white to-app-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20 scroll-animate animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary-red/10 rounded-full mb-6">
              <Settings className="w-5 h-5 text-primary-red mr-2" />
              <span className="text-primary-red font-semibold">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-dark-gray mb-6 leading-tight animate-fade-in-up animation-delay-100">
              Fully Integrated
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-red/80">
                Engineering Services
              </span>
            </h2>
            <p className="text-dark-gray text-xl max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Comprehensive solutions designed to meet every aspect of your
              power generation needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="scroll-animate animate-fade-in-up"
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                <div className="bg-app-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4 border border-gray-100 h-full">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray mb-4">
                    {service.title}
                  </h3>
                  <p className="text-dark-gray leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-dark-gray"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link
                      to={service.link}
                      className="text-primary-red font-semibold hover:text-primary-red/80 transition-colors flex items-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 7. Contact Section (Dipindah ke paling bawah di Home) */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-dark-gray to-secondary-blue relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary-red/20 backdrop-blur-sm rounded-full mb-6">
              <Phone className="w-5 h-5 text-primary-red/80 mr-2" />
              <span className="text-primary-red/80 font-semibold">
                Contact Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-app-white mb-6 animate-fade-in-up animation-delay-100">
              Get In Touch
            </h2>
            <p className="text-app-white/80 text-xl max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Ready to start your next power generation project? Contact our
              expert team today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div
              className="scroll-animate animate-fade-in-up"
              style={{ animationDelay: `300ms` }}
            >
              <div className="bg-app-white/10 backdrop-blur-lg rounded-3xl p-8 border border-app-white/20 h-full">
                <div className="w-full h-48 bg-gradient-to-br from-primary-red to-primary-red/80 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/img/office.png"
                    alt="Main Office Icon"
                    className="w-16 h-16 object-contain text-app-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-app-white mb-6">
                  Main Office
                </h3>
                <div className="space-y-4 text-app-white/80">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary-red mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-app-white">Address:</p>
                      <p>Wisma Monex, 9th Floor</p>
                      <p>Jl. Asia Afrika 133 – 137</p>
                      <p>Bandung – 40112</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-primary-red" />
                    <div>
                      <p className="font-semibold text-app-white">Phone:</p>
                      <p>+6222-8732 1180</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-primary-red" />
                    <div>
                      <p className="font-semibold text-app-white">
                        Business Hours:
                      </p>
                      <p>Mon. – Fri. 09:00 – 17:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="scroll-animate animate-fade-in-up"
              style={{ animationDelay: `450ms` }}
            >
              <div className="bg-app-white/10 backdrop-blur-lg rounded-3xl p-8 border border-app-white/20 h-full">
                <div className="w-full h-48 bg-gradient-to-br from-primary-red to-primary-red/80 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <Settings className="w-16 h-16 text-app-white" />
                </div>
                <h3 className="text-2xl font-bold text-app-white mb-6">
                  Engineering Workshop
                </h3>
                <div className="space-y-4 text-app-white/80">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary-red mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-app-white">Address:</p>
                      <p>Jl.sepak bola No. 27,</p>
                      <p>Sukamiskin, Kec. Arcamanik,</p>
                      <p>Kota Bandung 40293</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-primary-red" />
                    <div>
                      <p className="font-semibold text-app-white">Email:</p>
                      <p>info@pg-engineering.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-primary-red" />
                    <div>
                      <p className="font-semibold text-app-white">Website:</p>
                      <p>www.pg-engineering.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
