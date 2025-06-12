import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Settings,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  // activeSlide is now only for the slideshow in the combined #section-about-us
  const [activeSlide, setActiveSlide] = useState(0);
  const [isIsoDropdownOpen, setIsIsoDropdownOpen] = useState(false); // For dropdown in #section-hero

  // Data for the slideshow (used in the combined section)
  const combinedSectionSlides = [
    "/img/HeroSection.png", // Ensure this path is correct
    "/img/Back2.png", // Ensure this path is correct
    "/img/Company2.png", // Ensure this path is correct
  ];

  // Data for services in #section-services
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-primary-red" />,
      title: "Engineering Design",
      description:
        "Comprehensive design services tailored to meet the specific requirements of your power generation projects with precision and innovation.",
      link: "/service-detail/engineering-design",
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
      link: "/service-detail/supervision-services",
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
      link: "/service-detail/project-management",
      features: [
        "Timeline Management",
        "Budget Control",
        "Risk Assessment",
        "Stakeholder Communication",
      ],
    },
  ];

  // Data for projects in #section-projects
  const projects = [
    {
      image: "/img/2019.png", // Ensure this path is correct
      title:
        "Service Consultants Planning & Engineering Litbang & Prototype Spherical Powder, Propelan Phase II Fiscal year 2019 – Ministry of Defense (KEMENHAN RI)",
      category: "Defense Engineering",
      year: "2019",
    },
    {
      image: "/img/2020.png", // Ensure this path is correct
      title:
        "PMC services for EPC pipes and gas meters for gasification of PLTMG Sorong – PT. Sarana Gas Papua",
      category: "Power Generation",
      year: "2020",
    },
    {
      image: "/img/2021.png", // Ensure this path is correct
      title:
        "PLTD Nusa Penida & PLTMG Sorong Orifice Flow Meter Calibration – PT. Cogindo Daya Bersama.",
      category: "Chemical Engineering",
      year: "2021",
    },
  ];

  // Data for ISO logos in #section-hero (for the dropdown)
  const isoCertifications = [
    {
      src: "/img/iso-1.png", // Ensure this path is correct
      alt: "ISO 9001 Certified",
      title: "Quality Management",
    },
    {
      src: "/img/iso-2.png", // Ensure this path is correct
      alt: "ISO 14001 Certified",
      title: "Environmental Management",
    },
    {
      src: "/img/iso-3.png", // Ensure this path is correct
      alt: "ISO 45001 Certified",
      title: "Occupational Health & Safety",
    },
  ];

  // Data for partners/certifications in #section-trusted-partner
  const trustedPartnersLogos = [
    "/img/iso-1.png",
    "/img/iso-2.png",
    "/img/iso-3.png",
  ];

  // Effect for slideshow in the combined section
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % combinedSectionSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [combinedSectionSlides.length]);

  // Effect for scroll animations (fade-in-up)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50px",
      threshold: 0.1,
    };

    const handleIntersection = (entries) => {
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
    <div className="pt-20">
      {/* --- */}
      {/* 1. Hero Section - Company Introduction */}
      {/* --- */}
      <section
        id="section-hero"
        className="py-24 bg-app-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content: Headline, Description, CTA Buttons */}
            <div className="scroll-animate animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-primary-red/10 rounded-full mb-6">
                <Building2 className="w-5 h-5 text-primary-red mr-2" />
                <span className="text-primary-red font-semibold">
                  Company Profile
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-dark-gray mb-8 leading-tight">
                Engineering Excellence in
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-red/80">
                  {" "}
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
                <Link
                  to="/services"
                  className="group bg-primary-red text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-red/90 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Explore Our Services
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/projects"
                  className="px-8 py-4 text-dark-gray font-semibold border border-gray-300 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>

            {/* Right Visual: Company Image with Experience Overlay & ISO Dropdown */}
            <div className="scroll-animate animate-fade-in-up animation-delay-300">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-red to-secondary-blue rounded-3xl blur opacity-20"></div>
                <img
                  src="/img/Company2.png" // The Company Profile image
                  alt="Company Profile Visual"
                  className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-secondary-blue to-secondary-blue/80 text-app-white p-8 rounded-2xl shadow-2xl">
                  <div className="text-4xl font-bold mb-2">10+</div>
                  <div className="text-app-white">Years of Excellence</div>
                  <div className="w-12 h-1 bg-primary-red mt-3 rounded-full"></div>
                </div>

                {/* ISO Certified Dropdown */}
                <div className="absolute -right-4 top-1/4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-20">
                  <button
                    onClick={() => setIsIsoDropdownOpen(!isIsoDropdownOpen)}
                    className="flex items-center space-x-3 p-4 w-full text-left"
                  >
                    <div className="w-10 h-10 bg-primary-red rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">
                        ISO Certified
                      </p>
                      <p className="text-slate-500 text-xs">
                        View all our certifications
                      </p>
                    </div>
                    {isIsoDropdownOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-600 ml-auto" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-600 ml-auto" />
                    )}
                  </button>
                  {isIsoDropdownOpen && (
                    <div className="px-4 pb-4 pt-2 border-t border-slate-100 animate-fade-in-down">
                      <div className="space-y-3">
                        {isoCertifications.map((iso, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <img
                              src={iso.src}
                              alt={iso.alt}
                              className="h-10 w-10 object-contain flex-shrink-0"
                            />
                            <div>
                              <p className="font-semibold text-slate-800 text-sm">
                                {iso.title}
                              </p>
                              <p className="text-slate-500 text-xs">
                                {iso.alt}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Decorative elements, adjusted for white background */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-red/10 rounded-full opacity-30 blur-2xl z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secondary-blue/10 rounded-full opacity-20 blur-xl z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}
      {/* 2. Combined About Us & Experience Section */}
      {/* This section now combines "Company Overview" and "Experience" for a seamless background. */}
      {/* --- */}
      <section
        id="section-about-us"
        className="py-24 bg-gradient-to-br from-dark-gray via-secondary-blue to-dark-gray relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Company Overview content (image left, text right) */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left Visual Content (Slideshow) */}
            <div className="relative scroll-animate animate-fade-in-up animation-delay-300 h-full">
              <div className="relative bg-app-white/10 backdrop-blur-lg rounded-3xl p-2 border border-app-white/20 overflow-hidden h-full">
                {combinedSectionSlides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Company Overview Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-1000 ${
                      index === activeSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-dark-gray/50 flex items-center justify-center rounded-2xl z-10">
                  <p className="text-app-white text-lg md:text-xl font-bold text-center drop-shadow-lg">
                    Comprehensive Solutions for Power Generation
                  </p>
                </div>
                {/* Decorative elements for the image side (consistent with Experience visual) */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-red to-secondary-blue rounded-3xl blur opacity-30"></div>
              </div>
            </div>

            {/* Right Content: Headlines, Description, Download Button */}
            <div className="space-y-6 scroll-animate animate-fade-in-up">
              <div className="space-y-0">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-app-white leading-tight animate-fade-in-up animation-delay-200">
                  Puri Ganesha Engineering
                </h1>
                <p className="text-2xl md:text-3xl lg:text-3xl font-bold text-app-white/80 leading-tight animate-fade-in-up animation-delay-300">
                  Your Trusted Partner for Power Generation
                </p>
              </div>

              <p className="text-base md:text-lg text-app-white/80 leading-relaxed max-w-lg animate-fade-in-up animation-delay-400">
                Delivering comprehensive engineering solutions with precision,
                innovation, and a decade of proven excellence in power plant
                projects. We are committed to fostering strong partnerships and
                driving sustainable energy solutions.
              </p>

              {/* Download Company Profile Button */}
              <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up animation-delay-600">
                <a
                  href="/path/to/your/Company_Profile.pdf" // Ganti dengan path file PDF Company Profile Anda
                  download
                  className="group bg-primary-red text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-red/90 transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Download Company Profile
                  <Download className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Our Experience content (text left, image right) */}
          {/* Added pt-24 and border-t for visual separation within the section, making it structured but seamless */}
          <div className="grid lg:grid-cols-2 gap-16 items-center pt-24 border-t border-app-white/10">
            <div className="scroll-animate animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-2 bg-primary-red/20 backdrop-blur-sm rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-primary-red/80 mr-2" />
                <span className="text-primary-red/80 font-semibold">
                  Our Extensive Experience
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-app-white mb-8 leading-tight">
                Driving Innovation in Power Generation
              </h2>
              <p className="text-app-white/80 text-lg leading-relaxed mb-8">
                With a robust history of successful projects, our team brings
                unparalleled expertise and a commitment to excellence in every
                engineering challenge. We leverage cutting-edge technology and
                innovative approaches to deliver sustainable and efficient power
                solutions.
              </p>
              <Link
                to="/experience"
                className="bg-gradient-to-r from-primary-red to-primary-red/80 hover:from-primary-red/90 hover:to-primary-red/70 text-app-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center group"
              >
                Learn More About Our Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Visual (consistent with Company Overview visual styling) */}
            <div className="scroll-animate animate-fade-in-up animation-delay-300">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-secondary-blue to-primary-red rounded-3xl blur opacity-30"></div>
                <div className="relative bg-app-white/10 backdrop-blur-lg rounded-3xl p-2 border border-app-white/20">
                  <img
                    src="/img/Company2.png" // Using one of your existing slides for consistency, you can change this
                    alt="Our Extensive Experience Visual"
                    className="rounded-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-dark-gray/50 flex items-center justify-center rounded-2xl z-10">
                    <p className="text-app-white text-lg md:text-xl font-bold text-center drop-shadow-lg">
                      Our Decades of Expertise
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}
      {/* 3. Trusted Partner Section - Certifications & Collaborations (Numbering changed) */}
      {/* --- */}
      <section
        id="section-trusted-partner"
        className="py-24 bg-app-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 scroll-animate animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-gray mb-4">
                Trusted Engineering
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-red/80">
                  {" "}
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
            {trustedPartnersLogos.map((partner, index) => (
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
      {/* --- */}
      {/* 4. Projects Section - Featured Work (Numbering changed) */}
      {/* --- */}
      <section
        id="section-projects"
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
                {" "}
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
      {/* --- */}
      {/* 5. Services Section - Offerings (Numbering changed) */}
      {/* --- */}
      <section
        id="section-services"
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
                {" "}
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
      {/* --- */}
      {/* 6. Contact Section - Get In Touch (Numbering changed) */}
      {/* --- */}
      <section
        id="section-contact"
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
