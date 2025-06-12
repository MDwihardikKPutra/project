// src/pages/Contact.tsx
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe, // Tambahkan Globe jika Anda menggunakannya di workshop
  Settings, // Tambahkan Settings jika Anda menggunakannya di workshop
} from "lucide-react"; // Pastikan semua ikon yang relevan diimpor

function Contact() {
  return (
    <div className="pt-20">
      {" "}
      {/* Padding atas untuk menghindari navbar fixed */}
      <section
        id="contact" // ID untuk navigasi atau styling
        className="py-24 bg-gradient-to-br from-dark-gray to-secondary-blue relative overflow-hidden" // Styling section dengan gradient background
      >
        {/* Pattern background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate animate-fade-in-up">
            {/* Badge "Contact Us" */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-red/20 backdrop-blur-sm rounded-full mb-6">
              <Phone className="w-5 h-5 text-primary-red/80 mr-2" />{" "}
              {/* Icon Phone */}
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

          {/* Grid untuk menampilkan informasi kontak */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Kartu Main Office */}
            <div
              className="scroll-animate animate-fade-in-up"
              style={{ animationDelay: `300ms` }} // Delay animasi
            >
              <div className="bg-app-white/10 backdrop-blur-lg rounded-3xl p-8 border border-app-white/20 h-full">
                {/* Placeholder gambar/ikon untuk Main Office */}
                <div className="w-full h-48 bg-gradient-to-br from-primary-red to-primary-red/80 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <img
                    src="/img/office.png" // Sumber gambar office icon
                    alt="Main Office Icon"
                    className="w-16 h-16 object-contain text-app-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-app-white mb-6">
                  Main Office
                </h3>
                <div className="space-y-4 text-app-white/80">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary-red mt-1 flex-shrink-0" />{" "}
                    {/* Icon MapPin */}
                    <div>
                      <p className="font-semibold text-app-white">Address:</p>
                      <p>Wisma Monex, 9th Floor</p>
                      <p>Jl. Asia Afrika 133 – 137</p>
                      <p>Bandung – 40112</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-primary-red" />{" "}
                    {/* Icon Phone */}
                    <div>
                      <p className="font-semibold text-app-white">Phone:</p>
                      <p>+6222-8732 1180</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-primary-red" />{" "}
                    {/* Icon Clock */}
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

            {/* Kartu Engineering Workshop */}
            <div
              className="scroll-animate animate-fade-in-up"
              style={{ animationDelay: `450ms` }} // Delay animasi
            >
              <div className="bg-app-white/10 backdrop-blur-lg rounded-3xl p-8 border border-app-white/20 h-full">
                {/* Placeholder gambar/ikon untuk Engineering Workshop */}
                <div className="w-full h-48 bg-gradient-to-br from-primary-red to-primary-red/80 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                  <Settings className="w-16 h-16 text-app-white" />{" "}
                  {/* Icon Settings */}
                </div>
                <h3 className="text-2xl font-bold text-app-white mb-6">
                  Engineering Workshop
                </h3>
                <div className="space-y-4 text-app-white/80">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-primary-red mt-1 flex-shrink-0" />{" "}
                    {/* Icon MapPin */}
                    <div>
                      <p className="font-semibold text-app-white">Address:</p>
                      <p>Jl.sepak bola No. 27,</p>
                      <p>Sukamiskin, Kec. Arcamanik,</p>
                      <p>Kota Bandung 40293</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-primary-red" />{" "}
                    {/* Icon Mail */}
                    <div>
                      <p className="font-semibold text-app-white">Email:</p>
                      <p>info@pg-engineering.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-primary-red" />{" "}
                    {/* Icon Globe */}
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

export default Contact; // Pastikan ini ada!
