import React from "react"; // Pastikan React diimpor di sini
import { useParams } from "react-router-dom"; // Untuk mengambil serviceName dari URL

function ServiceDetail() {
  // Mengambil parameter serviceName dari URL
  const { serviceName } = useParams<{ serviceName?: string }>();

  // Fungsi untuk membersihkan dan memformat nama layanan
  const formatServiceName = (name?: string) => {
    if (!name) return "Unknown Service";
    // Mengganti tanda hubung dengan spasi dan membuat setiap kata berkapital
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-app-white py-20">
      {" "}
      {/* Tambahkan padding atas untuk menghindari navbar fixed */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-gray mb-6">
          Detail Layanan:{" "}
          <span className="text-primary-red">
            {formatServiceName(serviceName)}
          </span>
        </h1>
        <p className="text-lg text-dark-gray leading-relaxed mb-8">
          Di halaman ini, Anda dapat menemukan informasi lebih lanjut mengenai
          layanan "{formatServiceName(serviceName)}". Kami berkomitmen untuk
          menyediakan solusi terbaik sesuai kebutuhan Anda.
        </p>
        <div className="bg-secondary-blue/10 p-8 rounded-lg shadow-lg text-left">
          <h2 className="text-2xl font-semibold text-secondary-blue mb-4">
            Ringkasan Layanan
          </h2>
          <ul className="text-dark-gray space-y-3">
            <li>
              <span className="font-semibold text-primary-red">
                Layanan Kustom:
              </span>{" "}
              Setiap layanan dirancang khusus untuk memenuhi kebutuhan proyek
              Anda.
            </li>
            <li>
              <span className="font-semibold text-primary-red">
                Tim Profesional:
              </span>{" "}
              Didukung oleh insinyur dan manajer proyek berpengalaman.
            </li>
            <li>
              <span className="font-semibold text-primary-red">
                Kualitas Terjamin:
              </span>{" "}
              Mengikuti standar ISO tertinggi untuk memastikan kualitas dan
              keamanan.
            </li>
          </ul>
        </div>
        {/* Anda bisa menambahkan lebih banyak konten spesifik layanan di sini */}
      </div>
    </div>
  );
}

export default ServiceDetail; // PENTING: Ekspor sebagai default di sini!
