/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palet warna kustom Anda
        "dark-gray": "#414040", // Menggantikan gray-900, dll.
        "primary-red": "#C02226", // Menggantikan orange-500, dll.
        "secondary-blue": "#20295C", // Menggantikan blue-900, dll.
        // Anda juga bisa mendefinisikan putih secara eksplisit, meski 'white' sudah default di Tailwind
        "app-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
